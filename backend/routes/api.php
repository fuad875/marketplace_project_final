<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


use App\Events\Message;

use Illuminate\Http\Response;
use App\Http\Controllers\BotManController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



/*Contest Part*/
Route::get('/contestList','ContestController@list');
Route::post('/postContest', 'ContestController@create');
Route::get('/deleteContest/{id}', 'ContestController@delete');
/*Contest Part*/

/*Project Part*/
Route::get('/projectList','ProjectController@list');
Route::post('/postProject', 'ProjectController@create');
Route::get('/deleteProject/{id}', 'ProjectController@delete');
/*Project Part*/


/*Bids Part*/
Route::get('/bidList','BidController@list');
Route::get('/bidList_details/{id}','BidController@bid_details');
Route::get('/download/{file}','BidController@download');
/* Bidder*/
Route::get('/seller_bidingproject', 'BidController@seller_bidingproject');
Route::match(['get','post'], '/botman', [BotManController::class,"handle"]);
/*Bidder*/
/*Bids Part*/



