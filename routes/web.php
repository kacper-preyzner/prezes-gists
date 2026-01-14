<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\GistController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/gist/{gist}', [GistController::class, 'show']);

Route::get('/album/{album}', [AlbumController::class, 'show']);

// require __DIR__ . '/settings.php';
