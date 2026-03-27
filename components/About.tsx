export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg mb-4">
              We are a team of dedicated professionals committed to delivering high-quality solutions for our clients.
              With years of experience in the industry, we strive to exceed expectations and drive innovation.
            </p>
            <p className="text-lg">
              Our mission is to empower businesses with cutting-edge technology and expert guidance, helping them
              achieve their goals and stay ahead in today's competitive landscape.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <img src="/placeholder.svg" alt="About us image" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
