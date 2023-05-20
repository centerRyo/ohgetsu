<?php

namespace Database\Factories;

use App\Models\Shop;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class MenuFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'shop_id' => Shop::factory(),
            'pic' => $this->faker->filePath(),
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }
}
