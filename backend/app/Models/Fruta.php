<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory; // Importamos HasFactory

use Illuminate\Database\Eloquent\Model;

class Fruta extends Model
{
    use HasFactory;

    // Aquí indicamos los atributos que se pueden asignar de forma masiva
    protected $fillable = ['nombre', 'color', 'precio'];
}
