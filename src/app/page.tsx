import { MapPin, Users, Briefcase, TrendingUp} from "lucide-react";
import { generateWebsiteStructuredData, generateOrganizationStructuredData } from "@/utils/enhancedStructuredData";
import JobHomeClient from "@/components/pages/JobHomeClient";
import './globals.css'

// app/page.tsx
export async function generateMetadata() {
  return {
    title: "Latest Government Jobs 2025 - GovJobs Portal",
    description: "Find latest government job notifications across India...",
    keywords: ["govt jobs", "sarkari result", "banking jobs", "railway jobs"],
    alternates: {
      canonical: "https://govjobs-portal.com",
    },
    openGraph: {
      title: "GovJobs Portal",
      description: "Search 500+ govt jobs across India.",
      url: "https://govjobs-portal.com",
      siteName: "GovJobs Portal",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function Page() {

const res = await fetch("http://localhost:5000/api/admin/jobs", { next: { revalidate: 60 } });
const data = await res.json();
console.log("Jobs from server : " + JSON.stringify(data, null, 2))
// Adjust based on your real API structure
const jobs = data.jobs || data.data || []; // fallback to [] if undefined
const featuredJobs = jobs.slice(0, 3);

  const categories = [
    { name: "Banking", count: 150, icon: "🏦" },
    { name: "Railways", count: 200, icon: "🚆" },
    { name: "SSC", count: 180, icon: "📚" },
    { name: "UPSC", count: 45, icon: "🏛️" },
    { name: "Healthcare", count: 120, icon: "🏥" },
    { name: "Defense", count: 90, icon: "⚔️" }
  ];
  const stats = [
    { label: "Active Jobs", value: "2,450+", icon: Briefcase },
    { label: "Departments", value: "150+", icon: Users },
    { label: "States Covered", value: "28", icon: MapPin },
    { label: "Success Rate", value: "85%", icon: TrendingUp }
  ];

  const pageTitle = "Latest Government Jobs 2025 - Banking, Railways, SSC, UPSC | GovJobs Portal";
  const pageDescription = "Find latest government job notifications across India. 500+ current openings in Banking, Railways, SSC, UPSC, and State Government jobs with official application links.";
  const keywords = "government jobs 2025, sarkari naukri, banking jobs, railway jobs, SSC jobs, UPSC jobs, latest government vacancy, india government jobs";

  // Enhanced structured data
  const combinedStructuredData = [
    generateWebsiteStructuredData(),
    generateOrganizationStructuredData()
  ];

  return (
    <JobHomeClient
      jobs={jobs}
      featuredJobs={featuredJobs}
      categories={categories}
      structuredData={[
        generateWebsiteStructuredData(),
        generateOrganizationStructuredData()
      ]}
    />
  );
}
