<?php

use App\Http\Controllers\GistAPI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/gist', [GistAPI::class, 'store']);
