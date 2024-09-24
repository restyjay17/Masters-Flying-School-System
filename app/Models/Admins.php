<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;

class Admins extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    protected $guard = 'admin';


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'a_uname', 
        'a_pword', 
        'a_name',
        'a_email',
    ];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'a_pword'
    ];


    /**
     * Override default functionality of password which is the default keyword
     *
     * @var string
     */
    public function getAuthPassword()
    {
        return $this->a_pword;
    }
}
