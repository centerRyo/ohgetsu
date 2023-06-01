<?php

namespace App\GraphQL\Queries;

use App\Models\Menu;

final class MenuResolver
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function find($_, array $args): Menu
    {
        $menu = Menu::findOrFail($args['id']);

        return $menu;
    }
}
