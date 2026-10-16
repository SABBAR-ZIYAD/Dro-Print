<?php

namespace Tests\Feature;

use App\Mail\DevisRequestMail;
use App\Models\Announcement;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class CustomerJourneyTest extends TestCase
{
    use RefreshDatabase;

    public function test_catalog_can_be_discovered_and_quoted(): void
    {
        $category = Category::create(['name' => 'Petit format', 'slug' => 'petit-format']);
        $product = Product::create([
            'category_id' => $category->id,
            'name' => 'Flyers A4',
            'slug' => 'flyers-a4',
            'description' => 'Impression de flyers',
            'specs_json' => ['Format' => 'A4'],
        ]);
        Product::create(['category_id' => $category->id, 'name' => 'Cartes', 'slug' => 'cartes']);
        Announcement::create(['title' => 'Offre', 'description' => 'Promotion', 'image_path' => 'images/demo/slider1.jpg', 'active' => true]);

        $this->getJson('/api/home')->assertOk()->assertJsonPath('featuredProducts.0.slug', 'flyers-a4');
        $this->getJson('/api/categories')->assertOk()->assertJsonPath('categories.0.products.0.slug', 'flyers-a4');
        $this->getJson('/api/categories/petit-format')->assertOk()->assertJsonPath('category.name', 'Petit format');
        $this->getJson('/api/products/flyers-a4')->assertOk()
            ->assertJsonPath('product.specs_json.Format', 'A4')
            ->assertJsonPath('relatedProducts.0.slug', 'cartes');
        $this->getJson('/api/search?q=flyers')->assertOk()->assertJsonPath('products.0.id', $product->id);

        Mail::fake();
        config()->set('mail.quote_recipient', 'quotes@example.test');
        $this->postJson('/api/devis-request', [
            'name' => 'Jane Doe',
            'email' => 'jane@example.test',
            'product_type' => 'Flyers A4',
            'quantity' => 100,
            'file' => UploadedFile::fake()->create('artwork.pdf', 20, 'application/pdf'),
        ])->assertOk()->assertJsonPath('success', true);
        Mail::assertSent(DevisRequestMail::class, fn ($mail) => $mail->hasTo('quotes@example.test'));
    }

    public function test_quote_rejects_invalid_or_oversized_requests(): void
    {
        Mail::fake();
        $this->postJson('/api/devis-request', [
            'name' => 'Jane Doe',
            'email' => 'invalid',
            'product_type' => 'custom',
            'quantity' => 0,
            'file' => UploadedFile::fake()->create('oversized.pdf', 11000, 'application/pdf'),
        ])->assertUnprocessable()->assertJsonValidationErrors(['email', 'custom_product', 'quantity', 'file']);
        Mail::assertNothingSent();
    }
}
