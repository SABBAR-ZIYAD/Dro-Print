<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\DevisRequestMail;

class DevisRequestData extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:30'],
            'company' => ['nullable', 'string', 'max:120'],
            'product_type' => ['required', 'string', 'max:150'],
            'custom_product' => ['required_if:product_type,custom', 'nullable', 'string', 'max:150'],
            'quantity' => ['required', 'integer', 'min:1', 'max:1000000'],
            'size' => ['nullable', 'string', 'max:150'],
            'paper' => ['nullable', 'string', 'max:150'],
            'finish' => ['nullable', 'string', 'max:150'],
            'description' => ['nullable', 'string', 'max:5000'],
            'file' => ['nullable', 'file', 'max:10240', 'mimes:pdf,png,jpg,jpeg,ai,eps,svg,zip'],
        ]);

        if ($request->hasFile('file')) {
            $data['file'] = $request->file('file');
        }

        Mail::to(config('mail.quote_recipient'))->send(new DevisRequestMail($data));

        return response()->json([
            'success' => true,
            'message' => 'Votre demande de devis a été envoyée avec succès !'
        ], 200);
    }
}
