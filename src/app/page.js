import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Shield, Zap, Users, Building2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Sharpening Enterprise</span>
              <span className="block text-indigo-600">Technology and Management</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              The Rapier Company provides cutting-edge consulting services for banks, tech companies, and enterprise industries, ensuring your organization stays ahead in the rapidly evolving business landscape.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md">
                <Button size="lg" asChild>
                  <a href="https://outlook.office365.com/book/TheRapierCompanyScheduleaMeeting@TheRapierCompanyLLC.onmicrosoft.com/" target="_blank" rel="noopener noreferrer">
                    Schedule a Consultation
                  </a>
                </Button>
              </div>
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                <Button variant="outline" size="lg">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Comprehensive solutions for modern enterprise challenges.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-indigo-600 mb-2" />
                  <CardTitle>Technology Systems</CardTitle>
                  <CardDescription>Modernize your technology infrastructure for enhanced efficiency and innovation.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Digital Transformation</li>
                    <li>Cloud Migration</li>
                    <li>AI and ML Integration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 text-indigo-600 mb-2" />
                  <CardTitle>Security</CardTitle>
                  <CardDescription>Protect your assets and data with our advanced security solutions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Cybersecurity Audits</li>
                    <li>Threat Detection and Response</li>
                    <li>Compliance Management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Building2 className="h-8 w-8 text-indigo-600 mb-2" />
                  <CardTitle>Management Consulting</CardTitle>
                  <CardDescription>Optimize your organizational structure and processes for peak performance.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Strategic Planning</li>
                    <li>Process Optimization</li>
                    <li>Change Management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-indigo-600 mb-2" />
                  <CardTitle>Hiring Solutions</CardTitle>
                  <CardDescription>Find and retain top talent to drive your organization forward.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Talent Acquisition Strategies</li>
                    <li>Skills Assessment</li>
                    <li>Retention Programs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Industries We Serve
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Tailored solutions for leading sectors in the modern economy.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Banking</CardTitle>
                  <CardDescription>Navigating digital transformation and regulatory challenges in the financial sector.</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technology</CardTitle>
                  <CardDescription>Accelerating innovation and growth in fast-paced tech environments.</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Optimizing operations and strategy for large-scale organizations across industries.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to sharpen your enterprise?</span>
            <span className="block">Start your consultation today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Our experts are ready to help you navigate the complex world of enterprise technology and management.
          </p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <a href="https://outlook.office365.com/book/TheRapierCompanyScheduleaMeeting@TheRapierCompanyLLC.onmicrosoft.com/" target="_blank" rel="noopener noreferrer">
              Schedule a Consultation
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

