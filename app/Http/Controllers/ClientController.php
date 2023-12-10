<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientCreateOrUpdateRequest;
use App\Models\Client;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Cliente/Index', [
            'products' => Client::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Cliente/CreateOrEdit');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ClientCreateOrUpdateRequest $request)
    {
        // Product::create($request->only(['name', 'description', 'price']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $product)
    {
        // return Inertia::render('Product/CreateOrEdit', [
        //     'product' => $product,
        // ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ClientCreateOrUpdateRequest $request, Client $product)
    {
        // $product->update($request->only(['name', 'description', 'price']));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $product)
    {
        // $product->delete();
    }
}
