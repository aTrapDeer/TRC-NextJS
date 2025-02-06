import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Building2, Landmark, CircuitBoard, Factory, ShieldCheck, Network } from 'lucide-react'
import content from '@/app/content/sitecontent.json'

export default function Industries() {
  const { industriesPage } = content
  
  // Icon mapping
  const IconComponents = {
    Building2,
    Landmark,
    CircuitBoard,
    Factory,
    ShieldCheck,
    Network
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            {industriesPage.hero.title}
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {industriesPage.hero.description}
          </p>
        </div>

        {/* Main Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {industriesPage.industries.map((industry) => {
            const IndustryIcon = IconComponents[industry.icon]
            return (
              <Card key={industry.title} className="bg-white dark:bg-gray-800">
                <CardHeader>
                  <IndustryIcon className="h-12 w-12 text-indigo-600 mb-4" />
                  <CardTitle>{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {industry.features.map((feature) => {
                      const FeatureIcon = IconComponents[feature.icon]
                      return (
                        <li key={feature.text} className="flex items-start">
                          <FeatureIcon className="h-5 w-5 text-indigo-600 mr-3 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-300">{feature.text}</span>
                        </li>
                      )
                    })}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Industry Expertise Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 mb-24">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            {industriesPage.expertise.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {industriesPage.expertise.understanding.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {industriesPage.expertise.understanding.description}
              </p>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {industriesPage.expertise.understanding.highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {industriesPage.expertise.understanding.highlight.description}
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {industriesPage.expertise.differentiators.title}
              </h3>
              <ul className="space-y-4">
                {industriesPage.expertise.differentiators.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-700 rounded-2xl mb-24">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">{industriesPage.cta.title.line1}</span>
              <span className="block">{industriesPage.cta.title.line2}</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              {industriesPage.cta.description}
            </p>
            <a
              href={industriesPage.cta.button.url}
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
            >
              {industriesPage.cta.button.label}
            </a>
          </div>
        </div>
      </main>
    </div>
  )
} 