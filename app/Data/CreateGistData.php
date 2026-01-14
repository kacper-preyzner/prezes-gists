<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\MapName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Mappers\SnakeCaseMapper;

#[MapName(SnakeCaseMapper::class)]
class CreateGistData extends Data
{
    public function __construct(
        public readonly string $fileName,
        public readonly string $content,
    ) {}
}
