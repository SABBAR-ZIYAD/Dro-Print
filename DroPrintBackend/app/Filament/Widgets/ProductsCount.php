<?php

namespace App\Filament\Widgets;

use App\Models\Announcement;
use App\Models\Product;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class ProductsCount extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Produits disponibles', Product::count())
                ->description('All active products')
                ->icon('heroicon-o-cube')
                ->color('success'),
        ];
    }
}
