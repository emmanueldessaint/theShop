<?php

namespace Database\Factories;


use Illuminate\Support\Str;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->company(),
            'description' => $this->faker->paragraph(),
            'price' => $this->faker->unique()->numberBetween(10,35),
            'image' => 'https://placeimg.com/100/100/any?' . rand(1, 100),
        ];
    }
}
