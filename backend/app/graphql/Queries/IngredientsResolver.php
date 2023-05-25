<?php

namespace App\GraphQL\Queries;

use App\Models\Ingredient;
use Illuminate\Database\Eloquent\Collection;

final class IngredientsResolver
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function find($_, array $args): Collection
    {
        $ingredients = Ingredient::whereIn('id', $args["ids"])->get();

        return $ingredients;
    }
}
