import Image from "next/image";

export function ClientLogos() {
  const clients = [
    {
      name: "Miami Marathon and Half",
      logo: "/clients/miami-marathon.png",
      width: 180,
      height: 80,
    },
    { name: "FIME", logo: "/clients/fime.png", width: 180, height: 60 },
    { name: "JISO", logo: "/clients/jiso.png", width: 120, height: 60 },
    {
      name: "Rolls-Royce",
      logo: "/clients/rolls-royce.png",
      width: 180,
      height: 60,
    },
    {
      name: "Longines Global Champions Tour",
      logo: "/clients/longines.png",
      width: 180,
      height: 60,
    },
    {
      name: "Seatrade Cruise Global",
      logo: "/clients/seatrade.png",
      width: 180,
      height: 60,
    },
    {
      name: "South Beach Wine & Food Festival",
      logo: "/clients/sobe-wff.png",
      width: 180,
      height: 60,
    },
    {
      name: "Miami International Boat Show",
      logo: "/clients/mibs.png",
      width: 180,
      height: 60,
    },
    {
      name: "Neiman Marcus",
      logo: "/clients/neiman-marcus.png",
      width: 180,
      height: 60,
    },
    {
      name: "Greater Miami Convention & Visitors Bureau",
      logo: "/clients/gmcvb.png",
      width: 180,
      height: 60,
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-medium text-center mb-10">
          Trusted by Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center w-full"
            >
              <div className="relative w-full max-w-[180px] h-[60px]">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  fill
                  className="object-contain filter grayscale hover:grayscale-0"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
