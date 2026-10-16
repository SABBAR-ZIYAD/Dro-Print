<?php

namespace App\Filament\Widgets;

use App\Models\Announcement;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class AnnouncementsCount extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Annonces disponibles', Announcement::count())
                ->description('All announcements')
                ->icon('heroicon-o-megaphone')
                ->color('primary'),
            Stat::make('Annonces actives', Announcement::where('active', true)->count())
                ->description('All published announcements')
                ->icon('heroicon-o-megaphone')
                ->color('primary'),
        ];
    }
}
