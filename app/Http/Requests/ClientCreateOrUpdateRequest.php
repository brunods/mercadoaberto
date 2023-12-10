<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ClientCreateOrUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'requerid|max:255',
            'cep' => 'requerid|min:8|max:8',
            'address' => 'requerid|max:255',
            'address_number' => 'requerid|numeric|max:5',
            'district' => 'requerid|max:255',
            'state' => 'requerid|max:2',
            'mail' => 'requerid|max:255',
            'phone' => 'requerid|max:255',
        ];
    }
}
