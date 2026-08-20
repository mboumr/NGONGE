
import { Building, FileText, HardHat, LucideIcon, Mail, Phone, ShieldCheck, Shirt, Star, Truck, Smartphone, Code, BrainCircuit, Cloud } from "lucide-react"

export const capabilities = [
    { 
        title: 'Transportation & Logistics', 
        href: '/capabilities/transportation-logistics',
        description: 'Secure and efficient management of freight, supply chain, and fleet operations.',
        icon: 'Truck' as const,
    },
    { 
        title: 'Facilities Support', 
        href: '/capabilities/facilities-support',
        description: 'Comprehensive maintenance for operational readiness and safety of government installations.',
        icon: 'Building' as const,
    },
    { 
        title: 'Laundry & Linen Services', 
        href: '/capabilities/laundry-linen-services',
        description: 'Specialized laundry services that meet the high standards of federal facilities.',
        icon: 'Shirt' as const,
    },
    {
        title: 'Mobile Application Development',
        href: '/capabilities/mobile-app-development',
        description: 'Custom mobile apps for Android & iOS to support federal agency missions.',
        icon: 'Smartphone' as const,
    },
    {
        title: 'Web Application Development',
        href: '/capabilities/web-app-development',
        description: 'Developing secure and scalable web applications and software.',
        icon: 'Code' as const,
    },
    {
        title: 'Digital Marketing & Gen AI',
        href: '/capabilities/digital-marketing-gen-ai',
        description: 'Leveraging Generative AI for advanced digital marketing solutions.',
        icon: 'BrainCircuit' as const,
    },
    {
        title: 'Cloud Services',
        href: '/capabilities/cloud-services',
        description: 'Secure, scalable, and compliant cloud solutions for federal agencies.',
        icon: 'Cloud' as const,
    }
];

export const allCapabilities = [
    { 
        title: 'Transportation & Logistics', 
        href: '/capabilities/transportation-logistics',
        description: 'Secure and efficient management of freight, supply chain, and fleet operations.',
        icon: 'Truck' as const,
    },
    { 
        title: 'Facilities Support', 
        href: '/capabilities/facilities-support',
        description: 'Comprehensive maintenance for operational readiness and safety of government installations.',
        icon: 'Building' as const,
    },
    { 
        title: 'Laundry & Linen Services', 
        href: '/capabilities/laundry-linen-services',
        description: 'Specialized laundry services that meet the high standards of federal facilities.',
        icon: 'Shirt' as const,
    },
    { 
        title: 'Janitorial Services', 
        href: '/capabilities/janitorial-services',
        description: 'Maintaining clean, safe, and healthy environments for federal facilities.',
        icon: 'Building' as const,
    },
    { 
        title: 'Industrial Laundry Services', 
        href: '/capabilities/industrial-laundry-services',
        description: 'High-volume laundry services for industrial and commercial needs.',
        icon: 'Shirt' as const,
    },
    { 
        title: 'Linen Supply', 
        href: '/capabilities/linen-supply',
        description: 'Reliable linen supply and inventory management for various institutions.',
        icon: 'Shirt' as const,
    },
    { 
        title: 'Drycleaning and Laundry Services', 
        href: '/capabilities/drycleaning-laundry-services',
        description: 'Professional drycleaning and laundry for non-coin-operated facilities.',
        icon: 'Shirt' as const,
    },
    { 
        title: 'Charter Bus Industry', 
        href: '/capabilities/charter-bus-industry',
        description: 'Charter bus services for personnel and group transportation.',
        icon: 'Truck' as const,
    },
    {
        title: 'Specialized Freight',
        href: '/capabilities/specialized-freight',
        description: 'Specialized freight transport for household and office goods.',
        icon: 'Truck' as const,
    },
    {
        title: 'Commercial & Industrial Equipment Leasing',
        href: '/capabilities/equipment-leasing',
        description: 'Rental and leasing of other commercial and industrial machinery and equipment.',
        icon: 'HardHat' as const,
    },
    {
        title: 'Mobile Application Development',
        href: '/capabilities/mobile-app-development',
        description: 'Custom mobile apps for Android & iOS to support federal agency missions.',
        icon: 'Smartphone' as const,
    },
    {
        title: 'Web Application Development',
        href: '/capabilities/web-app-development',
        description: 'Developing secure and scalable web applications and software.',
        icon: 'Code' as const,
    },
    {
        title: 'Digital Marketing & Gen AI',
        href: '/capabilities/digital-marketing-gen-ai',
        description: 'Leveraging Generative AI for advanced digital marketing solutions.',
        icon: 'BrainCircuit' as const,
    },
    {
        title: 'Cloud Services',
        href: '/capabilities/cloud-services',
        description: 'Secure, scalable, and compliant cloud solutions for federal agencies.',
        icon: 'Cloud' as const,
    }
];

export const industries = [
    {
        title: 'Federal Government',
        description: 'Providing mission-critical support services to a wide range of federal agencies and departments.',
        icon: 'Building' as const,
        href: '/industries/federal-government'
    },
    {
        title: 'Department of Defense',
        description: 'Delivering logistics, facility management, and support services to military bases and defense installations.',
        icon: 'ShieldCheck' as const,
        href: '/industries/department-of-defense'
    },
    {
        title: 'Health Care',
        description: 'Offering specialized linen, laundry, and facility services for federal healthcare systems like the VHA.',
        icon: 'Star' as const,
        href: '/industries/health-care'
    },
    {
        title: 'Manufacturing',
        description: 'Providing industrial laundry and equipment leasing to support manufacturing operations.',
        icon: 'Truck' as const,
        href: '/industries/manufacturing'
    },
    {
        title: 'Finance & Banking',
        description: 'Secure janitorial and facility support for financial institutions.',
        icon: 'Building' as const,
        href: '/industries/finance-banking'
    },
    {
        title: 'Automotive',
        description: 'Specialized freight and industrial laundry services for the automotive sector.',
        icon: 'Truck' as const,
        href: '/industries/automotive'
    },
    {
        title: 'Media and Advertising',
        description: 'Equipment leasing and logistics for media production and advertising events.',
        icon: 'HardHat' as const,
        href: '/industries/media-and-advertising'
    },
    {
        title: 'Commercial Sector',
        description: 'Extending our industrial laundry, equipment leasing, and janitorial expertise to commercial clients.',
        icon: 'Truck' as const,
        href: '/industries/commercial-sector'
    }
];

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/capabilities',
    children: allCapabilities
  },
  { 
    name: 'Industries', 
    href: '/industries',
    children: industries
  },
  { name: 'Projects', href: '/past-performance' },
  { name: 'Contact', href: '/contact' },
];

export const trustIndicators = [
    {
        name: 'Aiforce',
        imageUrl: '/images/Air_Force.png',
        alt: 'Airforce Logo'
    },
    {
        name: 'Navy',
        imageUrl: '/images/Navy.png',
        alt: 'Navy Logo'
    },
    {
        name: 'Army',
        imageUrl: '/images/Army.png',
        alt: 'Army Logo'
    },
    {
        name: 'Department_of_the_Interio',
        imageUrl: '/images/Department_of_the_Interio.png',
        alt: 'Department_of_the_Interio Logo'
    },
];

export const caseStudies = [
  {
    client: 'Department of Defense',
    category: 'Transportation & Logistics',
    problem: 'Needed to streamline the delivery of sensitive equipment to multiple bases across the country under a tight deadline.',
    solution: 'Deployed a dedicated logistics team with advanced tracking technology to coordinate multi-modal transport and ensure real-time visibility.',
    result: 'Achieved 100% on-time delivery with zero security incidents, resulting in a 15% reduction in transportation costs for the agency.',
    imageId: 'case-study-1',
  },
  {
    client: 'General Services Administration',
    category: 'Facilities Support',
    problem: 'A large federal building required a complete overhaul of its HVAC and electrical systems without disrupting daily operations.',
    solution: 'Implemented a phased approach to renovations, working during off-hours and weekends. Used modular components to speed up installation.',
    result: 'Completed the project 2 months ahead of schedule and 5% under budget, with a 30% increase in energy efficiency.',
    imageId: 'case-study-2',
  },
  {
    client: 'Veterans Health Administration',
    category: 'Laundry & Linen Services',
    problem: 'A major VA hospital was facing inconsistent linen availability and quality, impacting patient care.',
    solution: 'Established an on-site management program with a robust inventory system and quality control checks at every stage.',
    result: 'Improved linen availability to 99.8% and exceeded all hygienic standards, leading to higher patient satisfaction scores.',
    imageId: 'case-study-3',
  },
    {
    client: 'Department of Homeland Security',
    category: 'Transportation & Logistics',
    problem: 'Required urgent and secure transport of disaster relief supplies to a remote area following a natural disaster.',
    solution: 'Leveraged our rapid response network and chartered specialized aircraft to deliver supplies within 12 hours of the request.',
    result: 'Enabled critical aid to reach affected populations 24 hours faster than anticipated, supporting life-saving operations.',
    imageId: 'case-study-4',
  },
];

export const ngonjeCaseStudies = [
  {
    client: "U.S. Department of the Air Force · F.E. Warren AFB",
    contractNumber: "FA822725P0018",
    projectTitle: "FE Warren Protective Clothing",
    duration: "June 2025 – June 2030",
    contractValue: "$50,000 FFP",
    vehicle: "Firm-fixed-price purchase order",
    location: "F.E. Warren AFB, WY",
    description: "Laundry and maintenance of protective clothing and shop garments used by missile maintenance teams, in accordance with Air Force hygiene and quality-control standards.",
    poc: "Rachel Wright, Contracting Officer",
    imageId: "project-air-force",
    group: "current" as const,
  },
  {
    client: "Defence Logistic Agency · Mechanicsburg",
    contractNumber: "SP4703-25-P-0034",
    projectTitle: "FR Uniform and Shop Rag Service",
    duration: "October 2025 – October 2030",
    contractValue: "$96,000 FFP",
    vehicle: "Firm-fixed-price purchase order",
    location: "DLA, Mechanicsburg, PA",
    description: "Rental, cleaning, and replacement of protective uniforms and industrial shop towels for electrical maintenance personnel, with scheduled pickup and delivery.",
    poc: "Benjamin Maxwell, Contracting Officer",
    imageId: "project-army",
    group: "current" as const,
  },
  {
    client: "U.S. Department of the Interior · Bureau of Reclamation",
    contractNumber: "140R3025P0070",
    projectTitle: "Rental and Laundry Services for Yuma Area Office",
    duration: "October 2025 – September 2030",
    contractValue: "$78,000 FFP",
    vehicle: "Firm-fixed-price purchase order",
    location: "Yuma Area Office, AZ",
    description: "Professional laundering of maintenance and field staff garments at the Bureau’s Yuma facility, with timely delivery under federal performance standards.",
    poc: "Jenna Hall, Contracting Officer",
    imageId: "project-interior",
    group: "current" as const,
  },
  {
    client: "U.S. Air Force · 1 SOCONS / AFSOC",
    contractNumber: "FA441725A0015",
    projectTitle: "Shop Rag and Uniform Cleaning — Hurlburt Field",
    duration: "30 Sep 2025 – 27 Sep 2030",
    contractValue: "$250,000 BPA ceiling · $25,000 call limit",
    vehicle: "Blanket Purchase Agreement",
    location: "Hurlburt Field, FL (multiple units)",
    description: "Professionally cleaned shop rags and maintenance uniforms for 1 SOLRS, 1 SOMXS, 1 SOFSS, and 823 RHS. Ordering period with GPC calls by authorized unit callers.",
    poc: "Capt Rowan Thom, Contracting Officer",
    imageId: "project-hurlburt",
    group: "current" as const,
  },
  {
    client: "U.S. Navy · NSWC Philadelphia / NFPC",
    contractNumber: "N6449825D0013",
    projectTitle: "Coverall Laundry IDIQ — Naval Foundry and Propeller Center",
    duration: "Awarded 24 Sep 2025",
    contractValue: "$138,269 IDIQ maximum",
    vehicle: "IDIQ · firm-fixed-price orders",
    location: "NSWC Philadelphia, PA",
    description: "Weekly coverall laundering and repair services for the Naval Foundry and Propeller Center, billed for actual services received and accepted.",
    poc: "Dustin Bordelon, Contracting Officer",
    imageId: "project-navy-coverall",
    group: "current" as const,
  },
  {
    client: "Washington Army National Guard · USPFO",
    contractNumber: "W912K326PA023",
    projectTitle: "G4 Coverall, Rag, and Mat Laundry — Eight Sites",
    duration: "15 Aug 2026 – 14 Aug 2027",
    contractValue: "$42,278 FFP",
    vehicle: "Firm-fixed-price purchase order",
    location: "FMS, CSMS, UTES, MATES, and SMM sites across Washington",
    description: "Pickup and drop-off laundry for coveralls, rags, and mats supporting WA ARNG G4 maintenance shops at eight locations, including JBLM, Yakima, and Camp Murray.",
    poc: "Dennis Jutras, Contracting Officer",
    imageId: "project-wa-arng",
    group: "current" as const,
  },
  {
    client: "U.S. Air Force · MacDill AFB 6 CONS",
    contractNumber: "FA481426P0029",
    projectTitle: "Vehicle Management Coveralls — 6 LRS",
    duration: "Awarded 9 Jun 2026 (12-month base plus options)",
    contractValue: "$8,167 base year",
    vehicle: "Firm-fixed-price PO with options",
    location: "MacDill AFB, FL",
    description: "Uniform lease and laundering for about 25 vehicle-management technicians: shirts, pants, jackets, and at least 50 red shop rags per month, including inspection, repair, and replacement.",
    poc: "David L. Lovett, Contracting Officer",
    imageId: "project-macdill",
    group: "current" as const,
  },
  {
    client: "Defence Logistic Agency · DLA Distribution Oklahoma City",
    contractNumber: "SP3300-26-P-0269",
    projectTitle: "FR Coverall Rental and Laundry — Tinker AFB",
    duration: "Awarded 23 Jan 2026",
    contractValue: "$3,120 FFP",
    vehicle: "Firm-fixed-price purchase order",
    location: "Tinker AFB, Oklahoma City, OK",
    description: "Weekly rental and FR-safe laundering of 44 fire-resistant coveralls for welders and electricians, with hamper service, barcoding, and replacement of unserviceable garments.",
    poc: "Erik Smith, Contracting Officer",
    imageId: "project-dla-tinker",
    group: "current" as const,
  },
  {
    client: "Rhode Island Army National Guard · USPFO",
    contractNumber: "W912LD26PA001",
    projectTitle: "Shop Towel Rental and Laundering — Camp Fogarty CSMS",
    duration: "Awarded 5 Feb 2026 (base year plus four option years)",
    contractValue: "$3,352 base year",
    vehicle: "Firm-fixed-price PO with options",
    location: "CSMS Bldg 305, Camp Fogarty, East Greenwich, RI",
    description: "Weekly delivery and exchange of 500 shop towels for RIARNG Combined Support Maintenance Shop vehicle, generator, and weapons maintainers.",
    poc: "Ryan Lawton, Contracting Officer",
    imageId: "project-ri-arng",
    group: "current" as const,
  },
  {
    client: "U.S. Department of Transportation · FHWA Western Federal Lands",
    contractNumber: "69056726P000005",
    projectTitle: "Materials Testing Lab Laundry and Mat Service",
    duration: "Awarded 30 Jan 2026",
    contractValue: "Firm-fixed-price purchase order",
    vehicle: "Firm-fixed-price purchase order",
    location: "FHWA Materials Laboratory, Vancouver, WA",
    description: "Floor mat and laundry services for the Western Federal Lands Highway Division materials testing laboratory.",
    poc: "Doug Taylor, Contracting Officer",
    imageId: "project-dot-vancouver",
    group: "current" as const,
  },
  {
    client: "U.S. Air Force Academy · 10 CONS",
    contractNumber: "FA700025A0010",
    projectTitle: "Charter Bus BPA — 10 LRS Ground Transportation",
    duration: "15 Mar 2025 – 14 Mar 2030",
    contractValue: "$500,000 BPA ceiling · $25,000 call limit",
    vehicle: "Blanket Purchase Agreement",
    location: "U.S. Air Force Academy, CO",
    description: "Bus and coach charter services for USAFA Ground Transportation, including local academy runs, airport transfers, and over-the-road missions, on authorized caller demand.",
    poc: "Susan Ulma, Contracting Officer",
    imageId: "project-usafa-bus",
    group: "logistics" as const,
  },
  {
    client: "U.S. Air Force · 11 CONS / Joint Base Anacostia-Bolling",
    contractNumber: "FA706026A0003",
    projectTitle: "Emergency Bottled Water BPA — 11 FSS",
    duration: "Awarded 12 Feb 2026",
    contractValue: "$3,000,000 estimated max orders · $25,000 call limit",
    vehicle: "Blanket Purchase Agreement",
    location: "Joint Base Anacostia-Bolling, Washington, DC",
    description: "On-call delivery of bottled water cases for 11th Force Support Squadron emergency and contingency requirements.",
    poc: "SSgt Christian A. Barnett, Contracting Officer",
    imageId: "project-jbab-water",
    group: "logistics" as const,
  },
  {
    client: "U.S. Army · Edwards AFB",
    contractNumber: "W911SA25PA111",
    projectTitle: "Shower and Laundry Trailers — Edwards AFB",
    duration: "May 2025 (completed)",
    contractValue: "$99,000 FFP",
    vehicle: "Firm-fixed-price purchase order",
    location: "Edwards AFB, CA",
    description: "Provided shower and laundry trailer support for Edwards Air Force Base.",
    poc: "Breanna Huff, Contracting Officer",
    imageId: "project-edwards-trailers",
    group: "completed" as const,
  },
  {
    client: "U.S. Army · Fort Irwin",
    contractNumber: "W911SA25PA128",
    projectTitle: "Gray Water Removal Services — Fort Irwin",
    duration: "May 2025 – Jun 2025 (completed)",
    contractValue: "$55,000 FFP",
    vehicle: "Firm-fixed-price purchase order",
    location: "Fort Irwin, CA",
    description: "Gray water removal services in support of operations at Fort Irwin.",
    poc: "Melissa Guthmiller, Contracting Officer",
    imageId: "project-irwin-graywater",
    group: "completed" as const,
  },
  {
    client: "U.S. Marine Corps · MCAS Beaufort",
    contractNumber: "M6700125P1113",
    projectTitle: "Twin XL Mattresses — MCAS Beaufort Fire Department",
    duration: "Sep 2025 – Oct 2025 (completed)",
    contractValue: "$54,683 FFP",
    vehicle: "Firm-fixed-price purchase order",
    location: "MCAS Beaufort, SC",
    description: "Supply of hybrid Twin XL mattresses for the MCAS Beaufort Fire Department, including gel-infused foam and pocketed-coil construction.",
    poc: "Megan Diaz, Contracting Officer",
    imageId: "project-beaufort-mattress",
    group: "completed" as const,
  },
];

export const vestisCaseStudies = [
    {
        client: "U.S. Department of Defense",
        contractNumber: "W912LA-19-P-0039",
        projectTitle: "Coverall Laundry Services – Department of Defense",
        duration: "September 2019 – September 2023",
        contractValue: "$430,000",
        description: "Provided industrial laundry services for coveralls and uniforms used by defense personnel across multiple bases, maintaining quality and safety standards throughout the contract term.",
        poc: "Uriel Ramirez, Contracting Officer",
        imageId: "project-dod-1",
    },
    {
        client: "U.S. Department of Defense",
        contractNumber: "W912LP20P0003",
        projectTitle: "Industrial Coverall Rental & Laundry – Department of Defense",
        duration: "April 2020 – March 2022",
        contractValue: "$191,000",
        description: "Managed the rental and cleaning of coveralls and safety garments for logistics and maintenance units. Ensured environmental compliance and consistent bi-weekly delivery schedules.",
        poc: "Jennifer Burbage, Contracting Officer",
        imageId: "project-dod-2",
    },
    {
        client: "U.S. Department of Agriculture (FSIS)",
        contractNumber: "F6Z1LMV9DZY3",
        projectTitle: "Lab Coat Rental & Servicing – Food Safety and Inspection Service",
        duration: "December 2024 – March 2029",
        contractValue: "$12,000",
        description: "Provided lab coat rental, cleaning, and replacement services to FSIS laboratories. Maintained sterilization and contamination-free standards essential for food safety operations.",
        poc: "K. Petty, Contracting Officer",
        imageId: "project-usda",
    }
];


export const certifications = [
  {
    name: '8(a) Business Development Program',
    icon: Star,
    description: 'Certified by the SBA, this program helps small, disadvantaged businesses compete in the marketplace.',
    downloadUrl: '#',
  },
  // {
  //   name: 'HUBZone Certified',
  //   icon: Building,
  //   description: 'The Historically Underutilized Business Zones (HUBZone) program fuels small business growth in historically underutilized business zones.',
  //   downloadUrl: '#',
  // },
  // {
  //   name: 'ISO 9001:2015',
  //   icon: ShieldCheck,
  //   description: 'An international standard that specifies requirements for a quality management system (QMS).',
  //   downloadUrl: '#',
  // },
  {
    name: 'OSHA Compliance',
    icon: HardHat,
    description: 'Committed to maintaining the highest standards of workplace safety and health as outlined by OSHA.',
    downloadUrl: '#',
  },
];


export const leadershipTeam = [
  {
    name: 'Roland Mboumien',
    title: 'Founder, President & Owner — NGONGE LLC',
    bio: 'Roland Mboumien is an accomplished Chemical Engineer and operations leader with nearly two decades of experience in engineering, process improvement, and corporate operations.Before founding NGONGE, Roland served in leadership positions at Pfizer Inc., where he led continuous improvement initiatives, global labeling system launches, and compliance-driven validation projects. His engineering precision and management expertise shaped his philosophy: operational excellence is not accidental—it’s engineered.At Walmart, Roland managed large-scale retail operations, leading 400 employees in a $108 million enterprise, further refining his ability to drive performance through teamwork, structure, and accountability.This unique blend of technical expertise and business leadership now defines NGONGE’s success in delivering safe, efficient, and compliant solutions to federal and commercial clients.',
    imageId: 'leader-1',
  },
  {
    name: 'Elvis Wianda',
    title: 'Technology Strategy & Automation Advisor',
    bio: 'Elvis Wianda helps businesses identify and integrate the right technologies to scale efficiently. With expertise in AI tools, website hosting, and process automation, he guides teams in selecting cost-effective solutions that enhance productivity and streamline operations. Elvis bridges strategy and execution — transforming business needs into smart, automated systems that work..',
    imageId: 'leader-2',
  },
  {
    name: 'Brian Scott',
    title: 'Cybersecurity Strategy & Risk Management Advisor',
    bio: 'Brian Scott is an experienced Cyber Information Assurance Engineer with 10+ years in federal defense cybersecurity. Skilled in NIST 800-53, RMF, FISMA, and continuous monitoring, he leads security assessments, accreditations, and vulnerability management to ensure systems achieve and maintain ATO compliance.',
    imageId: 'leader-3',
  },
];

export const companyTimeline = [
    { year: '2024', event: 'NGONGE LLC founded to provide federal and local government services.' },
    // { year: '2017', event: 'Awarded first federal contract with the General Services Administration (GSA).' },
    // { year: '2019', event: 'Achieved 8(a) and HUBZone certifications from the Small Business Administration (SBA).' },
    // { year: '2021', event: 'Expanded service offerings to include comprehensive facilities support and laundry services.' },
    // { year: '2023', event: 'Received ISO 9001:2015 certification for quality management.' },
];

export const blogPosts = [
  {
    title: 'The Future of Federal Logistics: Trends to Watch',
    date: '2024-05-15',
    author: 'John Doe',
    excerpt: 'As technology evolves, so does the landscape of federal logistics. Here are the key trends government agencies and contractors need to be aware of...',
    slug: 'future-of-federal-logistics',
    imageId: 'blog-post-1',
  },
  {
    title: 'Navigating Compliance in Government Contracting',
    date: '2024-04-22',
    author: 'Jane Smith',
    excerpt: 'Compliance is the backbone of successful government contracting. This post breaks down the essentials of maintaining good standing...',
    slug: 'navigating-compliance',
    imageId: 'blog-post-2',
  },
  {
    title: 'Why IT Modernization is Critical for Mission Success',
    date: '2024-03-10',
    author: 'Samuel Green',
    excerpt: 'Outdated IT infrastructure can pose significant risks. Learn how strategic IT modernization can enhance security and efficiency for federal agencies...',
    slug: 'it-modernization-critical',
    imageId: 'blog-post-3',
  },
];

export const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "roland.mboumien@ngonge.com",
        href: "mailto:roland.mboumien@ngonge.com"
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+1 (252) 382-3639",
        href: "tel:+13362091982"
    }
];

export const companyCodes = {
    uied: "ETYLDMH63LM9",
    duns: "119302889",
    ein: "99-3636389",
    cage: "9Y1F2"
}

export const resources = [
  {
    title: 'Transportation Capability Statement',
    description: ' Our operations combine precision scheduling, fleet coordination,passenger logistics & more..',
    downloadUrl: '/documents/NGONGE_Transportation_Capability_Statement.pdf',
    icon: FileText
  },
  {
    title: 'Laundry Capability Statement',
    description: 'Our logistics-based service model ensures reliable pickup, laundering, and delivery pickups.',
    downloadUrl: '/documents/NGONGE_Laundry_Capability_Statement.pdf',
    icon: Truck
  },
  {
    title: 'Facilities Support Capability Statement',
    description: 'We deliver mission-ready, environmentally compliant services that support base operations, exercises, and contingency deployments. ',
    downloadUrl: '/documents/NGONGE_Facilities_Support_Brochure.pdf',
    icon: Building
  }
];

    