<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;

    protected $primaryKey = 'uu_id';

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'u_status' => 'integer',
        'u_type' => 'integer',
    ];
}
