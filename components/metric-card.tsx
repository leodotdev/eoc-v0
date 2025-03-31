interface MetricCardProps {
  number: string
  label: string
}

export function MetricCard({ number, label }: MetricCardProps) {
  return (
    <div className="border border-gray-200 p-8 rounded-lg">
      <h3 className="text-2xl md:text-3xl font-medium mb-2">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  )
}

