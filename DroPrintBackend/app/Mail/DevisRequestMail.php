<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DevisRequestMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $formData;
    public function __construct($formData)
    {
        $this->formData = $formData;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Demande de devis',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.devis-request',
            with: [
                'formData' => $this->formData
            ]
        );
    }


    public function build()
    {
        $email = $this->from(config('mail.from.address'), config('mail.from.name'))
            ->subject('Demande de devis')
            ->view('emails.devis-request')
            ->with(['formData' => $this->formData])
            ->replyTo($this->formData['email'], $this->formData['name']);

        // Attach file if uploaded
        if (isset($this->formData['file'])) {
            $email->attach($this->formData['file']->getRealPath(), [
                'as' => $this->formData['file']->getClientOriginalName(),
                'mime' => $this->formData['file']->getClientMimeType(),
            ]);
        }

        return $email;
    }
}
