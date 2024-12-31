import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Building2, Landmark, CircuitBoard, Factory, ShieldCheck, Network } from 'lucide-react'

export default function Industries() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Industries We Serve
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Specialized expertise across key sectors of the modern economy
          </p>
        </div>

        {/* Main Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Banking Industry */}
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <Landmark className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle>Banking & Financial Services</CardTitle>
              <CardDescription>Navigating digital transformation and regulatory challenges in the financial sector.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Security system implementation</span>
                </li>
                <li className="flex items-start">
                  <Network className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Core banking systems modernization</span>
                </li>
                <li className="flex items-start">
                  <CircuitBoard className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Digital banking transformation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Technology Industry */}
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CircuitBoard className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle>Technology Companies</CardTitle>
              <CardDescription>Accelerating innovation and growth in fast-paced tech environments.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Network className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Cloud infrastructure optimization</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Cybersecurity enhancement</span>
                </li>
                <li className="flex items-start">
                  <Building2 className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Scalable architecture design</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Enterprise Industry */}
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <Building2 className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle>Enterprise Organizations</CardTitle>
              <CardDescription>Optimizing operations and strategy for large-scale organizations.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Factory className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Process automation</span>
                </li>
                <li className="flex items-start">
                  <Network className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Digital workplace solutions</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">Enterprise security</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Industry Expertise Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 mb-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Our Industry Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Comprehensive Understanding
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                With decades of experience across multiple industries, we bring deep domain knowledge and best practices to every engagement. Our team's expertise spans the complete spectrum of enterprise technology and management consulting.
              </p>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Industry-Specific Solutions</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We understand that each industry faces unique challenges. Our solutions are tailored to address specific industry requirements while leveraging cross-sector innovations.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Key Differentiators</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">40+ years of combined industry experience</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Specialized expertise in banking and technology</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">Proven track record of successful implementations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-700 rounded-2xl mb-24">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to transform your organization?</span>
              <span className="block">Let's discuss your industry needs.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              Our industry experts are ready to help you navigate the complexities of your sector.
            </p>
            <a
              href="/contact"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </main>
    </div>
  )
} 