interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

export function TestimonialCard({ quote, name, title }: TestimonialCardProps) {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 p-6 rounded-lg mb-4">
        <p className="text-gray-800 italic">"{quote}"</p>
      </div>
      <div className="flex items-center">
        <div>
          <h3 className="font-medium text-accent">{name}</h3>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
}
