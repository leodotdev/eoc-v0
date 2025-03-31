import { Network, FileText, Clock, Users } from "lucide-react"

interface ServiceCardProps {
  icon: string
  title: string
}

export function ServiceCard({ icon, title }: ServiceCardProps) {
  // Function to render the appropriate icon
  const renderIcon = () => {
    switch (icon) {
      case "/icons/conventions.svg":
        return <Network className="h-10 w-10 text-accent" />
      case "/icons/administrative.svg":
        return <FileText className="h-10 w-10 text-accent" />
      case "/icons/brand.svg":
        return <Clock className="h-10 w-10 text-accent" />
      case "/icons/hospitality.svg":
        return <Users className="h-10 w-10 text-accent" />
      default:
        return <div className="h-10 w-10 bg-accent/20 rounded-full"></div>
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="bg-secondary p-8 rounded-full mb-4 flex items-center justify-center">{renderIcon()}</div>
      <h3 className="text-lg font-medium text-accent">{title}</h3>
    </div>
  )
}

