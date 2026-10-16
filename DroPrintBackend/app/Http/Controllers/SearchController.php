<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $validated = $request->validate([
            'q' => 'required|string|min:2|max:100',
        ]);
        $q = trim($validated['q']);
        $term = str_replace(['\\', '%', '_'], ['\\\\', '\\%', '\\_'], $q);
        $products = Product::where('name', 'LIKE', "%{$term}%")->orderBy('name')->get();
        $categories = Category::where('name', 'LIKE', "%{$term}%")->orderBy('name')->get();

        return response()->json([
            'success' => true,
            'q' => $q,
            'products' => $products,
            'categories' => $categories
        ]);
    }
}
