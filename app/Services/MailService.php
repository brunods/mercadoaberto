<?php

namespace App\Services;

use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;

class MailService
{
    public function sendMail($recipient, $subject, $content, $viewName, $senderName, $senderEmail)
    {
        Mail::to($recipient)
            ->send(new SendMail($recipient, $subject, $content, $viewName, $senderName, $senderEmail));
    }
}
