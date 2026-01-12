<?php

namespace App\Http\Controllers;

use App\Actions\GetLanguageFromExtension;
use App\Models\Gist;
use Inertia\Inertia;

class GistController extends Controller
{
    public function show(Gist $gist, GetLanguageFromExtension $getLanguageFromExtension)
    {
        $gistProp = [
            'name' => $gist->file_name,
            'content' => $gist->content,
            'language' => $getLanguageFromExtension->handle($gist->getExtension()),
        ];

        return Inertia::render('gist-show', ['gist' => $gistProp]);
    }
}
