<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstructorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instructors', function (Blueprint $table) {
            $table->integer('i_ins_id')->autoIncrement();
            $table->integer('i_user_id')->index('i_user_id');
            $table->string('i_uname', 100)->index('i_uname')->nullable();
            $table->string('i_pword', 100)->index('i_pword')->nullable();
            $table->dateTime('i_verified_at')->nullable();
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
        Schema::dropIfExists('instructors');
    }
}
