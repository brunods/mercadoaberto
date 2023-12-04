<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class PedidoController extends Controller
{
    public function rastreio()
    {
        return Inertia::render('Pedido/Rastreio');
    }
}
