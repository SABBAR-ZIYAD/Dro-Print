<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json(['message' => 'DroPrint API is running. Access the admin panel at /admin']);
});

