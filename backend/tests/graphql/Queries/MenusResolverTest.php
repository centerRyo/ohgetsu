<?php

use App\Models\Menu;
use Tests\TestCase;

class MenusResolverTest extends TestCase
{
	/** @test */
	public function 指定したショップIDのメニューを取得できる(): void
	{
		$menus = Menu::factory(3)->create();

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
			'excluded_ingredient_ids' => [],
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
