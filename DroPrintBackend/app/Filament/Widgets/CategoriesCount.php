<?php

namespace App\Filament\Widgets;

use App\Models\Category;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class CategoriesCount extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Categories disponibles', Category::count())
                ->description('Available product categories')
                ->icon('heroicon-o-rectangle-stack')
                ->color('warning'),
        ];
    }
}
