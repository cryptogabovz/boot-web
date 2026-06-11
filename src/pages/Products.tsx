export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-16 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 uppercase font-[Montserrat]">Nuestros Productos</h1>
      <p className="text-lg text-gray-600 mb-12">Explora nuestro catálogo de calzado e indumentaria de seguridad industrial.</p>
      
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
