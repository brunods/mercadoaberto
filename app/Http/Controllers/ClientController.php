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
        return Inertia::render('Client/Index', [
            'products' => Client::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Client/CreateOrEdit');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ClientCreateOrUpdateRequest $request)
    {
        Client::create($request->only(
            [
                'name',
                'cep',
                'address',
                'address_number',
                'city',
                'state',
                'district',
                'mail',
                'phone',
            ]
        ));
    }

    public function edit(Client $client)
    {
        return Inertia::render('Client/CreateOrEdit', ['client' => $client]);
    }

    public function update(ClientCreateOrUpdateRequest $request, Client $client)
    {
        $client->update($request->only(
            [
                'name',
                'cep',
                'address',
                'address_number',
                'city',
                'state',
                'district',
                'mail',
                'phone',
            ]));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        $client->delete();
    }
}
