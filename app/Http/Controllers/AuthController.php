<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use App\Models\Admins;

class AuthController extends Controller
{
    
    public function adminLogin(Request $request)
    {
        $auth = Auth::guard('admin')->attempt(['a_uname' => $request->uname, 'password' => $request->pword]);

        if ($auth) {
            $id = Auth::guard('admin')->id();
            $info = Admins::where('id', $id)->first();

            $request->session()->put('uname', $info->a_uname);
            $request->session()->put('name', $info->a_name);
            $request->session()->put('email', $info->a_email);
            $request->session()->put('type', 1);

            return response()->json([
                'status' => $auth
            ], 200);
        } else {
            return response()->json([
                'status' => 'Invalid user credentials.'
            ], 400);
        }
    }


    public function adminLogout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->forget('uname', 'name', 'email', 'type');
        $request->session()->flush();

        return response()->json([
            'redirect' => '/adm'
        ], 200);
    }


    public function checkAdminAuth()
    {
        $check = Auth::guard('admin')->check();

        return response()->json([
            'status' => $check
        ], 200);
    }

}
