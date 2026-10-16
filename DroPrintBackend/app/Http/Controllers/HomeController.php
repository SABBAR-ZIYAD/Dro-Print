<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Announcement;
use App\Models\Product;
class HomeController extends Controller
{
    public function index()
    {
        $announcements = Announcement::where('active', true)->latest()->limit(5)->get();
        $featuredProducts = Product::whereIn('slug', [
            'flyers-a4', 'bache', 'carte-de-visite-standard', 'etiquette'
        ])->get();
        return response()->json([
            'success' => true,
            'announcements' => $announcements,
            'featuredProducts' => $featuredProducts
        ]);
    }
}
