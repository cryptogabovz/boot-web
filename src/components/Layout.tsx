import { Link, Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="glass-panel sticky top-0 z-50 border-b border-gray-100">
        <div className="flex justify-between items-center px-4 md:px-16 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img 
                src="/img/LOGO-BOOST-SOLUTION-0-2048x830 (2).png" 
                alt="Boots Solution Logo" 
                className="h-8 md:h-10 object-contain"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/productos" className="text-gray-600 hover:text-accent-blue font-semibold uppercase tracking-widest text-sm transition-colors">Productos</Link>
            <Link to="/nosotros" className="text-gray-600 hover:text-accent-blue font-semibold uppercase tracking-widest text-sm transition-colors">Nosotros</Link>
            <Link to="/ubicaciones" className="text-gray-600 hover:text-accent-blue font-semibold uppercase tracking-widest text-sm transition-colors">Ubicaciones</Link>
            <Link to="/contacto" className="text-gray-600 hover:text-accent-blue font-semibold uppercase tracking-widest text-sm transition-colors">Contacto</Link>
          </div>
          <Link to="/contacto" className="hidden md:block bg-transparent border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white font-semibold text-sm uppercase px-6 py-3 rounded transition-all duration-300">
            Solicitar Cotización
          </Link>
          <button className="md:hidden text-accent-blue">
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-950 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-4 md:px-16 py-8 max-w-7xl mx-auto border-b border-gray-800 mb-8">
          <div className="flex flex-col gap-6 md:col-span-2">
            <img 
              src="/img/LOGO-BOOST-SOLUTION-0-2048x830 (2).png" 
              alt="Boots Solution Logo" 
              className="h-10 object-contain self-start grayscale hover:grayscale-0 transition-all"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-sm text-gray-400 max-w-md">
              Equipando a la industria con protección de alto nivel y tecnología de vanguardia. Diseñando el futuro de la seguridad ocupacional.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-gray-100 uppercase tracking-widest mb-2 border-l-2 border-accent-blue pl-3">Legal</h4>
            <a href="#" className="text-xs text-gray-400 hover:text-accent-blue transition-colors uppercase tracking-wider">Privacidad</a>
            <a href="#" className="text-xs text-gray-400 hover:text-accent-blue transition-colors uppercase tracking-wider">Términos</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-gray-100 uppercase tracking-widest mb-2 border-l-2 border-gray-600 pl-3">Sistemas</h4>
            <a href="#" className="text-xs text-gray-400 hover:text-accent-blue transition-colors uppercase tracking-wider">Garantía</a>
            <a href="#" className="text-xs text-gray-400 hover:text-accent-blue transition-colors uppercase tracking-wider">Normativas ISO</a>
          </div>
        </div>
        <div className="text-center px-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            © 2026 Boots Solution. Tech Ind.
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-4 md:mt-0">
            MIA // CCS
          </p>
        </div>
      </footer>
    </div>
  );
}
