<?php

use App\Models\Shop;
use Tests\TestCase;

class SchemaTest extends TestCase
{
	/** @test */
    public function ショップ一覧クエリを返却する(): void
    {
		$shops = Shop::factory(2)->create();
		$this->graphQL('
			{
				shops {
					name
					address
					genre {
						name
					}
					pic
				}
			}
		')->assertJson([
			'data' => [
				'shops' => [
					[
						'name' => $shops->first()->name,
						'address' => $shops->first()->address,
						'genre' => [
							'name' => $shops->first()->genre->name
						],
						'pic' => $shops->first()->pic
					],
					[
						'name' => $shops->last()->name,
						'address' => $shops->last()->address,
						'genre' => [
							'name' => $shops->last()->genre->name
						],
						'pic' => $shops->last()->pic
					],
				]
			]
		]);
    }
}
