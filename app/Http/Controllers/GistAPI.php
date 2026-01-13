<?php

namespace App\Http\Controllers;

use App\Actions\CreateGist;
use App\Http\Requests\CreateGistRequest;

class GistAPI extends Controller
{
    public function store(CreateGistRequest $request, CreateGist $createGist)
    {
        $request = $request->validated();

        $gist = $createGist->handle($request['file_name'], $request['content']);

        $link = url("gist/$gist->id");
        $data = ['link' => $link];

        return response()->json($data, status: 201);
    }
}
