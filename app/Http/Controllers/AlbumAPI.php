<?php

namespace App\Http\Controllers;

use App\Actions\CreateAlbumOfGists;
use App\Data\CreateAlbumData;

class AlbumAPI extends Controller
{
    public function store(CreateAlbumData $createAlbumData, CreateAlbumOfGists $createAlbumOfGists)
    {
        $album = $createAlbumOfGists->handle($createAlbumData);

        $response = ['link' => url("album/$album->id")];

        return response()->json($response, 201);
    }
}
