import { Wrench, FileText, MessageSquare } from 'lucide-react';

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-16 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 uppercase font-[Montserrat]">Nuestros Productos</h1>
      <p className="text-lg text-gray-600 mb-12">Explora nuestro catálogo de calzado e indumentaria de seguridad industrial.</p>
      
      {/* Banner de Construcción */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-12 flex flex-col md:flex-row items-center gap-6 shadow-sm">
        <div className="bg-amber-100 p-4 rounded-full text-amber-600">
          <Wrench className="w-8 h-8 animate-pulse" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-bold text-amber-900 mb-2">Tienda en Línea en Construcción</h2>
          <p className="text-amber-800">
            Estamos diseñando una experiencia de compra digital optimizada para ti. Muy pronto podrás realizar tus pedidos en línea de forma rápida y segura.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <a 
            href="https://wa.me/584241234567" /* Reemplazar con el WhatsApp real si aplica, o dejar genérico */
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm uppercase tracking-wider"
          >
            <MessageSquare className="w-4 h-4" />
            Cotizar por WhatsApp
          </a>
          <button 
            onClick={() => alert('El catálogo PDF se está generando y estará disponible en breve.')}
            className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-lg transition-colors text-sm uppercase tracking-wider"
          >
            <FileText className="w-4 h-4" />
            Descargar Catálogo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-panel p-8 border border-gray-200 flex flex-col items-center group cursor-pointer hover:border-accent-blue transition-colors">
           <img 
              src="/img/botas seguridad.png" 
              alt="Botas de Seguridad" 
              className="h-56 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
            />
            <h3 className="text-lg font-bold uppercase mt-8 text-gray-900 text-center">Calzado de Seguridad</h3>
        </div>
        
        <div className="glass-panel p-8 border border-gray-200 flex flex-col items-center group cursor-pointer hover:border-gray-800 transition-colors">
           <img 
              src="/img/protector de oidos.png" 
              alt="Protección Auditiva y EPP" 
              className="h-56 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
            />
            <h3 className="text-lg font-bold uppercase mt-8 text-gray-900 text-center">Accesorios y EPP</h3>
        </div>

        <div className="glass-panel p-8 border border-gray-200 flex flex-col items-center justify-center group cursor-pointer hover:border-accent-green transition-colors bg-gray-50">
            <h3 className="text-lg font-bold uppercase mt-8 text-gray-400 text-center">Próximamente Indumentaria</h3>
        </div>
      </div>
    </div>
  );
}

