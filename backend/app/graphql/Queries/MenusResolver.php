<?php

namespace App\GraphQL\Queries;

use App\Models\Menu;
use Illuminate\Support\Facades\DB;

final class MenusResolver
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function find($_, array $args)
    {
        // FIXME: リファクタリング
        // クエリが2回？発行されてしまっている
        // whereNotInではうまくいかなかった
        $included_menus = Menu::whereHas('ingredients', function ($query) use ($args) {
            $query->whereIn('ingredient_id', $args['excluded_ingredient_ids']);
        })->where('shop_id', $args['shop_id'])->get();

        $excluded_menus = Menu::all()->where('shop_id', $args['shop_id'])->diff($included_menus);

        return $excluded_menus;
    }
}
