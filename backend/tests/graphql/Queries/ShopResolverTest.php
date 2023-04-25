<?php

namespace Tests\GraphQL\Queries;

use App\Models\Shop;
use Tests\TestCase;

class ShopResolverTest extends TestCase
{
    /** @test */
    public function 指定したIDのショップを取得できる(): void
    {
        $shops = Shop::factory(2)->create();

        $this->graphQL('
            query($id: ID!) {
                shop(id: $id) {
                    name
                    address
                }
            }
        ', [
            'id' => $shops->first()->id
        ])->assertJson([
            'data' => [
                'shop' => [
                        'name' => $shops->first()->name,
                        'address' => $shops->first()->address
                    ]
            ]
        ]);
    }

    // /** @test */
    public function 存在しないIDが指定された場合InternalServerErrorを返す(): void
    {
        Shop::factory(2)->create();

        $this->graphQL('
            query($id: ID!) {
                shop(id: $id) {
                    name
                    address
                }
            }
        ', [
            'id' => 100000
        ])->assertGraphQLErrorMessage('Internal Server Error');
    }
}
