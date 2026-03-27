interface PageTitleProps {
  title: string
  showBanner?: boolean
}

export default function PageTitle({ title, showBanner = true }: PageTitleProps) {
  if (!showBanner) return null

  return (
    <div className="bg-custom-blue py-4 mb-8">
      <div className="container mx-auto px-content">
        <h1 className="text-h1 text-white">{title}</h1>
      </div>
    </div>
  )
}
