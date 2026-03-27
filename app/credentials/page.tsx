import PageTitle from "@/components/PageTitle"
import CredentialSection from "@/components/CredentialSection"

export default function Credentials() {
  return (
    <>
      <PageTitle title="Credentials" />
      <div className="container mx-auto px-content py-8">
        <CredentialSection
          title="Education, Honors and Professional/Educational Activities"
          items={[
            {
              title: "ADJUNCT CLINICAL ASSOCIATE PROFESSOR",
              description: "Stanford Department of Psychiatry and Behavioral Sciences",
            },
            {
              title: "ADJUNCT CLINICAL FACULTY SERVICE AWARD",
              description: "20 and 25 years, Stanford Department of Psychiatry, 2010 and 2015",
            },
            { title: "DISTINGUISHED LIFE FELLOW", description: "American Psychiatric Association, 2020-present" },
            { title: "DISTINGUISHED FELLOW", description: "American Psychiatric Association, 2006-present" },
            {
              title: "HOUSESTAFF WELLBEING COMMITTEE",
              description: "Stanford University School of Medicine, 2010-present",
            },
            { title: "PATIENTS' CHOICE AWARD", description: "2011-present" },
            { title: "TOP DOCTORS IN SILICON VALLEY", description: "San Jose Magazine, 2003–present" },
            { title: "MOST COMPASSIONATE DOCTOR", description: "2013-present" },
            { title: "BOARD CERTIFIED", description: "American Board of Psychiatry and Neurology, 1993-present" },
          ]}
        />
        <CredentialSection
          title="Employment"
          items={[
            { title: "PRIVATE PRACTICE OF PSYCHIATRY", description: "1990–Present" },
            { title: "FORENSIC PSYCHIATRY", description: "2009-present" },
            { title: "STANFORD UNIVERSITY SCHOOL OF LAW", description: "Expert Consultant, 2009" },
            { title: "CALIFORNIA MEDICAL BOARD", description: "Expert Examiner, 2010-present" },
            {
              title: "OAK CREEK HOSPITAL, San Jose, California",
              description: "Clinical Director, Women's Program, 1991",
            },
            {
              title: "PALO ALTO VETERANS ADMIN HOSPITAL",
              description: "Medical Director/Ward Chief, Psychiatric ICU, 1990",
            },
          ]}
        />
        <CredentialSection
          title="Education"
          items={[
            {
              title: "RESIDENCY",
              description: "STANFORD UNIVERSITY DEPARTMENT OF PSYCHIATRY AND BEHAVIORAL SCIENCES, 1987–1990",
            },
            { title: "INTERNSHIP", description: "SAN MATEO COUNTY GENERAL HOSPITAL, 1986–1987" },
            { title: "MEDICAL SCHOOL", description: "UNIVERSITY of WASHINGTON, 1981–1986" },
            { title: "COLLEGE", description: "UNIVERSITY of WASHINGTON, B.A. with Honors in Zoology, 3-81" },
          ]}
        />
        <CredentialSection
          title="Professional Organizations"
          items={[
            { description: "American Medical Association" },
            { description: "California Medical Association" },
            { description: "American Psychiatric Association" },
            { description: "California Psychiatric Association" },
            { description: "Northern California Psychiatric Society" },
            { description: "Forensic Expert Witness Association" },
            { description: "American Telemedicine Association" },
          ]}
        />
        <p className="mt-8 text-center text-purple-800 font-bold">
          FOR COMPLETE CURRICULUM VITAE, PLEASE CONTACT DR. KARDONG
        </p>
      </div>
    </>
  )
}
