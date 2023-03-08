<?php
namespace App\GraphQL\Queries;

use App\Models\Ingredients as ModelsIngredients;
use Illuminate\Database\Eloquent\Collection;

class Ingredients
{
    /**
     *
     * @param null $_
     * @param array<string, mixed> $args
     */
    public function __invoke($_, array $args): Collection
    {
        return ModelsIngredients::all();
    }
}
