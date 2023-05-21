<?php

use App\Models\Ingredient;
use App\Models\Menu;
use Tests\TestCase;

class MenusResolverTest extends TestCase
{
	/** @test */
	public function 指定したショップID、原材料IDのメニューを取得できる(): void
	{
		$menus = Menu::factory(3)->create();

		Ingredient::factory(3)->create();

		$this->graphQL('
			query($shop_id: ID!, $excluded_ingredient_ids: [ID]!) {
				menus(shop_id: $shop_id, excluded_ingredient_ids: $excluded_ingredient_ids) {
					id
					name
					pic
				}
			}
		', [
			'shop_id' => $menus->first()->shop_id,
			'excluded_ingredient_ids' => [1, 3],
		])->assertJson([
			'data' => [
				'menus' => [[
					'id' => $menus->first()->id,
					'name' => $menus->first()->name,
					'pic' => $menus->first()->pic,
				]]
			]
		]);
	}
}
