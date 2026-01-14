<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Attributes\MapName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Mappers\SnakeCaseMapper;

#[MapName(SnakeCaseMapper::class)]
class AlbumData extends Data
{
    /**
     * @param  GistData[]  $gists
     */
    public function __construct(
        #[DataCollectionOf(GistData::class)]
        public readonly array $gists,
    ) {}
}
