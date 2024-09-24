<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->integer('uu_id')->autoIncrement();
            $table->string('u_user_id', 25)->index('u_user_id');
            $table->string('u_lname', 100);
            $table->string('u_fname', 100);
            $table->string('u_mname', 100);
            $table->string('u_email');
            $table->string('u_cnumber', 15)->nullable();
            $table->date('u_bdate')->nullable();
            $table->date('u_gender', 15)->nullable();
            $table->text('u_address')->nullable();
            $table->smallInteger('u_status')->index('u_status')->comment('0 = for verification 1 = sent verification 2 = verified 3 = inactive');
            $table->smallInteger('u_type')->index('u_type')->comment('1 = Student, 2 = Instructors');
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
        Schema::dropIfExists('users');
    }
}
