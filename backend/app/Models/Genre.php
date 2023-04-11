<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Genre extends Model
{
    protected $fillable = ['name'];

    public function shop(): BelongsTo {
        return $this->belongsTo(Shop::class);
    }
}
