<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OfficialCatalogSeeder extends Seeder
{
    public function run(): void
    {
        $catalog = [
            'Cartes de visite' => [
                'Carte de visite standard',
                'Carte de visite verticale',
                'Carte de visite carré',
                'Carte de visite Digitale',
            ],
            'AFFICHE & POSTER' => [
                'AFFICHE A0',
                'AFFICHE A1',
                'AFFICHE A2',
                'AFFICHE A3',
            ],
            'Support rigide' => [
                'Plaque plexiglass',
            ],
            'Cartes en PVC' => [
                'Carte rigide en pvc',
                'Carte de visite Digitale',
                'Carte Google Avis',
            ],
            'Packaging & sacs' => [
                'Sac publicitaire',
                'Sac en toile',
            ],
            'Flyers' => [
                'Flyer DL',
                'Flyer A4',
                'Flyer A5',
                'Flyer A5 Top PROMO',
                'Flyer A6',
                'Flyer A7',
                'Flyer A7 Top PROMO',
            ],
            'Dépliants' => [
                'Dépliant 2 volets',
                'Dépliant 3 volets',
                'Dépliant 4 volets',
            ],
            'Papeterie' => [
                'Papier en-tête',
                'Ordonnancier',
                'Dossier cartonné',
                'Attestation & certificat',
            ],
            'Enveloppes et pochettes' => [
                'Enveloppe DL',
                'Enveloppe DL avec fenêtre',
                'Enveloppe A5',
                'Enveloppe A4',
                'Enveloppe A4+',
                'Enveloppe A3+',
                'Pochette CD',
            ],
            'Porte documents' => [
                'Chemise à rabat',
                'Chemise à double rabat',
            ],
            'Sets de tables' => [
                'Set de table',
            ],
            'Carnet NCR' => [
                'Carnet NCR - A5',
                'Carnet NCR - A4',
            ],
            'Accroche-portes' => [
                'Accroche-porte',
            ],
            'Etiquettes et autocollants' => [
                'Vinyle lettrage et logo',
                'Vinyle autocollant standard',
                'Vinyle autocollant transparent',
                'Vinyle autocollant One Way',
                'Etiquettes personnalisées',
            ],
            'Bâches / Banderoles' => [
                'Bâche en rouleau (PRO)',
                'Bache standard',
                'Oriflamme',
            ],
            'Carton d\'invitation et voeux' => [
                'Cartes de voeux et invitations',
            ],
            'Bloc-notes' => [
                'Bloc-notes A6',
                'Bloc-notes A5',
                'Bloc-notes A4',
            ],
            'Livrets / Brochures' => [
                'Magazine',
                'Brochure A4',
            ],
            'Agenda & Calendriers' => [
                'Calendrier Rigide',
                'Calendrier chevalet',
                'Calendrier sous-main',
            ],
            'Ticket et billetterie' => [
                'Ticket standard',
                'Ticket perforé',
                'Ticket numéroté',
                'Ticket perforé et numéroté',
                'Ticket perforé et 2 x numéroté',
            ],
            'Roll-up' => [
                'Roll-up Economy',
                'Roll-up Deluxe',
            ],
            'Bâche & Vinyle' => [
                'Bâche en rouleau (PRO)',
                'Bache standard',
                'Vinyle lettrage et logo',
                'Vinyle autocollant standard',
                'Vinyle autocollant transparent',
                'Vinyle autocollant One Way',
            ],
        ];

        foreach ($catalog as $categoryName => $products) {
            $categorySlug = Str::slug($categoryName);
            $category = \App\Models\Category::updateOrCreate(
                ['slug' => $categorySlug],
                ['name' => $categoryName]
            );

            foreach ($products as $productName) {
                $cleanProductName = trim(str_ireplace('Devis', '', $productName));
                \App\Models\Product::updateOrCreate(['slug' => Str::slug($cleanProductName . '-' . $categorySlug)], [
                    'category_id' => $category->id,
                    'name' => $cleanProductName,
                    'description' => 'Découvrez notre ' . $cleanProductName . ' de haute qualité.',
                    'image_path' => 'demo/bache.jpg',
                    'base_price' => 100.00,
                ]);
            }
        }

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
            \App\Models\Announcement::updateOrCreate(['title' => $ann['title']], [
                'description' => $ann['description'],
                'image_path' => $ann['image_path'],
                'active' => $ann['active'],
            ]);
        }
    }
}
