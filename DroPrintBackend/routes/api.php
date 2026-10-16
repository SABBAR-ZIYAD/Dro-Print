<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\DevisRequestData;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/home', [HomeController::class, 'index'])->name('api.home');
Route::get('/search', [SearchController::class, 'index'])->name('api.search');
Route::get('/categories', [CategoryController::class, 'index'])->name('api.categories.index');
Route::get('/categories/{slug}', [CategoryController::class, 'show'])->name('api.categories.show');
Route::get('/products/{slug}', [ProductController::class, 'show'])->name('api.products.show');
Route::post('/devis-request', [DevisRequestData::class, 'store'])->name('api.devis.request');
