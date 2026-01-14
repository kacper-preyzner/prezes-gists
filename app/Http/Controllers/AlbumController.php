<?php

namespace App\Http\Controllers;

use App\Actions\GetLanguageFromExtension;
use App\Models\Album;
use Inertia\Inertia;

class AlbumController extends Controller
{
    public function show(Album $album, GetLanguageFromExtension $getLanguageFromExtension)
    {
        $gists = $album->gists->map(fn ($gist) => [
            'name' => $gist->file_name,
            'content' => $gist->content,
            'language' => $getLanguageFromExtension->handle($gist->getExtension()),
        ]);

        return Inertia::render('album-show', ['gists' => $gists]);
    }
}
