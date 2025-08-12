export default function Footer() {
  return (
    <footer className="bg-black text-secondary py-12 border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif font-bold text-xl mb-4 text-accent">SANTURE GRIFES</h3>
            <p className="text-secondary/70 text-sm leading-relaxed">
              Grifes internacionais com preços brasileiros. Autenticidade garantida em todas as peças.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Produtos</h4>
            <ul className="space-y-2 text-sm text-secondary/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Camisas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Bermudas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Malhas Peruanas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Novidades
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Atendimento</h4>
            <ul className="space-y-2 text-sm text-secondary/70">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de Troca
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Frete e Entrega
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Autenticidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Contato</h4>
            <div className="space-y-2 text-sm text-secondary/70">
              <p className="text-accent font-medium">Email: santuregrifes@gmail.com</p>
              <p className="text-accent font-medium">WhatsApp: (62) 9 9543-2028</p>
              <p>Atendimento: Seg-Sex 9h às 18h</p>
              <p>Sáb: 9h às 14h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-8 text-center text-sm text-secondary/50">
          <p>&copy; 2024 Santure Grifes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
