<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function tracking()
    {
        return Inertia::render('Order/Tracking');
    }
}
