import { Shield, Factory, Globe, Award } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden bg-gray-900 text-white pt-20">
        <div className="absolute inset-0 bg-[url('/img/Fabrica_de_botas_y_zapatos_202606111502.jpeg')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-accent-green font-bold tracking-widest uppercase text-sm mb-4 block">Más que una marca</span>
          <h1 className="text-5xl md:text-6xl font-bold uppercase font-[Montserrat] mb-6">Nuestra Historia</h1>
          <p className="text-xl text-gray-300">Construimos la protección del futuro desde nuestra fábrica hasta tus instalaciones.</p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-50 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-green-50 rounded-full -z-10"></div>
            <img src="/img/botas seguridad.png" alt="Producción de Calzado Boots Solution" className="w-full object-contain rounded-2xl drop-shadow-2xl bg-gray-50 p-8 border border-gray-100" />
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 glass-panel bg-white/90 backdrop-blur border border-gray-100 p-6 rounded-2xl shadow-xl hidden md:block">
              <h4 className="text-4xl font-bold text-accent-blue mb-1 font-[Montserrat]">+15</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500">Años Fabricando</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase font-[Montserrat] mb-6">Fabricantes Directos, <span className="text-accent-blue">Impacto Local</span></h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              En Boots Solution no somos simples revendedores. <strong className="text-gray-900">Somos fabricantes directos</strong> de calzado e indumentaria de seguridad de alta resistencia. Controlamos cada hilo, cada suela y cada costura en nuestras líneas de producción.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nuestro gran objetivo y orgullo es <strong>traer directamente a Venezuela</strong> los mismos productos de clase mundial que distribuimos internacionalmente, garantizando que el trabajador venezolano cuente con tecnología, protección certificada y la máxima calidad sin pagar de más por intermediarios.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-accent-blue rounded-lg">
                  <Factory className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Cero Intermediarios</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">De la línea de ensamblaje a tu proyecto, asegurando el mejor precio.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-50 text-accent-green rounded-lg">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 uppercase text-sm mb-1">Presencia en Venezuela</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">Importación directa para abastecer el mercado nacional con stock inmediato.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-widest mb-12">Nuestros Pilares de Calidad</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <Shield className="w-12 h-12 text-accent-blue mb-4" />
              <h3 className="font-bold uppercase mb-2">Normativas ISO</h3>
              <p className="text-sm text-gray-500">Nuestras fábricas operan bajo estrictas normativas ISO de gestión de calidad.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <Award className="w-12 h-12 text-accent-green mb-4" />
              <h3 className="font-bold uppercase mb-2">Certificación de Materiales</h3>
              <p className="text-sm text-gray-500">Uso de punteras, suelas dieléctricas e indumentaria ignífuga testeada en laboratorio.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
              <Factory className="w-12 h-12 text-gray-800 mb-4" />
              <h3 className="font-bold uppercase mb-2">Innovación Continua</h3>
              <p className="text-sm text-gray-500">Desarrollo constante de nuevos polímeros y textiles para entornos extremos.</p>
            </div>
          </div>

          {/* Logos de Certificaciones */}
          <div className="border-t border-gray-200 pt-16">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 block">Certificaciones & Homologaciones Internacionales y Nacionales</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
              <div className="h-16 flex items-center justify-center p-2">
                <img src="/img/certificaciones/norma iso logo.png" alt="Normas ISO" className="max-h-full max-w-full object-contain grayscale contrast-[1.5] brightness-[0.4] opacity-80 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="h-16 flex items-center justify-center p-2">
                <img src="/img/certificaciones/Ansi-Logo-Vector.svg-.png" alt="ANSI" className="max-h-full max-w-full object-contain grayscale contrast-[1.5] brightness-[0.4] opacity-80 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="h-12 flex items-center justify-center p-2">
                <img src="/img/certificaciones/US-OSHA-Logo.svg.png" alt="OSHA" className="max-h-full max-w-full object-contain grayscale contrast-[1.5] brightness-[0.4] opacity-80 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="h-14 flex items-center justify-center p-2">
                <img src="/img/certificaciones/Conformité_Européenne_(logo).svg.png" alt="CE" className="max-h-full max-w-full object-contain grayscale contrast-[1.5] brightness-[0.4] opacity-80 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="h-16 flex items-center justify-center p-2">
                <img src="/img/certificaciones/astm logo.png" alt="ASTM" className="max-h-full max-w-full object-contain grayscale contrast-[1.5] brightness-[0.4] opacity-80 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="h-16 flex items-center justify-center p-2">
                <img src="/img/certificaciones/covenin.png" alt="COVENIN" className="max-h-full max-w-full object-contain grayscale contrast-[1.5] brightness-[0.4] opacity-80 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="h-14 flex items-center justify-center p-2">
                <img src="/img/certificaciones/icontec.png" alt="ICONTEC" className="max-h-full max-w-full object-contain grayscale contrast-[1.5] brightness-[0.4] opacity-80 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
              </div>
              <div className="h-16 flex items-center justify-center p-2">
                <img src="/img/certificaciones/nfpa-international-logo-black-and-white-768x768.webp" alt="NFPA" className="max-h-full max-w-full object-contain grayscale contrast-[1.5] brightness-[0.4] opacity-80 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
