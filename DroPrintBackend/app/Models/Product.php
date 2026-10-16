<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'description',
        'image_path',
        'base_price',
        'specs_json',
    ];

    protected function casts(): array
    {
        return ['specs_json' => 'array'];
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
