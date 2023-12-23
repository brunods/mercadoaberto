<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;

    public $recipient;

    public $subject;

    public $content;

    public $viewName;

    public $senderName;

    public $senderEmail;

    public function __construct($recipient, $subject, $content, $viewName, $senderName, $senderEmail)
    {
        $this->recipient = $recipient;
        $this->subject = $subject;
        $this->content = $content;
        $this->viewName = $viewName;
        $this->senderName = $senderName;
        $this->senderEmail = $senderEmail;
    }

    public function build()
    {
        return $this->to($this->recipient)
            ->from($this->senderEmail, $this->senderName)
            ->subject($this->subject)
            ->view($this->viewName, ['content' => $this->content]);
    }
}
