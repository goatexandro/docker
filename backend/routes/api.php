<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrutasController;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


// Ruta para obtener todas las frutas
Route::get('/frutas', [FrutasController::class, 'index']);
