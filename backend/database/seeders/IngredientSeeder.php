<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('ingredients')->insert([
            [
                'name' => '卵',
                'pic' => '/images/ingredients/egg.png',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '乳',
                'pic' => '/images/ingredients/milk.png',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '小麦',
                'pic' => '/images/ingredients/wheat.png',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'そば',
                'pic' => '/images/ingredients/soba.png',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '落花生',
                'pic' => '/images/ingredients/peanuts.png',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'えび',
                'pic' => '/images/ingredients/shrimp.png',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'かに',
                'pic' => '/images/ingredients/crab.png',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'アーモンド',
                'pic' => '/images/ingredients/almond.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'あわび',
                'pic' => '/images/ingredients/shell.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'いか',
                'pic' => '/images/ingredients/squid.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'いくら',
                'pic' => '/images/ingredients/salmon_roe.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'オレンジ',
                'pic' => '/images/ingredients/orange.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'カシューナッツ',
                'pic' => '/images/ingredients/cashew.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'キウイフルーツ',
                'pic' => '/images/ingredients/kiwi.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '牛肉',
                'pic' => '/images/ingredients/cow.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'くるみ',
                'pic' => '/images/ingredients/walnut.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ごま',
                'pic' => '/images/ingredients/sesame.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'さけ',
                'pic' => '/images/ingredients/salmon.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'さば',
                'pic' => '/images/ingredients/mackerel.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '大豆',
                'pic' => '/images/ingredients/soy.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '鶏肉',
                'pic' => '/images/ingredients/chicken.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'バナナ',
                'pic' => '/images/ingredients/banana.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '豚肉',
                'pic' => '/images/ingredients/pig.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'まつたけ',
                'pic' => '/images/ingredients/mushroom.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'もも',
                'pic' => '/images/ingredients/peach.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'やまいも',
                'pic' => '/images/ingredients/potato.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'りんご',
                'pic' => '/images/ingredients/apple.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ゼラチン',
                'pic' => '/images/ingredients/jelly.png',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
