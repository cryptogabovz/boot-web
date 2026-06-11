import { MapPin, Globe, Phone, Mail, Clock } from 'lucide-react';

export default function Locations() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-16 text-center">
          <span className="text-accent-blue font-bold tracking-widest uppercase text-sm mb-4 block">Red de Distribución</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 uppercase font-[Montserrat]">Nuestras Ubicaciones</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desde nuestros centros operativos estratégicos, garantizamos un flujo logístico impecable para proteger la industria, sin importar las fronteras.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Miami Location Card */}
            <div className="group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-accent-blue transition-all duration-300 bg-white flex flex-col">
              <div className="h-64 bg-gray-900 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533727142079-c5c645b2061f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-4xl font-bold text-white uppercase tracking-wider font-[Montserrat]">Miami</h3>
                  <p className="text-blue-200 uppercase tracking-widest text-sm mt-2">Hub Internacional</p>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <p className="text-gray-600 leading-relaxed text-sm">
                  Nuestro centro de control global. Desde Miami coordinamos la exportación, control de calidad y logística internacional para abastecer a nuestros distribuidores en todo el continente.
                </p>
                
                <div className="space-y-4 mt-auto">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" />
                    <div>
                      <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">Dirección</span>
                      <span className="text-gray-600 text-sm">Miami, FL 33126, Estados Unidos<br/>(Centro Logístico Doral)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" />
                    <div>
                      <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">Teléfono</span>
                      <span className="text-gray-600 text-sm">+1 (305) 555-0198</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" />
                    <div>
                      <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">Email Global</span>
                      <span className="text-gray-600 text-sm">export@boots-solution.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caracas Location Card */}
            <div className="group rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-accent-green transition-all duration-300 bg-white flex flex-col">
              <div className="h-64 bg-gray-900 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584067341076-21ab1705e324?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-4xl font-bold text-white uppercase tracking-wider font-[Montserrat]">Caracas</h3>
                  <p className="text-green-200 uppercase tracking-widest text-sm mt-2">Sede Nacional Venezuela</p>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col gap-6">
                <p className="text-gray-600 leading-relaxed text-sm">
                  Nuestra sede principal en Venezuela. Almacenamiento robusto y stock permanente para distribución inmediata a la industria petrolera, manufacturera y de construcción del país.
                </p>
                
                <div className="space-y-4 mt-auto">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-accent-green mt-1 flex-shrink-0" />
                    <div>
                      <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">Dirección</span>
                      <span className="text-gray-600 text-sm">Caracas, Distrito Capital<br/>Venezuela</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-accent-green mt-1 flex-shrink-0" />
                    <div>
                      <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">Teléfono Ventas</span>
                      <span className="text-gray-600 text-sm">+58 (212) 555-0123</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-accent-green mt-1 flex-shrink-0" />
                    <div>
                      <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">Horario Operativo</span>
                      <span className="text-gray-600 text-sm">Lun - Vie: 8:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Global Logistics Banner */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-16 text-center flex flex-col items-center">
          <Globe className="w-16 h-16 text-accent-blue mb-6 opacity-80" />
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest mb-4">Logística sin Interrupciones</h2>
          <p className="text-gray-400 max-w-2xl">
            La conexión estratégica entre Miami y Caracas nos permite garantizar tiempos de entrega récords, saltándonos las trabas tradicionales de importación y brindando seguridad total a tu inversión.
          </p>
        </div>
      </section>
    </>
  );
}
