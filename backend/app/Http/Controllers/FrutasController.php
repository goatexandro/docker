<?php

namespace App\Http\Controllers;
use App\Models\Fruta; // Importamos el modelo Fruta

use Illuminate\Http\Request;

class FrutasController extends Controller
{
   // Obtener todas las frutas de la base de datos
  
  public function index()
  {
      // Obtener todas las frutas de la base de datos
      $frutas = Fruta::all();
      
      // Retornar las frutas como respuesta en formato JSON
      return response()->json($frutas);
  }
}
