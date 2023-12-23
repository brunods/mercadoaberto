<?php

namespace Tests\Feature;

use App\Mail\SendMail;
use App\Services\MailService;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class MailTest extends TestCase
{
    /**
     * Testa o envio de e-mail.
     *
     * @return void
     */
    public function testEnvioDeEmail()
    {
        // Envie um e-mail de teste
        $content = '<p>Conteúdo dinâmico do e-mail vai aqui.</p>';

        Mail::fake();
        $mailService = new MailService();
        $mailService->sendMail(
            'bruno.c1.2@hotmail.com',
            'Assunto do E-mail',
            $content,
            'emails.email',
            'Seu Nome',
            'abertomercado44@gmail.com'
        );

        // Verifique se o e-mail foi enviado
        Mail::assertSent(SendMail::class, function ($mail) {
            return $mail->recipient === 'bruno.c1.2@hotmail.com';
        });
    }
}
