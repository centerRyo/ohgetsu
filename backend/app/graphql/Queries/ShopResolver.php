<?php

namespace App\GraphQL\Queries;

use App\Models\Shop;

final class ShopResolver
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function find($_, array $args): Shop
    {
        $shop = Shop::findOrFail($args['id']);

        return $shop;
    }
}
