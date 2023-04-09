<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Menu extends Model
{
    protected $fillable = ['name', 'shop_id','pic'];

    public function shop(): BelongsTo {
        return $this->belongsTo(Shop::class);
    }

    public function ingredients(): BelongsToMany {
        return $this->belongsToMany(Ingredient::class);
    }
}
