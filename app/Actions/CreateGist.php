<?php

namespace App\Actions;

use App\Models\Gist;

class CreateGist
{
    public function __construct() {}

    public function handle(string $fileName, string $content)
    {
        return Gist::create(['file_name' => $fileName, 'content' => $content]);
    }
}
