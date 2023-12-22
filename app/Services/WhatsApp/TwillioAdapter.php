<?php

// Certifique-se de que a tag de abertura PHP esteja correta

namespace App\Services\WhatsApp;

use App\Contracts\IRepository;
use App\Contracts\IWaService;
use Twilio\Rest\Client;

class TwillioAdapter implements IWaService
{
    protected $repository;

    protected $twilio; // Declaração correta de propriedades

    public function __construct(IRepository $repository)
    {
        $this->repository = $repository;
        $sid = ''; // Insira aqui o seu SID
        $token = ''; // Insira aqui o seu token
        $this->twilio = new Client($sid, $token); // Inicialização do Twilio aqui
    }

    public function sendTextMessage($phone, $data)
    {
        $response = $this->twilio->messages->create( // Correção na chamada ao método
            $phone,
            [
                'from' => $phone,
                'body' => $data,
            ]
        );

        $waResponse = $this->repository->getWaResponseInstance();
        // Setas Retorno - Utilizar Adapter
        $waResponse->setSuccess($response->sid);
        $waResponse->setErrorCode($response->errorCode);
        $waResponse->setErrorMessage($response->errorMessage);
        $waResponse->setFrom($response->from);
        $waResponse->setTo($response->to);
        $waResponse->setBody($response->body);

        return $waResponse;
    }

    public function sendImageMessage($phone, $data)
    {
        // Implemente a lógica para enviar uma mensagem de imagem
    }

    public function sendVideoMessage($phone, $data)
    {
        // Implemente a lógica para enviar uma mensagem de vídeo
    }

    public function sendAudioMessage($phone, $data)
    {
        // Implemente a lógica para enviar uma mensagem de áudio
    }
}
