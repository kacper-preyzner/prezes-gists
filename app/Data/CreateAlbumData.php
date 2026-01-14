<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\MapName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Mappers\SnakeCaseMapper;

/**
 * @property CreateGistData[] $gists
 */
#[MapName(SnakeCaseMapper::class)]
class CreateAlbumData extends Data
{
    public function __construct(
        public readonly array $gists,
    ) {}
}
