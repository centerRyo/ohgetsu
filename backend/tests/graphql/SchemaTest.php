<?php

use App\Models\Shop;
use Nuwave\Lighthouse\Testing\MakesGraphQLRequests;
use Nuwave\Lighthouse\Testing\RefreshesSchemaCache;
use Tests\TestCase;

class SchemaTest extends TestCase
{
	use MakesGraphQLRequests;
	use RefreshesSchemaCache;

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
