"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5562995432028"
    const message = "Olá! Gostaria de saber mais sobre as roupas de grife disponíveis."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}
