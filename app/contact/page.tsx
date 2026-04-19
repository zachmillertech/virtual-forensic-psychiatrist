import PageTitle from "@/components/PageTitle"

export default function Contact() {
  return (
    <>
      <PageTitle title="Contact Dr. Kardong" />
      <div className="container mx-auto px-content py-8">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
          <p className="mb-6">
            Please call or email Dr. Kardong to schedule an appointment or learn more about her virtual services.
          </p>

          <div className="space-y-4">
            <p className="text-xl font-semibold text-purple-700">
              <a href="tel:+16503299465" className="hover:text-purple-900">
                (650) 329-9465
              </a>
            </p>

            <p className="text-xl font-semibold text-purple-700">
              <a href="mailto:info@gloriamkardongmd.com" className="hover:text-purple-900">
                info@gloriamkardongmd.com
              </a>
            </p>

            <p className="text-xl font-semibold text-purple-700">
              <a
                href="https://gloriamkardongmd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-900"
              >
                https://gloriamkardongmd.com
              </a>
            </p>
            <p className="text-xl font-semibold text-purple-700">
  3000 El Camino Real<br />
  Building 4 Suite 200<br />
  Palo Alto, CA 94306
</p>
          </div>
        </div>
      </div>
    </>
  )
}
