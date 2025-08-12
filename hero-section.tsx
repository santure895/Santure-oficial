import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/elegant-male-model.png"
          alt="Modelo masculino vestindo camisa de grife"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
          <span className="text-white">Grifes</span> <span className="golden-s-logo">Internacionais</span>,
          <br />
          <span className="golden-s-logo">Preços</span> <span className="text-white">Brasileiros</span>
        </h1>

        <p className="text-xl sm:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          <span className="text-white">Vista-se de</span> <span className="golden-s-logo font-medium">luxo</span>.{" "}
          <span className="text-white">Pague</span> <span className="golden-s-logo font-medium">menos</span>.
          <br />
          <span className="golden-s-logo font-medium">Gucci, Balmain, Louis Vuitton, Hugo Boss, Armani</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black px-8 py-3 text-lg font-semibold shadow-lg shadow-accent/25"
          >
            Ver Coleção
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-black px-8 py-3 text-lg font-medium bg-transparent shadow-lg shadow-accent/10"
          >
            Novidades
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full shadow-sm shadow-accent/50"></div>
            <span className="text-white">Autenticidade</span> <span className="golden-s-logo">Garantida</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full shadow-sm shadow-accent/50"></div>
            <span className="text-white">Frete</span> <span className="golden-s-logo">Grátis</span>{" "}
            <span className="text-white">Goiânia e Região</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full shadow-sm shadow-accent/50"></div>
            <span className="text-white">Pagamento</span> <span className="golden-s-logo">Seguro</span>
          </div>
        </div>
      </div>
    </section>
  )
}
