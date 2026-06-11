import { useState } from 'react';
import { Mail, Phone, MapPin, Building } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honey: '' // Honeypot field
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'spam'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honey !== '') {
      setStatus('spam');
      return;
    }

    setStatus('loading');

    try {
      // Configuración extraída del .env
      const apiUrl = import.meta.env.VITE_GHL_API_URL || 'https://services.leadconnectorhq.com';
      const apiKey = import.meta.env.VITE_GHL_API_KEY;
      const locationId = import.meta.env.VITE_GHL_LOCATION_ID;

      if (!apiKey || !locationId) {
        throw new Error('Faltan credenciales de GHL en .env');
      }

      // Ejemplo de integración con GHL (Crear Contacto)
      const response = await fetch(`${apiUrl}/contacts/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Version': '2021-07-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          locationId: locationId,
          customFields: [
            {
              // Custom field para el mensaje si es necesario
              id: "message",
              field_value: formData.message
            }
          ]
        })
      });

      if (!response.ok) throw new Error('Error al enviar a GHL');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', honey: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-50 min-h-[80vh] relative">
      {/* Background Decorator */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gray-900 -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-16 py-20 relative z-10">
        <div className="text-center mb-16 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase font-[Montserrat]">Asesoría Corporativa</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Estamos listos para atender los requerimientos industriales de tu empresa. Déjanos tus datos y un especialista te contactará de inmediato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          
          {/* Info Sidebar */}
          <div className="bg-accent-blue text-white p-10 lg:col-span-1 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-bl-full -z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 uppercase font-[Montserrat]">Información de Contacto</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent-green mt-1" />
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-wider mb-1 opacity-80">WhatsApp Ventas</h4>
                    <p className="text-lg">+58 (424) 660-6287</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent-green mt-1" />
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-wider mb-1 opacity-80">Correo Corporativo</h4>
                    <p className="text-lg">ventas@boots-solution.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent-green mt-1" />
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-wider mb-1 opacity-80">Hub Central Miami</h4>
                    <p className="text-sm opacity-90 leading-relaxed">Doral Logistics Center<br/>Miami, FL 33126</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Building className="w-6 h-6 text-accent-green mt-1" />
                  <div>
                    <h4 className="font-bold uppercase text-xs tracking-wider mb-1 opacity-80">Sede Caracas</h4>
                    <p className="text-sm opacity-90 leading-relaxed">Distrito Capital<br/>Venezuela</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 lg:p-14 lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase font-[Montserrat]">Solicita una Cotización</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Correo Electrónico</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Teléfono / WhatsApp</label>
                <input 
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-2">Mensaje o Requerimiento</label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 transition-all resize-none"
                  placeholder="Detalles sobre modelos, cantidades o normativa requerida..."
                ></textarea>
              </div>

              {/* Honeypot field */}
              <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden="true">
                <label htmlFor="honey">No llenes este campo si eres humano:</label>
                <input 
                  type="text" 
                  name="honey" 
                  id="honey"
                  tabIndex={-1}
                  value={formData.honey}
                  onChange={(e) => setFormData({...formData, honey: e.target.value})}
                  autoComplete="off"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full md:w-auto px-10 bg-accent-green text-white font-bold uppercase tracking-wider py-4 rounded hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-accent-green/20"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
              </div>

              {status === 'success' && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 font-medium">
                  ¡Excelente! Hemos recibido tu solicitud. Un especialista corporativo se pondrá en contacto contigo a la brevedad.
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 font-medium">
                  Hubo un error al enviar tu solicitud. Por favor intenta nuevamente o contáctanos por teléfono.
                </div>
              )}
              {status === 'spam' && (
                <div className="mt-4 p-4 bg-orange-50 text-orange-700 rounded-lg border border-orange-200 font-medium">
                  Error de validación de seguridad. Intenta nuevamente.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
