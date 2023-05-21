<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class IngredientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $random = rand(0, 1);
        return [
            'name' => $this->faker->name(),
            'pic' => $this->faker->filePath(),
            'category' => $random === 0 ? 'MAIN' : 'SUB',
        ];
    }
}
