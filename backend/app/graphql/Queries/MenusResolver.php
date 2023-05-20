<?php

namespace App\GraphQL\Queries;

use App\Models\Menu;

final class MenusResolver
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function find($_, array $args)
    {
        $menus = Menu::where('shop_id', '=', $args['shop_id'])->get();

        return $menus;
    }
}
