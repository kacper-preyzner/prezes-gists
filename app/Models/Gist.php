<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Gist extends Model
{
    public function getExtension(): string
    {
        return Str::of($this->file_name)->explode('.')->last();
    }
}
