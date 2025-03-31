import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  description: string
  price: string
  features: string[]
}

export function PricingCard({ title, description, price, features }: PricingCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-end">
          <span className="text-3xl font-medium">{price}</span>
          <span className="text-gray-600 ml-1">/month</span>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-gray-600 mr-2 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="w-full mt-6 bg-transparent text-gray-600 hover:text-black border-b border-gray-600 hover:border-black rounded-none px-0 py-0">
          Start now
        </Button>
      </div>
    </div>
  )
}

