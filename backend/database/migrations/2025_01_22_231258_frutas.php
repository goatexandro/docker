<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('frutas', function (Blueprint $table) {
            $table->id(); // Crea una columna "id" autoincremental
            $table->string('nombre'); // Crea una columna para el nombre de la fruta
            $table->string('color'); // Crea una columna para el color de la fruta
            $table->float('precio'); // Crea una columna para el precio de la fruta
            $table->timestamps(); // Crea las columnas "created_at" y "updated_at"
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('frutas'); // Elimina la tabla frutas si existe
    }
};
