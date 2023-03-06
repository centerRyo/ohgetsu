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
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '乳',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '小麦',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'そば',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '落花生',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'えび',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'かに',
                'category' => 'MAIN',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'アーモンド',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'あわび',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'いか',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'いくら',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'オレンジ',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'カシューナッツ',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'キウイフルーツ',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '牛肉',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'くるみ',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ごま',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'さけ',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'さば',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '大豆',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '鶏肉',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'バナナ',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '豚肉',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'まつたけ',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'もも',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'やまいも',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'りんご',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ゼラチン',
                'category' => 'SUB',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ]);
    }
}
