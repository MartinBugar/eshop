<?php

use App\Http\Controllers\API\AdminController;
use App\Http\Controllers\API\ExpensesController;
use App\Http\Controllers\API\ExpensesTypesController;
use App\Http\Controllers\API\LoanDetailController;
use App\Http\Controllers\API\LoansController;
use App\Http\Controllers\API\PostsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\UserController;

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

Auth::routes(['verify' => true]);

Route::post('adminlogin', [AdminController::class, 'adminlogin']);
Route::post('login', [UserController::class, 'login']);
Route::post('register', [UserController::class, 'register']);
Route::post('logout', [UserController::class, 'logout'])->middleware('auth:sanctum');

Route::group(['prefix' => 'users', 'middleware' => 'auth:sanctum'], function () {
    Route::get('/', [AdminController::class, 'index']);
    Route::post('update/{id}', [UserController::class, 'update']);
    Route::get('edit/{id}', [UserController::class, 'edit']);
    Route::delete('delete/{id}', [UserController::class, 'delete']);
});





