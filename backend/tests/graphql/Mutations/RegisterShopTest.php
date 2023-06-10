<?php

use App\Models\Genre;
use App\Models\Ingredient;
use Tests\TestCase;

class RegisterShopTest extends TestCase
{
	/** @test */
	public function お店の情報を保存できる(): void
	{
		$ingredients = Ingredient::factory(2)->create();

		$genres = Genre::factory(1)->create();

		$this->graphQL('
			mutation($name: String!, $genre_id: String!, $menu_name: String!, $ingredient_ids: [ID!] ) {
				createShop(input: {
					name: $name,
					genre_id: $genre_id,
					menus: {
						create: [
							{
								name: $menu_name,
								ingredients: {
									connect: $ingredient_ids
								}
							}
						]
					}
				}) {
					name
					genre {
						name
					}
					menus {
						name
						ingredients {
							name
						}
					}
				}
			}
		', [
			'name' => 'テスト店名',
			'genre_id' => (string) $genres->first()->id,
			'menu_name' => 'テストメニュー名',
			'ingredient_ids' => [
				$ingredients->first()->id,
				$ingredients->last()->id
			],
		])->assertJson([
			'data' => [
				'createShop' => [
					'name' => 'テスト店名',
					'genre' => [
						'name' => $genres->first()->name,
					],
					'menus' => [[
						'name' => 'テストメニュー名',
						'ingredients' => [
							[
								'name' => $ingredients->first()->name,
							],
							[
								'name' => $ingredients->last()->name,
							]
						]
					]]
				]
			]
		]);
	}
}
