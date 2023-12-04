<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductCreateOrUpdateRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Product/Index', [
            'products' => Product::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Product/CreateOrEdit');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductCreateOrUpdateRequest $request)
    {
        Product::create($request->only(['name', 'description', 'price']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Product/CreateOrEdit', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductCreateOrUpdateRequest $request, Product $product)
    {
        $product->update($request->only(['name', 'description', 'price']));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
    }
}
