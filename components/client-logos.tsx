import Image from "next/image"

export function ClientLogos() {
  const clients = [
    { name: "Miami Marathon and Half", logo: "/clients/miami-marathon.png", width: 180, height: 80 },
    { name: "FIME", logo: "/clients/fime.png", width: 180, height: 60 },
    { name: "JISO", logo: "/clients/jiso.png", width: 120, height: 60 },
    { name: "Rolls-Royce", logo: "/clients/rolls-royce.png", width: 180, height: 60 },
    { name: "Longines Global Champions Tour", logo: "/clients/longines.png", width: 180, height: 60 },
    { name: "Seatrade Cruise Global", logo: "/clients/seatrade.png", width: 180, height: 60 },
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-medium text-accent text-center mb-10">Trusted by Industry Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex items-center justify-center">
              <div className="relative" style={{ width: client.width, height: client.height }}>
                <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

