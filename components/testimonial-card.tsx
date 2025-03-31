import Image from "next/image"
import { User } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  image: string
}

export function TestimonialCard({ quote, name, title, image }: TestimonialCardProps) {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 p-6 rounded-lg mb-4">
        <p className="text-gray-800 italic">"{quote}"</p>
      </div>
      <div className="flex items-center">
        <div className="mr-4 w-[60px] h-[60px] relative bg-gray-200 rounded-full flex items-center justify-center">
          {/* Fallback icon if image doesn't load */}
          <User className="h-8 w-8 text-gray-400 absolute" />
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <Image src={`/placeholder.svg?height=60&width=60`} alt={name} fill className="object-cover" />
          </div>
        </div>
        <div>
          <h3 className="font-medium text-accent">{name}</h3>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  )
}

