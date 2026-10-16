<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DummyDataSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Create Categories
        $categories = [
            ['name' => 'Impression Petit Format', 'slug' => 'impression-petit-format', 'description' => 'Flyers, Cartes de visite...'],
            ['name' => 'Impression Grand Format', 'slug' => 'impression-grand-format', 'description' => 'Bâches, Panneaux...'],
            ['name' => 'Packaging', 'slug' => 'packaging', 'description' => 'Boîtes, Étiquettes...'],
        ];

        foreach ($categories as $cat) {
            DB::table('categories')->updateOrInsert(['slug' => $cat['slug']], [
                'name' => $cat['name'],
                'description' => $cat['description'],
                'updated_at' => now(),
            ]);
        }

        $catPetit = DB::table('categories')->where('slug', 'impression-petit-format')->first()->id;
        $catGrand = DB::table('categories')->where('slug', 'impression-grand-format')->first()->id;
        $catPack = DB::table('categories')->where('slug', 'packaging')->first()->id;

        // 2. Create Products (including the featured ones from the old homepage)
        // 'flyers-a4', 'bache', 'carte-de-visite-standard', 'etiquette'
        $products = [
            [
                'category_id' => $catPetit,
                'name' => 'Flyers A4',
                'slug' => 'flyers-a4',
                'description' => 'Flyers A4 haute qualité.',
                'image_path' => 'demo/flyer.jpg',
                'base_price' => 50.00,
            ],
            [
                'category_id' => $catGrand,
                'name' => 'Bâche Publicitaire',
                'slug' => 'bache',
                'description' => 'Bâche grand format résistante.',
                'image_path' => 'demo/bache.jpg',
                'base_price' => 200.00,
            ],
            [
                'category_id' => $catPetit,
                'name' => 'Carte de Visite Standard',
                'slug' => 'carte-de-visite-standard',
                'description' => 'Cartes de visite professionnelles.',
                'image_path' => 'demo/business-card.jpg',
                'base_price' => 150.00,
            ],
            [
                'category_id' => $catPack,
                'name' => 'Étiquette Autocollante',
                'slug' => 'etiquette',
                'description' => 'Étiquettes personnalisées.',
                'image_path' => 'demo/label.jpg',
                'base_price' => 80.00,
            ]
        ];

        foreach ($products as $prod) {
            DB::table('products')->updateOrInsert(['slug' => $prod['slug']], [
                'category_id' => $prod['category_id'],
                'name' => $prod['name'],
                'description' => $prod['description'],
                'image_path' => $prod['image_path'],
                'base_price' => $prod['base_price'],
                'updated_at' => now(),
            ]);
        }

        // 3. Create Announcements (Slider)
        $announcements = [
            [
                'title' => 'Promo Impression Grand Format',
                'description' => 'Profitez de nos offres sur les bâches et panneaux.',
                'image_path' => 'demo/slider1.jpg',
                'active' => true,
            ],
            [
                'title' => 'Nouvelle Collection Cartes de Visite',
                'description' => 'Découvrez nos nouvelles finitions premium.',
                'image_path' => 'demo/slider2.jpg',
                'active' => true,
            ]
        ];

        foreach ($announcements as $ann) {
            DB::table('announcements')->updateOrInsert(['title' => $ann['title']], [
                'description' => $ann['description'],
                'image_path' => $ann['image_path'],
                'active' => $ann['active'],
                'updated_at' => now(),
            ]);
        }
    }
}
