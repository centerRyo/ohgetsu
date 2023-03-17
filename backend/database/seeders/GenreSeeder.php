<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('genres')->insert([
            [
                'name' => '日本料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '海鮮',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '天ぷら',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '焼き鳥・串焼・鳥料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'しゃぶしゃぶ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'お好み焼き・たこ焼き',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'おでん',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'うなぎ・あなご',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'とんかつ・揚げ物',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'すき焼き',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'そば',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '麺類',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'どんぶり',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '洋食',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ステーキ・鉄板焼き',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'フレンチ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'イタリアン',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'スペイン料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ヨーロッパ料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'アメリカ料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '中華料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '四川料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '台湾料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '飲茶・点心',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '餃子',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '肉まん',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '小籠包',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '中華粥',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'アジア・エスニック',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '韓国料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '東南アジア料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '南アジア料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '中東料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '中南米料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'アフリカ料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'カレー',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'インドカレー',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'スープカレー',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '焼肉',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ホルモン',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ジンギスカン',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '鍋',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'もつ鍋',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '水炊き',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ちゃんこ鍋',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '火鍋',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'うどんすき',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '居酒屋',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ダイニングバー',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '立ち飲み',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'バル',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ビアガーデン・ビアホール',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ラーメン',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'つけ麺',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '油そば・まぜそば',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '台湾まぜそば',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '坦々麺',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '汁なし坦々麺',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '刀削麺',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'カフェ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '喫茶店',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '甘味処',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'フルールパーラー',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'パンケーキ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'コーヒースタンド',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ティースタンド',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ジューススタンド',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'タピオカ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'スイーツ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '洋菓子',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ケーキ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'シュークリーム',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'チョコレート',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ドーナツ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'マカロン',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'バームクーヘン',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'プリン',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'クレープ・ガレット',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '和菓子',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '大福',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'たい焼き・大判焼き',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'どら焼き',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'カステラ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '焼き芋・大学芋',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'せんべい',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '中華菓子',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ジェラート・アイスクリーム',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ソフトクリーム',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'かき氷',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'パン',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'サンドイッチ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ベーグル',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'バー',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'パブ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ワインバー',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ビアバー',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'スポーツバー',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '日本酒バー',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '焼酎バー',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '料理旅館',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'オーベルジュ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'レストラン・食堂',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '創作料理・イノベーティブ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'オーガニック・薬膳',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '弁当・おにぎり・惣菜',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '肉料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'シーフード',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'サラダ・野菜料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'チーズ料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'にんにく料理',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'ビュッフェ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'バーベキュー',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => '屋形船・クルージング',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'カラオケ',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'name' => 'その他',
                'created_at' => $now,
                'updated_at' => $now,
            ]
        ]);
    }
}
