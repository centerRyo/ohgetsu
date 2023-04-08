<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    protected $fillable = [
        'name',
        'address',
        'pic',
        'genre_id'
    ];

    public function genre() {
        return $this->hasOne('App\Models\Genre', 'id', 'genre_id');
    }
}
