<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePresencasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('presencas', function (Blueprint $table) {
            $table->id();
            $table->string('summary');
            $table->string('location');
            $table->string('start');
            $table->string('end');
            $table->string('chaveunica');
            $table->string('professor');
            $table->integer('presenca');
            $table->integer('nprocesso');
            $table->string('piso');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('presencas');
    }
}
