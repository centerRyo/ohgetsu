<?php

namespace Tests\GraphQL\Queries;

use App\Models\Shop;
use Nuwave\Lighthouse\Testing\MakesGraphQLRequests;
use Tests\TestCase;

class ShopResolverTest extends TestCase
{
    use MakesGraphQLRequests;

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
}
