import PageTitle from "@/components/PageTitle"

export default function ForensicReferences() {
  return (
    <>
      <PageTitle title="Forensic References" />
      <div className="container mx-auto px-content py-8">
        <div className="space-y-8">
          <ReferenceItem
            name="Jane Zack Simon, Esq."
            title="Supervising Deputy Attorney General of the State of California"
            phone="415-703-5544"
            email="JaneZack.Simon@doj.ca.gov"
          />

          <ReferenceItem
            name="Michael Romano, Esq"
            title="Stanford Law School"
            subtitle="Director and Founder, Three Strikes Project"
            phone="650-736-7757"
            email="michaelromano@stanford.edu"
          />

          <ReferenceItem
            name="Martha Snider, MD"
            title="Past District Medical Consultant, Senior Investigator"
            subtitle="Medical Board of California"
            email="marthasnider@earthlink.net"
          />
          <ReferenceItem
            name="Harvey Dondershine, MD, JD"
            title="Chair, Center for Psychiatry and the Law, Department of Psychiatry and Behavioral Sciences"
            subtitle="Stanford University Medical Center, Stanford, CA 94305"
            email="hdonder@gmail.com"
            phone="PH: 650-906-0887"
          />
          <ReferenceItem
            name="Colin Murphy, JD"
            title="Private Attorney, 595 Market Street #2600, San Francisco, CA 94105"
            subtitle="Medical Board of California"
            email="cxm@severson.com"
          />
          <ReferenceItem
            name="Carl S. Back, JD"
            title="Private Attorney"
            subtitle="210 Blue Heron Road, Box 1350, Wellfleet, MA 02667"
            email="csback@comcast.net"
          />                              
        </div>
      </div>
    </>
  )
}

interface ReferenceItemProps {
  name: string
  title: string
  subtitle?: string
  phone?: string
  email: string
}

function ReferenceItem({ name, title, subtitle, phone, email }: ReferenceItemProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">{title}</p>
      {subtitle && <p className="text-gray-700 mb-1">{subtitle}</p>}
      {phone && <p className="text-gray-600 mb-1">PH: {phone}</p>}
      <p className="text-gray-600">
        <a href={`mailto:${email}`} className="text-purple-600 hover:text-purple-800">
          {email}
        </a>
      </p>
    </div>
  )
}
