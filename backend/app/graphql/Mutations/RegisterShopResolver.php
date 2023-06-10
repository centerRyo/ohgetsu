<?php

namespace App\GraphQL\Mutations;

use App\Models\Ingredient;
use App\Models\Menu;
use App\Models\Shop;

final class RegisterShopResolver
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function create($_, array $args)
    {
        $shop = new Shop();

        $shop->fill($args)->save();

        if (isset($args['pic'])) {
            $pic = $args['pic'];
            $fileName = time() . '.' . $pic->getClientOriginalExtension();
            $target_path = public_path('/images/uploads/');
            $pic->move($target_path, $fileName);
            $shop->fill(['pic' => '/images/uploads/' . $fileName])->save();
        }

        foreach ($args['menus']['create'] as $menuData) {
            $menu = new Menu();

            $menu->fill(['name' => $menuData['name'], 'pic' => isset($menuData['pic']) ? $menuData['pic'] : null, 'shop_id' => $shop->id])->save();

            $ingredient_menu = Menu::findOrFail($menu->id);

            // FIXME: foreach2回はやめたい
            foreach ($menuData['ingredients']['connect'] as $ingredient) {
                $ingredient_menu->ingredients()->attach($ingredient);
            }

            if (isset($menuData['pic'])) {
                $pic = $menuData['pic'];
                $fileName = time() . '.' . $pic->getClientOriginalExtension();
                $target_path = public_path('/images/uploads/');
                $pic->move($target_path, $fileName);
                $menu->fill(['pic' => '/images/uploads/' . $fileName])->save();
            }
        }

        return $shop;
    }
}
