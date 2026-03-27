import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative h-[500px] mb-12">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/virtual_forensic_psychiatry_hero_image.png-sIhdT5EwmyJd0gifi9pDxQ6eCgeNV4.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay to darken the image slightly */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-4xl font-normal mb-4">Virtual Forensic Psychiatric Services</h1>
        <h2 className="text-2xl md:text-3xl font-normal mb-8 no-underline">
          Gloria M Kardong MD, DLFAPA, DABPN
        </h2>

        <Link
          href="/contact"
          className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-12 rounded-sm uppercase tracking-wider transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
