<?php

namespace App\Http\Controllers;
use App\Models\Fruta; 

use Illuminate\Http\Request;

class FrutasController extends Controller
{
  
  public function index()
  {
      $frutas = Fruta::all();
      
      return response()->json($frutas);
  }
}
