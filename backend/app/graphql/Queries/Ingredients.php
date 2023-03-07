<?php
namespace App\GraphQL\Queries;

use App\Models\Ingredients as ModelsIngredients;

class Ingredients
{
    /**
     *
     * @param null $_
     * @param array<string, mixed> $args
     */
    public function __invoke($_, array $args)
    {
        return ModelsIngredients::all();
    }
}
