<?php

namespace App\Contracts;

interface IWaService
{
    public function sendTextMessage($phone, $data);

    public function sendImageMessage($phone, $data);

    public function sendVideoMessage($phone, $data);

    public function sendAudioMessage($phone, $data);
}
