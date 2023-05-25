<?php

use App\Models\Ingredient;
use Database\Factories\IngredientFactory;
use Tests\TestCase;

class IngredientsResolverTest extends TestCase
{
    /** @test */
    public function 指定したIDの原材料を取得できる(): void
    {
		$ingredients = Ingredient::factory(3)->create();
		$this->graphQL('
			query($ids: [ID]!) {
				included_ingredients(ids: $ids) {
					id
					name
					pic
				}
			}
		', [
			'ids' => [$ingredients->first()->id]
		])->assertJson([
			'data' => [
				'included_ingredients' => [[
					'id' => $ingredients->first()->id,
					'name' => $ingredients->first()->name,
					'pic' => $ingredients->first()->pic,
				]]
			]
		]);
    }
}
