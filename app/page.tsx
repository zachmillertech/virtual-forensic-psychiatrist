import Link from "next/link"
import Hero from "@/components/Hero"

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-content py-8">
        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">
            Benefits of Virtual Forensic Psychiatric Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              title="Cost Effective"
              description="With HIPAA compliant virtual services, client costs can be significantly reduced. This eliminates travel and lodging expenses, which add unnecessarily to the cost of expert evaluation."
            />
            <BenefitCard
              title="Client Comfort"
              description="With HIPAA compliant virtual sessions, your client can receive the necessary services in the comfort of their home, attorney's office or court, where allowed."
            />
            <BenefitCard
              title="Convenient and Time Saving"
              description="Dr. Kardong makes herself readily available to clients and attorneys, making expert forensic psychiatric services fast and easy."
            />
            <BenefitCard
              title="Access to Top Psychiatrist"
              description="Dr. Kardong is a leader in the provision of forensic psychiatric services. She is a Distinguished Life Fellow of the American Psychiatric Association. She is adjunct Clinical Associate Professor in Psychiatry and Behavioral Sciences at Stanford."
            />
            <BenefitCard
              title="15+ Years of Forensic Experience"
              description="Dr. Kardong has provided expert witness and consulting services for civil, criminal, prosecution and defense cases for over 15 years."
            />
            <BenefitCard
              title="HIPAA Protected"
              description="Dr. Kardong's virtual sessions are HIPAA protected, private and secure."
            />
          </div>
        </section>

        {/* HIPAA Protected Virtual Services */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
            HIPAA Protected Virtual Forensic Psychiatric Services
          </h2>

          <p className="mb-4 text-center">Dr. Kardong provides the following services virtually:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
            <div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Expert Witness/Consultant: Civil, Criminal, Prosecution and Defense</li>
                <li>Medico-Legal Consultation to Attorneys</li>
                <li>Preparation for Trial</li>
                <li>Trial Consulting</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Psychiatric Evaluations</li>
                <li>File Review/Report</li>
                <li>Depositions</li>
                <li>In Court Testimony</li>
              </ul>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">
            About Gloria M Kardong MD, DLFAPA, DABPN
          </h2>

          <div className="space-y-6">
            <p>
              Dr. Kardong is adjunct Clinical Associate Professor of Psychiatry and Behavioral Sciences at Stanford
              University Medical Center. She is a Distinguished Life Fellow of the American Psychiatric Association. She
              has been providing psychiatric care and teaching at Stanford for over 35 years.
            </p>

            <p>
              Dr. Kardong understands the time and expense involved for attorneys and their clients needing forensic
              services when provided onsite in the expert's or attorney's location. She also offers HIPAA protected
              virtual assistance for all of the same services provided onsite.
            </p>

            <p>
              Dr. Kardong has been providing Medicolegal Consultation to attorneys for the past 15 years. This includes
              Expert Witness and Expert Consulting services for Civil, Criminal, Prosecution and Defense cases. She also
              offers Preparation for Trial and Trial Consulting as well as Testimony in Depositions and in Court. She
              performs Psychiatric Evaluations and File Reviews as well.
            </p>

            <p>Dr. Kardong is broadly knowledgeable about many areas in General Psychiatry.</p>

            <p>
              Her specialty areas include Women's Health Care such as Pregnancy-related concerns; Postpartum Depression;
              Sexual, Physical, and Emotional Abuse, PTSD.
            </p>

            <p>
              Impaired Professionals, including Doctors, Nurses, Mental Health Providers, Executives, and other
              Professionals and Professional Organizations.
            </p>

            <p>
              Medical Malpractice, Hospital and Medical Ethics; Standard of Care; Psychological Consequences of
              Workplace Injuries, Wrongful Termination and Product Liability.
            </p>

            <p><span className="base-text-underline">Forensic Psychiatry Specialty Areas</span> include the following:</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>OB-GYN and Psychiatry</li>
              <li className="ml-6 list-[circle]">Pregnancy and Postpartum-related Psychiatric Problems</li>
              <li className="ml-6 list-[circle]">Infertility/IVF/IUI</li>
              <li className="ml-6 list-[circle]">
                Trauma
                <ul className="pl-5 mt-2">
                  <li className="list-['-']">PTSD</li>
                  <li className="list-['-']">Sexual, Physical and Emotional Abuse</li>
                  <li className="list-['-']">Adoption</li>
                </ul>
              </li>
              <li>
                Impaired Professionals
                <ul className="list-disc pl-5 mt-2">
                  <li className="ml-6 list-[circle]">Physicians and Nurses</li>
                  <li className="ml-6 list-[circle]">Mental Health Care Providers</li>
                  <li className="ml-6 list-[circle]">Attorneys</li>
                  <li className="ml-6 list-[circle]">Executives</li>
                  <li className="ml-6 list-[circle]">Other Professionals and Professional Organizations</li>
                </ul>
              </li>
              <li>Medical Malpractice</li>
              <li>Personal Injury</li>
            </ul>

            <p className="base-text-underline">Consultation Services</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Standard of Care</li>
              <li>Hospital and Medical Ethics</li>
              <li>Healthcare Practices and Records</li>
              <li>Discrimination</li>
              <li>Harassment</li>
              <li>Disabilities</li>
              <li>
                Psychological Consequences of:
                <ul className="list-disc pl-5 mt-2">
                  <li className="ml-6 list-[circle]">Workplace Injuries</li>
                  <li className="ml-6 list-[circle]">Wrongful Termination</li>
                  <li className="ml-6 list-[circle]">Product Liability</li>
                </ul>
              </li>
              <li>Executive Coaching</li>
            </ul>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-8">
              <Link
                href="https://www.experts.com/expert-witnesses/forensic-psychiatry-expert-witness-gloria-kardong"
                className="inline-block bg-custom-purple text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-full md:w-auto text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                MORE INFORMATION
              </Link>
              <Link
                href="/credentials"
                className="inline-block bg-custom-purple text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-full md:w-auto text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                CREDENTIALS
              </Link>
              <Link
                href="/forensic-references"
                className="inline-block bg-custom-purple text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors w-full md:w-auto text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                REFERENCES
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-8 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">Contact Dr. Kardong</h2>

          <p className="text-center mb-6">
            Please call or email Dr. Kardong to schedule an appointment or learn more about her virtual services.
          </p>

          <div className="flex flex-col items-center space-y-3">
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
          </div>
        </section>
      </div>
    </>
  )
}

interface BenefitCardProps {
  title: string
  subtitle?: string
  description: string
}

function BenefitCard({ title, subtitle, description }: BenefitCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full">
      <h3 className="text-lg font-bold text-purple-700 mb-2">{title}</h3>
      {subtitle && <h4 className="text-md font-semibold text-purple-600 mb-2">{subtitle}</h4>}
      <p>{description}</p>
    </div>
  )
}
