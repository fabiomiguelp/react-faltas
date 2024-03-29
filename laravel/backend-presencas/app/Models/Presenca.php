<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Presenca extends Model
{
    use HasFactory;

    protected $fillable =[
        'summary',
        'location',
        'start',
        'end',
        'datainsercao',
        'chaveunica',
        'professor',
        'presenca',
        'horamarcacao',
        'nprocesso',
        'piso'
    ];

}
