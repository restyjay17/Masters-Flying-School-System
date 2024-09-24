<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/admin', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/authenticated', function (Request $request) {
    return true;
});


/**
 * Sessions
 */
Route::post('/auth/admin', [AuthController::class, 'adminLogin']);
Route::post('/auth/admin/logout', [AuthController::class, 'adminLogout']);
Route::get('/auth/admin/check', [AuthController::class, 'checkAdminAuth']);


/**
 * Admin
 */

Route::middleware('auth:admin')->group(function() {
    // Administrators
    Route::get('/priv/admins', [AdminController::class, 'getAllAdmins']);
    Route::post('/priv/admin', [AdminController::class, 'saveAdmin']);
    Route::get('/priv/admin', [AdminController::class, 'getAdminDetails']);

    // Students
    Route::get('/priv/students', [AdminController::class, 'getAllStudents']);
    Route::post('/priv/student', [AdminController::class, 'saveStudent']);
    Route::post('/priv/students/send_verification', [AdminController::class, 'sendStudentVerification']);

    // Instructors
    Route::get('/priv/instructors', [AdminController::class, 'getAllInstructors'])->middleware('auth:admin');
    Route::post('/priv/instructor', [AdminController::class, 'saveInstructor']);
    
    // Aircrafts
    Route::get('/priv/aircrafts', [AdminController::class, 'getAllAircrafts']);
    Route::post('/priv/aircraft', [AdminController::class, 'saveAircraft']);
});
