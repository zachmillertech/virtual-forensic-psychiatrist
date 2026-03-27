interface CredentialItem {
  title?: string
  description: string
}

interface CredentialSectionProps {
  title: string
  items: CredentialItem[]
}

export default function CredentialSection({ title, items }: CredentialSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">{title}</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="ml-4">
            {item.title && <span className="font-semibold text-purple-600">{item.title}: </span>}
            {item.description}
          </li>
        ))}
      </ul>
    </section>
  )
}
