<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class Gist extends Model
{
    use HasUuids;

    public function getExtension(): string
    {
        return Str::of($this->file_name)->explode('.')->last();
    }

    public function getLink(): string
    {
        return url("gist/$this->id");
    }

    public function album(): BelongsTo
    {
        return $this->belongsTo(Album::class);
    }
}
