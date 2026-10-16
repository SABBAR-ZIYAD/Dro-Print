<h2 style="color:#663366;">Nouvelle demande de devis</h2>

{{-- Contact Information --}}
<h3 style="color:#FFCC00;">Informations du client</h3>
<p><strong>Nom :</strong> {{ $formData['name'] }}</p>
<p><strong>Email :</strong> {{ $formData['email'] }}</p>
<p><strong>Téléphone :</strong> {{ $formData['phone'] ?? 'Non fourni' }}</p>
<p><strong>Société :</strong> {{ $formData['company'] ?? 'Non fourni' }}</p>

{{-- Project Details --}}
<h3 style="color:#FFCC00;">Détails du projet</h3>
<p><strong>Produit :</strong>
    @if(isset($formData['product_type']) && $formData['product_type'] === 'custom')
        {{ $formData['custom_product'] ?? 'Non précisé' }}
    @else
        {{ $formData['product_type'] }}
    @endif
</p>
<p><strong>Quantité :</strong> {{ $formData['quantity'] }}</p>
<p><strong>Dimensions / Taille :</strong> {{ $formData['size'] ?? 'Non fourni' }}</p>
<p><strong>Type de papier :</strong> {{ $formData['paper'] ?? 'Non fourni' }}</p>
<p><strong>Options de finition :</strong> {{ $formData['finish'] ?? 'Non fourni' }}</p>
<p><strong>Instructions supplémentaires :</strong> {{ $formData['description'] ?? 'Non fourni' }}</p>

{{-- Optional file --}}
@if(!empty($formData['file_name']))
    <p><strong>Fichier attaché :</strong> {{ $formData['file_name'] }}</p>
@endif

<hr>
<p style="font-size:0.9em; color:#555;">
    Ce message a été généré automatiquement depuis le formulaire de demande de devis de votre site.
</p>


