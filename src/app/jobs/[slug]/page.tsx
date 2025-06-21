import { notFound } from "next/navigation";
import { generateJobPostingStructuredData } from "@/utils/enhancedStructuredData";
import JobDetailClient from "@/components/pages/JobDetailClient";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Params }) {
  const jobId = params.slug.split("-").pop();
  const res = await fetch(`http://localhost:5000/api/admin/jobs/${jobId}`, { cache: "no-store" });

  if (!res.ok) return notFound();

  const job = await res.json();

  return {
    title: `${job.title} - Apply Online | Government Job`,
    description: `Apply for ${job.title} at ${job.department}. ${job.totalPosts} vacancies. Qualification: ${job.qualification}.`,
    alternates: {
      canonical: `https://govjobs-portal.com/jobs/${params.slug}`,
    },
    openGraph: {
      title: job.title,
      description: job.description || "",
      url: `https://govjobs-portal.com/jobs/${params.slug}`,
    },
    other: {
      structuredData: JSON.stringify(generateJobPostingStructuredData({ ...job, slug: params.slug })),
    }
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const jobSlug = params.slug;
  const jobId = jobSlug.split("-").pop(); // e.g. extract 123 from slug-name-123
  const res = await fetch(`http://localhost:5000/api/admin/jobs/${jobId}`, { cache: "no-store" });
  const job = await res.json();

  return <JobDetailClient job={job} slug={jobSlug} />;
}

