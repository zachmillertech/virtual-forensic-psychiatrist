export default function Services() {
  const services = [
    { title: "Web Development", description: "Custom websites tailored to your needs" },
    { title: "Mobile Apps", description: "Innovative mobile solutions for iOS and Android" },
    { title: "Cloud Solutions", description: "Scalable and secure cloud infrastructure" },
    { title: "Consulting", description: "Expert advice to drive your business forward" },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
