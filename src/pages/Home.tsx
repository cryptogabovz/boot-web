import { Shield, Layers, HardHat, Factory, CheckCircle, Truck, Wrench, Flame, Award, Zap, PackageOpen, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white to-blue-50 pt-24 pb-12">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start gap-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Sistemas de Protección Avanzada 2026</span>
            </div>
            <h1 className="font-bold text-5xl md:text-6xl text-gray-900 tracking-tight leading-tight uppercase font-[Montserrat]">
              Excelencia en <br/>
              <span className="text-accent-blue">Seguridad Industrial</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Fabricantes e Importadores de Calzado e Indumentaria de Alta Resistencia. Diseñados para profesionales que exigen el máximo rendimiento.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link to="/productos" className="bg-accent-blue text-white hover:bg-blue-700 font-semibold text-sm uppercase px-8 py-4 rounded transition-all duration-300 shadow-lg shadow-accent-blue/30 flex items-center gap-2">
                Ver Catálogo
              </Link>
              <Link to="/contacto" className="bg-accent-green text-white hover:bg-green-700 font-semibold text-sm uppercase px-8 py-4 rounded transition-all duration-300 shadow-lg shadow-accent-green/30 flex items-center gap-2">
                Solicitar Cotización
              </Link>
            </div>
          </div>
          
          <div className="relative mt-12 md:mt-0 flex justify-center md:justify-end h-full min-h-[500px] items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-100 rounded-full blur-[100px] -z-10"></div>
            <div className="relative w-full max-w-[600px] float-anim mt-10 md:mt-0">
              <img 
                src="/img/bota boot deconstuida.png" 
                alt="Zapato Deportivo CR 2910 Boots Solution" 
                className="w-full h-auto object-contain drop-shadow-2xl z-20 relative scale-105"
              />
              
              {/* Pequeñas Tarjetas Interactivas de Características */}
              
              {/* Capellada */}
              <div className="absolute top-[10%] left-[-5%] lg:left-[-15%] z-30 glass-panel p-3 border-l-2 border-accent-blue rounded shadow-lg max-w-[160px] bg-white/95 backdrop-blur hidden sm:block">
                <div className="absolute top-1/2 left-full w-16 lg:w-32 border-t border-dashed border-accent-blue opacity-50">
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-accent-blue rounded-full"></div>
                </div>
                <h3 className="font-bold text-xs text-gray-800 mb-0.5 leading-tight">Capellada Sintética</h3>
                <p className="text-[10px] text-gray-600 leading-tight">Malla textil ligera y flexible para un ajuste libre y seguro.</p>
              </div>

              {/* Puntera (Movida a la izquierda) */}
              <div className="absolute top-[38%] left-[-10%] lg:left-[-20%] z-30 glass-panel p-3 border-l-2 border-accent-blue rounded shadow-lg max-w-[160px] bg-white/95 backdrop-blur hidden sm:block">
                <div className="absolute top-1/2 left-full w-12 lg:w-20 border-t border-dashed border-accent-blue opacity-50">
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-accent-blue rounded-full"></div>
                </div>
                <h3 className="font-bold text-xs text-gray-800 mb-0.5 leading-tight">Puntera 200 J</h3>
                <p className="text-[10px] text-gray-600 leading-tight">Acero o policarbonato con resistencia a compresión 15 KN.</p>
              </div>

              {/* Plantilla Kevlar (Apuntando a la parte beige) */}
              <div className="absolute top-[62%] right-[-10%] lg:right-[-30%] z-30 glass-panel p-3 border-r-2 border-accent-green rounded shadow-lg max-w-[160px] bg-white/95 backdrop-blur hidden sm:block">
                <div className="absolute top-1/2 right-full w-16 lg:w-32 border-t border-dashed border-accent-green opacity-50">
                  <div className="absolute -left-1 -top-1 w-2 h-2 bg-accent-green rounded-full"></div>
                </div>
                <h3 className="font-bold text-xs text-gray-800 mb-0.5 leading-tight">Plantilla Kevlar</h3>
                <p className="text-[10px] text-gray-600 leading-tight">Lámina antiperforante (3.4mm) beige para protección extrema.</p>
              </div>

              {/* Suela */}
              <div className="absolute bottom-[-2%] right-[-10%] lg:right-[-20%] z-30 glass-panel p-3 border-r-2 border-accent-green rounded shadow-lg max-w-[160px] bg-white/95 backdrop-blur hidden sm:block">
                <div className="absolute top-1/2 right-full w-12 lg:w-20 border-t border-dashed border-accent-green opacity-50">
                  <div className="absolute -left-1 -top-1 w-2 h-2 bg-accent-green rounded-full"></div>
                </div>
                <h3 className="font-bold text-xs text-gray-800 mb-0.5 leading-tight">Suela Caucho/EVA</h3>
                <p className="text-[10px] text-gray-600 leading-tight">Antideslizante con cojín de aire. Máxima tracción industrial.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industrias en el Hero */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-16 mt-16 lg:mt-20">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 text-center">Industrias que confían en nuestra protección</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 group cursor-default">
              <Flame className="w-8 h-8 text-gray-600 group-hover:text-accent-blue transition-colors" />
              <span className="text-sm font-bold uppercase tracking-wider text-gray-600">Oil & Gas</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <HardHat className="w-8 h-8 text-gray-600 group-hover:text-accent-green transition-colors" />
              <span className="text-sm font-bold uppercase tracking-wider text-gray-600">Construcción</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Factory className="w-8 h-8 text-gray-600 group-hover:text-gray-900 transition-colors" />
              <span className="text-sm font-bold uppercase tracking-wider text-gray-600">Manufactura</span>
            </div>
            <div className="flex items-center gap-2 group cursor-default">
              <Truck className="w-8 h-8 text-gray-600 group-hover:text-accent-blue transition-colors" />
              <span className="text-sm font-bold uppercase tracking-wider text-gray-600">Logística</span>
            </div>
          </div>
        </div>
      </section>
      {/* Categorías Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="text-center mb-16">
            <span className="text-accent-blue font-bold tracking-widest uppercase text-sm mb-2 block">Catálogo Especializado</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-wider font-[Montserrat]">
              Nuestras <span className="text-accent-green">Líneas</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group border border-gray-200 rounded-2xl p-8 pb-10 hover:border-accent-blue hover:shadow-2xl transition-all duration-300 bg-gray-50 hover:bg-white cursor-pointer relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="h-48 w-full mb-6 flex justify-center items-center">
                <img src="/img/botas seguridad.png" alt="Calzado de Seguridad" className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Calzado de Seguridad</h3>
                <p className="text-gray-600 text-sm">Botas y zapatos industriales con certificaciones internacionales. Protección dieléctrica y antiperforación.</p>
                <Link to="/productos" className="mt-6 inline-flex items-center text-sm font-bold text-accent-blue uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Ver Catálogo &rarr;
                </Link>
              </div>
            </div>

            <div className="group border border-gray-200 rounded-2xl p-8 pb-10 hover:border-accent-green hover:shadow-2xl transition-all duration-300 bg-gray-50 hover:bg-white cursor-pointer relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-green/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="h-48 w-full mb-6 flex justify-center items-center">
                <img src="/img/innifugo.png" alt="Indumentaria Ignífuga" className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Indumentaria Ignífuga</h3>
                <p className="text-gray-600 text-sm">Uniformes de trabajo pesados, overoles y ropa de alta visibilidad para entornos de alto riesgo (Oil & Gas).</p>
                <Link to="/productos" className="mt-6 inline-flex items-center text-sm font-bold text-accent-green uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Explorar Línea &rarr;
                </Link>
              </div>
            </div>

            <div className="group border border-gray-200 rounded-2xl p-8 pb-10 hover:border-gray-800 hover:shadow-2xl transition-all duration-300 bg-gray-50 hover:bg-white cursor-pointer relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gray-200/50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="h-48 w-full mb-6 flex justify-center items-center">
                <img src="/img/protector de oidos.png" alt="Accesorios y EPP" className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">Accesorios y EPP</h3>
                <p className="text-gray-600 text-sm">Lentes de seguridad, guantes tácticos, cascos y protección auditiva certificada.</p>
                <Link to="/productos" className="mt-6 inline-flex items-center text-sm font-bold text-gray-800 uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Ver Equipamiento &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Technology Section with Exploded View */}
      <section className="py-32 relative w-full overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-16 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-wider mb-6 font-[Montserrat]">
              Ingeniería de <span className="text-accent-blue">Protección Total</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada componente está rigurosamente seleccionado para garantizar durabilidad extrema y confort prolongado en los entornos más exigentes.
            </p>
          </div>
          
          <div className="relative min-h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-4xl">
              <img 
                src="/img/659580e5240843c33a8e322e_BOTA DESARMADA copia.png" 
                alt="Bota Desarmada Boots Solution" 
                className="w-full h-auto object-contain relative z-20 drop-shadow-xl"
              />
              
              {/* Feature Cards for Exploded View */}
              
              {/* 1. Cubierta (Superior Izquierda) */}
              <div className="absolute top-[10%] left-[-5%] lg:-left-[25%] z-30 glass-panel p-4 border-l-4 border-accent-green rounded shadow-xl max-w-xs bg-white hidden md:block hover:scale-105 transition-transform">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-full w-24 lg:w-48 border-t-2 border-dashed border-accent-green opacity-50">
                  <div className="absolute -right-1.5 -top-1.5 w-3 h-3 bg-accent-green rounded-full shadow-[0_0_10px_rgba(105,175,71,0.8)]"></div>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-accent-green block mb-1 font-bold">Protección Exterior</span>
                <h4 className="text-sm font-bold text-gray-800 mb-1">Cubierta de Alta Resistencia</h4>
                <p className="text-xs text-gray-600">Capa protectora externa contra salpicaduras, desgaste y rasgaduras. Se adapta a múltiples tecnologías de confección.</p>
              </div>

              {/* 2. Plantilla Antiperforante (Centro Izquierda) */}
              <div className="absolute top-[55%] left-[-10%] lg:-left-[20%] z-30 glass-panel p-4 border-l-4 border-accent-blue rounded shadow-xl max-w-xs bg-white hidden lg:block hover:scale-105 transition-transform">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-full w-32 lg:w-56 border-t-2 border-dashed border-accent-blue opacity-50">
                  <div className="absolute -right-1.5 -top-1.5 w-3 h-3 bg-accent-blue rounded-full shadow-[0_0_10px_rgba(15,119,189,0.8)]"></div>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-accent-blue block mb-1 font-bold">Seguridad Activa</span>
                <h4 className="text-sm font-bold text-gray-800 mb-1">Plantilla Antiperforación</h4>
                <p className="text-xs text-gray-600">Capa interna flexible diseñada para evitar la penetración de clavos u otros objetos punzantes en la planta del pie.</p>
              </div>

              {/* 3. Puntera de Seguridad (Centro Derecha) */}
              <div className="absolute top-[52%] right-[-10%] lg:-right-[25%] z-30 glass-panel p-4 border-r-4 border-accent-blue rounded shadow-xl max-w-xs bg-white hidden md:block hover:scale-105 transition-transform">
                {/* Connecting Line */}
                <div className="absolute top-1/2 right-full w-24 lg:w-48 border-t-2 border-dashed border-accent-blue opacity-50">
                  <div className="absolute -left-1.5 -top-1.5 w-3 h-3 bg-accent-blue rounded-full shadow-[0_0_10px_rgba(15,119,189,0.8)]"></div>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-accent-blue block mb-1 font-bold">Certificación</span>
                <h4 className="text-sm font-bold text-gray-800 mb-1">Puntera de Seguridad</h4>
                <p className="text-xs text-gray-600">Casquillo frontal diseñado para absorber impactos de alta energía y compresión severa bajo normas internacionales.</p>
              </div>

              {/* 4. Suela Antideslizante (Abajo Derecha - Apuntando a la suela negra) */}
              <div className="absolute bottom-[5%] right-[-10%] lg:-right-[25%] z-30 glass-panel p-4 border-r-4 border-accent-green rounded shadow-xl max-w-xs bg-white hidden md:block hover:scale-105 transition-transform">
                {/* Connecting Line */}
                <div className="absolute top-1/2 right-full w-32 lg:w-56 border-t-2 border-dashed border-accent-green opacity-50">
                  <div className="absolute -left-1.5 -top-1.5 w-3 h-3 bg-accent-green rounded-full shadow-[0_0_10px_rgba(105,175,71,0.8)]"></div>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-accent-green block mb-1 font-bold">Agarre Industrial</span>
                <h4 className="text-sm font-bold text-gray-800 mb-1">Suela Antideslizante</h4>
                <p className="text-xs text-gray-600">Base exterior de alto agarre con labrado profundo, autolimpiante y altamente resistente a hidrocarburos y flexión constante.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fabricantes Section con Fondo de Fábrica */}
      <section className="py-32 text-white relative overflow-hidden bg-gray-900 bg-center bg-cover bg-fixed" style={{ backgroundImage: "url('/img/Fabrica_de_botas_y_zapatos_202606111502.jpeg')" }}>
        {/* Capa oscura para que el texto sea legible */}
        <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-blue rounded-full blur-[150px] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <Factory className="w-5 h-5 text-accent-green" />
              <span className="text-sm font-bold tracking-widest uppercase">Fabricantes Directos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 font-[Montserrat]">
              Calidad desde el <br/><span className="text-accent-blue">Origen</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Al ser fabricantes directos, controlamos cada etapa del proceso productivo. Esto nos permite garantizar materiales de primera línea, ofrecer precios altamente competitivos para distribuidores y mantener un inventario sólido para la industria.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-accent-green flex-shrink-0" />
                <span className="text-gray-200">Certificaciones ISO Internacionales</span>
              </li>
              <li className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-accent-green flex-shrink-0" />
                <span className="text-gray-200">Logística global y envíos inmediatos</span>
              </li>
              <li className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent-green flex-shrink-0" />
                <span className="text-gray-200">Garantía extendida en toda la línea</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel bg-white/5 border-white/10 p-6 rounded-2xl text-center transform translate-y-8">
              <h4 className="text-4xl font-bold text-accent-blue mb-2 font-[Montserrat]">+15 Años</h4>
              <p className="text-xs uppercase tracking-widest text-gray-400">De Experiencia</p>
            </div>
            <div className="glass-panel bg-white/5 border-white/10 p-6 rounded-2xl text-center">
              <h4 className="text-4xl font-bold text-accent-green mb-2 font-[Montserrat]">500k</h4>
              <p className="text-xs uppercase tracking-widest text-gray-400">Pares Vendidos</p>
            </div>
            <div className="glass-panel bg-white/5 border-white/10 p-6 rounded-2xl text-center transform translate-y-8">
              <h4 className="text-4xl font-bold text-white mb-2 font-[Montserrat]">100%</h4>
              <p className="text-xs uppercase tracking-widest text-gray-400">Conformidad ISO</p>
            </div>
            <div className="glass-panel bg-white/5 border-white/10 p-6 rounded-2xl text-center">
              <h4 className="text-4xl font-bold text-accent-blue mb-2 font-[Montserrat]">24/7</h4>
              <p className="text-xs uppercase tracking-widest text-gray-400">Soporte Industrial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Confianza Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-16">
          <div className="text-center mb-16">
            <span className="text-accent-green font-bold tracking-widest uppercase text-sm mb-2 block">Respaldo Total</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase font-[Montserrat]">Ventajas de la <span className="text-accent-blue">Fuente Directa</span></h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Eliminamos intermediarios para entregarte la máxima calidad industrial al mejor precio corporativo del mercado.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
               <div className="w-16 h-16 mx-auto bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue mb-6">
                 <Award className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wide">Máxima Calidad</h3>
               <p className="text-sm text-gray-600">Materiales premium y testeos rigurosos en laboratorio para cumplir con normas de seguridad internacionales.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
               <div className="w-16 h-16 mx-auto bg-accent-green/10 rounded-full flex items-center justify-center text-accent-green mb-6">
                 <Zap className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wide">Precios de Fábrica</h3>
               <p className="text-sm text-gray-600">Al ser fabricantes directos, optimizamos profundamente tus costos de dotación sin pagar a intermediarios.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
               <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-gray-800 mb-6">
                 <PackageOpen className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wide">Inventario Robusto</h3>
               <p className="text-sm text-gray-600">Contamos con gran capacidad instalada de producción y stock constante para abastecer proyectos de gran escala.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
               <div className="w-16 h-16 mx-auto bg-accent-blue/10 rounded-full flex items-center justify-center text-accent-blue mb-6">
                 <CheckCircle2 className="w-8 h-8" />
               </div>
               <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wide">Garantía Directa</h3>
               <p className="text-sm text-gray-600">Respaldo corporativo directo de fábrica contra cualquier tipo de defecto de manufactura en todas nuestras líneas.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-accent-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-bl-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green opacity-20 rounded-tr-full -z-10 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 md:px-16 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold uppercase font-[Montserrat] mb-6 tracking-tight">Protege el Activo Más Valioso de tu Empresa</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">Únete a las cientos de empresas industriales que ya confían en la resistencia, durabilidad y tecnología de Boots Solution para sus operaciones diarias.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-accent-green text-white hover:bg-green-700 font-bold uppercase tracking-wider px-8 py-4 rounded transition-all shadow-lg shadow-accent-green/30">
              Cotizar Dotación
            </Link>
            <Link to="/productos" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-accent-blue font-bold uppercase tracking-wider px-8 py-4 rounded transition-all">
              Explorar Catálogo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
