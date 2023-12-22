<?php

namespace App\Http\Controllers;

use App\Contracts\IWaService;

class WaController extends Controller
{
    protected $waService;

    public function __construct(IWaService $waService) // Injete a instância de WaService
    {
        $this->waService = $waService;
    }

    public function sendTextMessage($phone, $data)
    {
        $this->waService->sendTextMessage($phone, $data);
    }

    public function sendImageMessage($phone, $data)
    {
        $this->waService->sendImageMessage($phone, $data);
    }

    public function sendVideoMessage($phone, $data)
    {
        $this->waService->sendVideoMessage($phone, $data);
    }

    public function sendAudioMessage($phone, $data)
    {
        $this->waService->sendAudioMessage($phone, $data);
    }
}
