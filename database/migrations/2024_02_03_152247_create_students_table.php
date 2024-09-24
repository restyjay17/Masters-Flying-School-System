<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->integer('s_std_id')->autoIncrement();
            $table->integer('s_user_id')->index('s_user_id');
            $table->string('s_uname', 100)->index('s_uname')->nullable();
            $table->string('s_pword', 250)->index('s_pword')->nullable();
            $table->dateTime('s_verified_at')->nullable();
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
        Schema::dropIfExists('students');
    }
}
