"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, Shield, Truck, RotateCcw, CreditCard } from "lucide-react"

export default function ContactInfo() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de mais informações sobre os produtos da Grife Store."
    const whatsappUrl = `https://wa.me/5562995432028?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif font-bold text-2xl text-slate-700 mb-6">Fale Conosco</h2>
        <p className="text-slate-600 mb-8">
          Nossa equipe está pronta para ajudar você a encontrar as melhores peças de grife com os melhores preços.
        </p>
      </div>

      {/* WhatsApp Contact */}
      <Card className="p-6 border-2 border-green-200 bg-green-50">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-green-500 p-3 rounded-full">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-slate-700">WhatsApp</h3>
            <p className="text-slate-600">Atendimento rápido e personalizado</p>
          </div>
        </div>
        <p className="text-2xl font-bold text-green-700 mb-4">(62) 9 9543-2028</p>
        <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600">
          <MessageCircle className="h-4 w-4 mr-2" />
          Conversar no WhatsApp
        </Button>
      </Card>

      {/* Business Hours */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="h-6 w-6 text-amber-600" />
          <h3 className="font-semibold text-lg text-slate-700">Horário de Atendimento</h3>
        </div>
        <div className="space-y-2 text-slate-600">
          <div className="flex justify-between">
            <span>Segunda a Sexta</span>
            <span className="font-medium">9h às 18h</span>
          </div>
          <div className="flex justify-between">
            <span>Sábado</span>
            <span className="font-medium">9h às 14h</span>
          </div>
          <div className="flex justify-between">
            <span>Domingo</span>
            <span className="font-medium text-red-500">Fechado</span>
          </div>
        </div>
      </Card>

      {/* Services */}
      <Card className="p-6">
        <h3 className="font-semibold text-lg text-slate-700 mb-4">Nossos Diferenciais</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-blue-600" />
            <span className="text-slate-600">Autenticidade 100% garantida</span>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-green-600" />
            <span className="text-slate-600">Frete grátis para Goiânia e região</span>
          </div>
          <div className="flex items-center gap-3">
            <RotateCcw className="h-5 w-5 text-amber-600" />
            <span className="text-slate-600">Troca grátis em até 30 dias</span>
          </div>
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-purple-600" />
            <span className="text-slate-600">Pagamento seguro (PIX, cartão)</span>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="space-y-3">
        <Button
          onClick={() => {
            const message = "Olá! Gostaria de saber sobre disponibilidade de produtos."
            window.open(`https://wa.me/5562995432028?text=${encodeURIComponent(message)}`, "_blank")
          }}
          variant="outline"
          className="w-full bg-transparent"
        >
          Consultar Disponibilidade
        </Button>
        <Button
          onClick={() => {
            const message = "Olá! Preciso de ajuda com trocas e devoluções."
            window.open(`https://wa.me/5562995432028?text=${encodeURIComponent(message)}`, "_blank")
          }}
          variant="outline"
          className="w-full bg-transparent"
        >
          Trocas e Devoluções
        </Button>
        <Button
          onClick={() => {
            const message = "Olá! Gostaria de rastrear meu pedido."
            window.open(`https://wa.me/5562995432028?text=${encodeURIComponent(message)}`, "_blank")
          }}
          variant="outline"
          className="w-full bg-transparent"
        >
          Rastrear Pedido
        </Button>
      </div>
    </div>
  )
}
