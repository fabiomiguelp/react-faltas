<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PresencasController;
use App\Http\Controllers\GoogleSheetsController;

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

//PUBLIC ROUTES
Route::get('/presencas/{piso}', [PresencasController::class,'index']);
Route::put('/presencas/{id}', [PresencasController::class,'update']);
Route::get('/savetosheet', [GoogleSheetsController::class,'saveToSheet']);
// get presencas marcadas pelo funcionario
Route::post('/presencasmarcadasfunc', [PresencasController::class,'presencasmarcadasfunc']);


Route::get('/getCalendar/{id}', [GoogleSheetsController::class,'getCalendar']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
