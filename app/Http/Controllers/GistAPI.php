<?php

namespace App\Http\Controllers;

use App\Actions\CreateGist;
use App\Http\Requests\CreateGistRequest;
use App\Models\Gist;

class GistAPI extends Controller
{
    public function store(CreateGistRequest $request, CreateGist $createGist)
    {
        $request = $request->validated();

        /** @var Gist $gist */
        $gist = $createGist->handle($request['file_name'], $request['content']);

        $data = ['link' => $gist->getLink()];

        return response()->json($data, status: 201);
    }
}
