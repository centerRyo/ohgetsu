<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Shop extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'pic',
        'genre_id'
    ];

    public function genre(): HasOne {
        return $this->hasOne(Genre::class, 'id', 'genre_id');
    }

    public function menus(): HasMany {
        return $this->hasMany(Menu::class);
    }
}
