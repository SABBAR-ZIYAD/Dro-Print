import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from '../api';

const Devis = () => {
  const [categories, setCategories] = useState([]);
  const [isCustomProduct, setIsCustomProduct] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const selectedProduct = searchParams.get('product') || '';
  const [productType, setProductType] = useState(selectedProduct);

  useEffect(() => {
    // Fetch categories for the select dropdown
    api.get('/categories')
      .then(res => {
        if (res.data.success && res.data.categories) {
          setCategories(res.data.categories);
        }
      })
      .catch(err => console.error(err));
  }, []);

  const handleProductTypeChange = (e) => {
    setProductType(e.target.value);
    setIsCustomProduct(e.target.value === 'custom');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    const formData = new FormData(e.target);

    try {
      const response = await api.post('/devis-request', formData);
      
      if (response.data.success) {
        setSuccessMessage(response.data.message || 'Votre demande de devis a été envoyée avec succès.');
        e.target.reset();
        setProductType('');
        setIsCustomProduct(false);
        
        // Hide success message after 4 seconds
        setTimeout(() => setSuccessMessage(''), 4000);
      }
    } catch (error) {
      const errors = error.response?.data?.errors;
      setErrorMessage(errors ? Object.values(errors).flat().join(' ') : 'Une erreur s\'est produite. Veuillez réessayer.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-5 py-8">
      {/* Page Title */}
      <h1 className="text-[var(--color-brand-purple-dark)] text-4xl font-extrabold mb-4">Demandez votre devis personnalisé</h1>
      <p className="text-gray-700 mb-6">
        Remplissez ce formulaire pour recevoir un devis adapté à vos besoins d’impression. Nous vous répondrons sous 24h.
      </p>

      {/* Success Notification */}
      {successMessage && (
        <div className="fixed top-20 right-6 bg-[var(--color-brand-yellow)] text-[var(--color-brand-purple-dark)] font-bold px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          {successMessage}
        </div>
      )}

      {/* Error Notification */}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-md border border-gray-100">
        
        {/* Contact Information */}
        <div className="space-y-4">
          <h2 className="text-[var(--color-brand-yellow)] text-2xl font-bold">Vos informations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">Nom et prénom *</label>
              <input type="text" name="name" id="name" required
                autoComplete="name"
                className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-brand-yellow)] focus:border-[var(--color-brand-yellow)] outline-none text-gray-700 placeholder-gray-500 transition-all" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">E-mail *</label>
              <input type="email" name="email" id="email" required 
                autoComplete="email"
                className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-brand-yellow)] focus:border-[var(--color-brand-yellow)] outline-none text-gray-700 placeholder-gray-500 transition-all" 
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-semibold mb-1">Téléphone</label>
              <input type="tel" name="phone" id="phone"
                autoComplete="tel"
                className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-brand-yellow)] focus:border-[var(--color-brand-yellow)] outline-none text-gray-700 placeholder-gray-500 transition-all" 
              />
            </div>
            <div>
              <label htmlFor="company" className="block font-semibold mb-1">Société / Entreprise</label>
              <input type="text" name="company" id="company" 
                className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-brand-yellow)] focus:border-[var(--color-brand-yellow)] outline-none text-gray-700 placeholder-gray-500 transition-all" 
              />
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-4">
          <h2 className="text-[var(--color-brand-yellow)] text-2xl font-bold">Détails du projet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="product_type" className="block font-semibold mb-1">Type de produit *</label>
              <select
                value={productType}
                name="product_type" 
                id="product_type" 
                required
                onChange={handleProductTypeChange}
                className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-brand-yellow)] focus:border-[var(--color-brand-yellow)] outline-none text-gray-700 placeholder-gray-500 transition-all"
              >
                <option value="">Sélectionnez un produit</option>
                
                {categories.map((cat, idx) => (
                  <optgroup key={idx} label={cat.name}>
                    {cat.products.map(prod => (
                      <option key={prod.id} value={prod.name}>{prod.name}</option>
                    ))}
                  </optgroup>
                ))}

                <option value="custom">Autre (spécifier)</option>
              </select>

              {/* Custom product input */}
              {isCustomProduct && (
                <div id="custom_product_container" className="mt-2 animate-fadeIn">
                  <label htmlFor="custom_product" className="block font-semibold mb-1">Produit personnalisé</label>
                  <input type="text" name="custom_product" id="custom_product" required
                    placeholder="Décrivez votre produit..."
                    className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-brand-yellow)] focus:border-[var(--color-brand-yellow)] outline-none text-gray-700 transition-all" 
                  />
                </div>
              )}
            </div>

            <div>
              <label htmlFor="quantity" className="block font-semibold mb-1">Quantité *</label>
              <input type="number" name="quantity" id="quantity" min="1" required 
                className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-brand-yellow)] focus:border-[var(--color-brand-yellow)] outline-none text-gray-700 placeholder-gray-500 transition-all" 
              />
            </div>
            <div>
              <label htmlFor="size" className="block font-semibold mb-1">Dimensions / Taille</label>
              <input type="text" name="size" id="size" 
                className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-brand-yellow)] focus:border-[var(--color-brand-yellow)] outline-none text-gray-700 placeholder-gray-500 transition-all" 
              />
            </div>
            <div>
              <label htmlFor="paper" className="block font-semibold mb-1">Type de papier</label>
              <input type="text" name="paper" id="paper" placeholder="Ex: Couleur 250g" 
                className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-brand-yellow)] focus:border-[var(--color-brand-yellow)] outline-none text-gray-700 placeholder-gray-500 transition-all" 
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="finish" className="block font-semibold mb-1">Options de finition</label>
              <input type="text" name="finish" id="finish" placeholder="Ex: Plastification, reliure…" 
                className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-brand-yellow)] focus:border-[var(--color-brand-yellow)] outline-none text-gray-700 placeholder-gray-500 transition-all" 
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="description" className="block font-semibold mb-1">Instructions supplémentaires</label>
              <textarea name="description" id="description" rows="4" placeholder="Ex: Ajouter mon logo dans le coin supérieur droit…" 
                className="w-full border border-gray-300 bg-white rounded-lg p-2 focus:ring-2 focus:ring-[var(--color-brand-yellow)] focus:border-[var(--color-brand-yellow)] outline-none text-gray-700 placeholder-gray-500 transition-all"
              ></textarea>
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div>
          <label htmlFor="file" className="block font-semibold mb-1">Téléchargez votre fichier</label>
          <input type="file" name="file" id="file" accept=".pdf,.png,.jpg,.jpeg,.ai,.eps,.svg,.zip"
            className="border border-gray-300 bg-white rounded-lg p-2 w-full focus:ring-2 focus:ring-[var(--color-brand-yellow)] focus:border-[var(--color-brand-yellow)] outline-none text-gray-700 transition-all" 
          />
        </div>

        {/* Submit Button */}
        <div>
          <button 
            type="submit" 
            disabled={loading}
            className="bg-[var(--color-brand-yellow)] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition disabled:opacity-50"
          >
            {loading ? 'Envoi en cours...' : 'Envoyer ma demande de devis'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Devis;
