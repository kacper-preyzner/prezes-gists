<?php

namespace App\Actions;

use App\Data\CreateAlbumData;
use App\Data\CreateGistData;
use App\Models\Album;
use App\Models\Gist;
use Carbon\CarbonImmutable;
use Illuminate\Support\Str;

class CreateAlbumOfGists
{
    public function __construct() {}

    public function handle(CreateAlbumData $createAlbumData)
    {
        /** @var Album $album */
        $album = Album::create();

        $now = CarbonImmutable::now();

        $gistsData = collect($createAlbumData->gists)->map(function (CreateGistData $gistData) use ($album, $now) {
            return [
                'id' => Str::orderedUuid()->toString(),
                'file_name' => $gistData->fileName,
                'content' => $gistData->content,
                'album_id' => $album->id,
                'created_at' => $now,
                'updated_at' => $now,
            ];
        });

        Gist::insert($gistsData->toArray());

        return $album;
    }
}
