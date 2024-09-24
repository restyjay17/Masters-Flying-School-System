<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Models\Admins;
use App\Models\Users;
use App\Models\User_metas;
use App\Models\Students;
use App\Models\Instructors;
use App\Models\Aircrafts;
use App\Models\Admin_logs;

class AdminController extends Controller
{

    public function getAllAdmins(Request $request)
    {
        $search = $request->search;
        
        $admins = DB::table('admins')
                        ->select('*')
                        ->where(function($query) use ($search) {
                            if (isset($search)) {
                                $query->where('a_uname', 'LIKE', '%' . $search . '%')
                                        ->orWhere('a_name', 'LIKE', '%' . $search . '%')
                                        ->orWhere('a_email', 'LIKE', '%' . $search . '%');
                            }
                        })
                        ->orderBy('a_uname')
                        ->paginate(10);

        return response()->json($admins, 200);
    }


    public function saveAdmin(Request $request)
    {
        if (isset($request->target) && !empty($request->target)) {

            $sql = Admins::find($request->target);

        } else {
            $uname = Admins::where('a_uname', $request->uname)->first();
            if (!empty($uname)) {
                return response()->json([
                    'message' => 'Username already exist.'
                ], 400);
            }
            
            $email = Admins::where('a_email', $request->email)->first();
            if (!empty($email)) {
                return response()->json([
                    'message' => 'Email address already exist.'
                ], 400);
            }


            $sql = new Admins();
        }

        $sql->a_uname = $request->uname;
        if (!empty($request->pword)) $sql->a_pword = Hash::make($request->pword);
        $sql->a_name = $request->name;
        $sql->a_email = $request->email;
        $save = $sql->save();

        if ($save) {
            // save logs
            $uname = Session::get('uname');
            $logs = new Admin_logs();
            $logs->module = 'administrator';
            $logs->action = (!empty($request->target)) ? 'updated details of ' . $request->name : 'added ' . $request->name . ' as new administrator';
            $logs->logged_by = (!empty($uname)) ? $uname : 'unknown';
            $logs->data = serialize([
                'target' => (!empty($request->target)) ? $request->target : $sql->id,
                'uname' => $request->uname,
                'name' => $request->name,
                'email' => $request->email
            ]);
            $logs->save();

            return response()->json([
                'msg' => 'Admin details successfully saved.'
            ], 200);
        } else {
            return response()->json([
                'msg' => 'Something went wrong while saving admin details.'
            ], 400);
        }

    }

    
    public function getAdminDetails(Request $request)
    {
        $admin = Admins::find($request->target);

        return response()->json([
            'details' => $admin
        ], 200);
    }


    public function getAllStudents(Request $request)
    {
        $search = $request->search;
        $status = $request->status;

        $students = DB::table('users')
                        ->select('uu_id as userid', 'u_user_id as studentid', DB::raw('CONCAT(u_fname, " ", u_lname) as name'), 'u_email as email', 'u_cnumber as contactnumber', 'u_status as status')
                        ->where('u_type', 1)
                        ->where(function($query) use ($search) {
                            if (isset($search)) {
                                $query->where('u_user_id', 'LIKE', '%' . $search . '%')
                                    ->orwhere('u_lname', 'LIKE', '%' . $search . '%')
                                    ->orwhere('u_fname', 'LIKE', '%' . $search . '%')
                                    ->orwhere('u_address', 'LIKE', '%' . $search . '%')
                                    ->orwhere('u_cnumber', 'LIKE', '%' . $search . '%');
                            }
                        })
                        ->where(function($query) use ($status) {
                            if(isset($status)) {
                                $query->where('u_status', $status);
                            }
                        })
                        ->orderBy('name', 'ASC')
                        ->paginate(10);

        return response()->json($students, 200);
    }


    public function saveStudent(Request $request)
    {

        $studentid = Users::where('u_user_id', $request->studentid)->first();
        if (!empty($studentid)) {
            return response()->json([
                'message' => 'Student ID already exist.'
            ], 400);
        }

        $email = Users::where('u_email', $request->email)->first();
        if (!empty($email)) {
            return response()->json([
                'message' => 'Email address already exist.'
            ], 400);
        }

        $sql = new Users();
        $sql->u_user_id = $request->studentid;
        $sql->u_lname = $request->lname;
        $sql->u_fname = $request->fname;
        $sql->u_mname = $request->mname;
        $sql->u_email = $request->email;
        $sql->u_status = 0;
        $sql->u_type = 1;
        $insert = $sql->save();
        $userid = $sql->uu_id;
        

        if ($insert) {

            $letters = '';
            $words = preg_split("/[\s,_-]+/", $request->fname);
            foreach ($words as $letter) {
                $letters .= mb_substr($letter, 0, 1);
            }
            $uname = $letters . $request->lname;

            $student = new Students();
            $student->s_user_id = $userid;
            $student->s_uname = strtoupper($uname);
            $save = $student->save();

            if (!$save) {
                Users::where('uu_id', $userid)->delete();

                return response()->json([
                    'msg' => 'Something went wrong while saving student details.'
                ], 400);
            } else {
                // save logs
                $uname = Session::get('uname');
                $logs = new Admin_logs();
                $logs->module = 'student';
                $logs->action = 'created student details of ' . $request->fname . ' ' . $request->lname;
                $logs->logged_by = $uname;
                $logs->save();
    

                return response()->json([
                    'msg' => 'Student details successfully saved.'
                ], 200);
            }

        } else {

            return response()->json([
                'msg' => 'Something went wrong while saving student details.'
            ], 400);

        }
    }


    public function sendStudentVerification(Request $request)
    {
        $students = explode(',', $request->students);
        
        if (empty($students)) {
            return response()->json([
                'msg' => 'Something went wrong while sending student email verification.'
            ], 400);
        }


        $success = 0;
        foreach ($students as $userid) {
            $student = DB::table('users as u')
                            ->select(
                                'u.u_user_id', 
                                'u.u_lname', 
                                'u.u_fname', 
                                'u.u_mname', 
                                'u.u_email', 
                                DB::raw('(SELECT s.s_uname FROM students as s WHERE s.s_user_id = u.uu_id) as uname')
                            )
                            ->where('u.uu_id', $userid)
                            ->first();
           
            if (!empty($student)) {
                $tmppword = substr(str_shuffle("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvwxyz"), 0, 6);
                $activationlink = substr(str_shuffle("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstvwxyz"), 0, 32);


                // email
                $subject = '[MFS]('. strtoupper($student->u_lname) .') Account Verification';
                $emailBody = view('email.verification',
                                    [
                                        'fname' => $student->u_fname,
                                        'mname' => $student->u_mname,
                                        'lname' => $student->u_lname,
                                        'studentid' => $student->u_user_id,
                                        'email' => $student->u_email,
                                        'uname' => $student->uname,
                                        'tmpPword' => $tmppword,
                                        'link' => url('/account/' . $activationlink . '/verify')
                                    ]
                            )
                            ->render();
                $recipient = [
                    [
                        'name' => $student->u_fname . ' ' . $student->u_lname,
                        'email' => $student->u_email
                    ]
                ];
                $send = $this->sendMail($recipient, $subject, $emailBody);

                if ($send) {
                    $success++;
                    
                    // update status of main user table
                    $user = Users::find($userid);
                    $user->u_status = 1;
                    $user->save();
                    

                    // save meta data
                    User_metas::updateOrCreate(
                        [
                            'um_user_id' => $userid,
                            'meta_key' => 'tmp_pword'
                        ],
                        [
                            'meta_value' => $tmppword
                        ]
                    );
                    
                    User_metas::updateOrCreate(
                        [
                            'um_user_id' => $userid,
                            'meta_key' => 'activation_link'
                        ],
                        [
                            'meta_value' => $activationlink
                        ]
                    );


                    // save logs
                    $uname = Session::get('uname');
                    $logs = new Admin_logs();
                    $logs->module = 'student';
                    $logs->action = 'sent verification email to ' . $student->u_fname . ' ' . $student->u_lname;
                    $logs->logged_by = $uname;
                    $logs->save();
        
                } else {
                    // revert status of users
                    $user = Users::find($userid);
                    $user->u_status = 0;
                    $user->save();
                }
            }                   
        }


        if ($success === count($students)) {

            return response()->json([
                'msg' => 'Successfully sent student email verification.'
            ], 200);

        } else {

            return response()->json([
                'msg' => 'Something went wrong while sending student email verification.'
            ], 400);

        }
    }


    public function getAllInstructors(Request $request)
    {
        $search = $request->search;

        $instructors = DB::table('users')
                        ->select('u_user_id as employeeid', DB::raw('CONCAT(u_fname, " ", u_lname) as name'), 'u_email as email', 'u_address as address', 'u_cnumber as contactnumber')
                        ->where('u_type', 2)
                        ->where(function($query) use ($search) {
                            if (isset($search)) {
                                $query->where('u_user_id', 'LIKE', '%' . $search . '%')
                                    ->orwhere('u_lname', 'LIKE', '%' . $search . '%')
                                    ->orwhere('u_fname', 'LIKE', '%' . $search . '%')
                                    ->orwhere('u_email', 'LIKE', '%' . $search . '%')
                                    ->orwhere('u_address', 'LIKE', '%' . $search . '%')
                                    ->orwhere('u_cnumber', 'LIKE', '%' . $search . '%');
                            }
                        })
                        ->orderBy('name', 'ASC')
                        ->paginate(10);

        return response()->json($instructors, 200);
    }


    public function saveInstructor(Request $request)
    {
        $sql = new Users();
        $sql->u_user_id = $request->employeeid;
        $sql->u_lname = $request->lname;
        $sql->u_fname = $request->fname;
        $sql->u_mname = $request->mname;
        $sql->u_email = $request->email;
        $sql->u_status = 0;
        $sql->u_type = 2;
        $insert = $sql->save();
        $userid = $sql->uu_id;

        if ($insert) {

            $letters = '';
            $words = preg_split("/[\s,_-]+/", $request->fname);
            foreach ($words as $letter) {
                $letters .= mb_substr($letter, 0, 1);
            }
            $uname = $letters . $request->lname;

            $instructor = new Instructors();
            $instructor->i_user_id = $userid;
            $instructor->i_uname = strtoupper($uname);
            $save = $instructor->save();

            if (!$save) {
                Users::where('uu_id', $userid)->delete();

                return response()->json([
                    'msg' => 'Something went wrong while saving instructor details.'
                ], 400);
            } else {

                // save logs
                $uname = Session::get('uname');
                $logs = new Admin_logs();
                $logs->module = 'instructor';
                $logs->action = 'created instructor details of ' . $request->fname . ' ' . $request->lname;
                $logs->logged_by = $uname;
                $logs->save();

                return response()->json([
                    'msg' => 'Instructor details successfully saved.'
                ], 200);
            }

        } else {

            return response()->json([
                'msg' => 'Something went wrong while saving instructor details.'
            ], 400);

        }
    }


    public function getAllAircrafts(Request $request)
    {
        $search = $request->search;

        $aircrafts = DB::table('aircrafts')
                        ->select('flight_id', 'aircraft', 'type', 'size', 'status')
                        ->where(function($query) use ($search) {
                            if (isset($search)) {
                                $query->where('flight_id', 'LIKE', '%' . $search . '%')
                                    ->orwhere('aircraft', 'LIKE', '%' . $search . '%')
                                    ->orwhere('type', 'LIKE', '%' . $search . '%')
                                    ->orwhere('size', 'LIKE', '%' . $search . '%');
                            }
                        })
                        ->orderBy('aircraft')
                        ->paginate(10);

        return response()->json($aircrafts, 200);
    }


    public function saveAircraft(Request $request)
    {
        $sql = new Aircrafts();
        $sql->flight_id = $request->flightid;
        $sql->aircraft = $request->aircraft;
        $sql->type = $request->type;
        $sql->size = $request->size;
        $sql->status = $request->status;
        $save = $sql->save();

        if ($save) {

            // save logs
            $uname = Session::get('uname');
            $logs = new Admin_logs();
            $logs->module = 'aircraft';
            $logs->action = 'created aircraft details for ' . $request->aircraft;
            $logs->logged_by = $uname;
            $logs->save();

            return response()->json([
                'msg' => 'Aircraft details successfully saved.'
            ], 200);
        } else {
            return response()->json([
                'msg' => 'Something went wrong while saving aircraft details.'
            ], 400);
        }
    }



    /**
     * Send mail using sendinblue api
     * @param array recipient           nested array [[email=>, name=>]]
     * @param string subject
     * @param string content            email content can be both text and html format
     * @param array sender              array [[name=>, email=>]]
     *                                  and 2nd value is the name of the sender
     * @param array cc                  nested array [[email=>, name=>]]
     * @param array bcc                 nested array [[email=>, name=>]]
     * @param array attachment          nested array [[url=>, name=>],[content=>base64, name=>]]
     * @return
     */
    public function sendMail($recipient, $subject, $content, $cc = array(), $attachment = array(), $sender = array('name' => 'MFS', 'email' => 'no-reply@mail.mswlive.com'), $reply = FALSE, $bcc = array())
    {

        require(base_path('vendor/autoload.php'));

        $config = \SendinBlue\Client\Configuration::getDefaultConfiguration()->setApiKey('api-key', env('BRV_KEY'));

        $apiInstance = new \SendinBlue\Client\Api\TransactionalEmailsApi(
            new \GuzzleHttp\Client(),
            $config
        );
        $sendSmtpEmail = new \SendinBlue\Client\Model\SendSmtpEmail();


        $mailTag = "test";

        $sendSmtpEmail['subject'] = $subject;
        $sendSmtpEmail['htmlContent'] = $content;
        $sendSmtpEmail['sender'] = $sender;
        $sendSmtpEmail['to'] = $recipient;
        
        if (!empty($cc)) $sendSmtpEmail['cc'] = $cc;

        if (!empty($bcc)) $sendSmtpEmail['bcc'] = $bcc;
        
        if ($reply) $sendSmtpEmail['replyTo'] = $sender;

        if (!empty($attachment)) $sendSmtpEmail['attachment'] = $attachment;
        
        $sendSmtpEmail['headers'] = array(
            'sender.ip' => env('BRV_IP')
        );
        $sendSmtpEmail['tags'] = [$mailTag];



        try {
            $host = request()->getHost();
            if ($host == 'localhost' || $host == 'localhost:8000' || $host == '127.0.0.1') {
                return TRUE;
            } else {
                $result = $apiInstance->sendTransacEmail($sendSmtpEmail);
                return $result;
            }
        } catch (Exception $e) {
            return FALSE;
        }

    }
}
