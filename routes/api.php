<?php

use App\Http\Controllers\AlbumAPI;
use App\Http\Controllers\GistAPI;
use Illuminate\Support\Facades\Route;

Route::post('/gist', [GistAPI::class, 'store']);

Route::post('/album', [AlbumAPI::class, 'store']);
