<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function show(string $slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();

        return response()->json([
            'success' => true,
            'product' => $product,
            'relatedProducts' => Product::where('category_id', $product->category_id)
                ->whereKeyNot($product->id)
                ->inRandomOrder()
                ->limit(4)
                ->get(),
        ]);
    }
}
