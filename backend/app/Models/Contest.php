<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contest extends Model
{
    protected $table = 'buyercon_table';
    protected $primaryKey = 'id';
    public $timestamps = false;
  
}
