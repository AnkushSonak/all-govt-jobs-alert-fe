"use client";

import './../../app/globals.css';
import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, Building2, Users, Search, Briefcase, TrendingUp, Bell, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
// import { SEOOptimized } from "@/components/SEOOptimized";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// import { Link } from "react-router-dom";
import Link from 'next/link';
// import './../../../src/index.css';
// import './../../../src/App.css';


export default function JobHomeClient({
  jobs = [],
  featuredJobs = [],
  categories = [],
  structuredData = []
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm) {
      window.location.href = `/jobs?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  const stats = [
    { label: "Active Jobs", value: "2,450+", icon: Briefcase },
    { label: "Departments", value: "150+", icon: Users },
    { label: "States Covered", value: "28", icon: MapPin },
    { label: "Success Rate", value: "85%", icon: TrendingUp }
  ];

  return (
    <>
      
      <div className="min-h-screen bg-gray-50">
        <Header 
          showSearch={true}
          searchTerm= "" //{searchTerm}
          setSearchTerm= {()=>{}}
          onSearch= {()=>{}}//{handleSearch}
        />

        {/* Hero Section - Clean and Minimal */}
        <section className="bg-white py-16 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Job Board for Government Jobs
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Find your next government career opportunity from thousands of job listings across India. Apply to top government positions today.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="bg-white rounded-lg border border-gray-300 p-4 shadow-sm">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="Search government jobs..."
                          value={"searchTerm"}
                          onChange={(e) => {()=>{}} }//setSearchTerm(e.target.value)}
                          className="pl-12 h-12 text-lg border-0 focus:ring-2 focus:ring-blue-500 rounded-lg"
                        />
                      </div>
                    </div>
                    <Button 
                      onClick= {()=> {}} //{handleSearch}
                      className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-medium"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Featured jobs</h2>
              <Link href="/jobs">
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  View all
                </Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {featuredJobs.map((job) => (
                <div key={job?.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            <Link href={`/jobs/${job?.sjob_sluglug}-${job?.id}`} className="hover:text-blue-600">
                              {job?.job_title}
                            </Link>
                          </h3>
                          {job?.isNew && (
                            <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Building2 className="h-4 w-4 mr-1" />
                            {job?.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job?.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {job?.qualification}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {job?.totalPosts} positions
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Link href={`/jobs/${job?.job_slug}-${job?.id}`}>
                        <Button variant="outline" size="sm" className="border-gray-300">
                          View Details
                        </Button>
                      </Link>
                      <a href={job?.sourceUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          Apply
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Jobs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Latest jobs</h2>
              <Link href="/jobs">
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  View all
                </Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {jobs.slice(0, 10).map((job) => (
                <div key={job?.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            <Link href={`/jobs/${job?.job_slug}-${job?.id}`} className="hover:text-blue-600">
                              {job?.title}
                            </Link>
                          </h3>
                          {job?.isNew && (
                            <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Building2 className="h-4 w-4 mr-1" />
                            {job?.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job?.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Deadline: {new Date(job?.applyDeadline).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {job?.totalPosts} positions
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Link href={`/jobs/${job?.slug}-${job?.id}`}>
                        <Button variant="outline" size="sm" className="border-gray-300">
                          View Details
                        </Button>
                      </Link>
                      <a href={job?.official_website} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          Apply
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Browse by Category</h2>
              <p className="text-muted-foreground text-lg">Find jobs in your field of interest</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <Link href={`/categories/${category?.name.toLowerCase()}`} key={index}>
                  <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
                    <div className="text-4xl mb-4">{category?.icon}</div>
                    <h3 className="font-semibold text-foreground mb-2">{category?.name}</h3>
                    <p className="text-muted-foreground text-sm">{category?.count} jobs</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Verified Jobs</h3>
                <p className="text-muted-foreground">All job postings are verified from official government sources and updated daily</p>
              </div>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Bell className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Daily Updates</h3>
                <p className="text-muted-foreground">Get the latest job notifications and deadline reminders delivered to your inbox</p>
              </div>
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Career Growth</h3>
                <p className="text-muted-foreground">Find opportunities that match your qualifications and career aspirations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Bell className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Never Miss a Job Update</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Get the latest government job notifications delivered directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email address" 
                  className="flex-1 h-12 bg-white border-0 rounded-xl text-gray-900"
                />
                <Button className="h-12 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-xl">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
