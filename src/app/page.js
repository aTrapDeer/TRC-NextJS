import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Shield, Zap, Users, Building2 } from 'lucide-react'
import content from '@/app/content/sitecontent.json'

export default function Home() {
  const { homepage } = content

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">{homepage.hero.title.line1}</span>
              <span className="block text-indigo-600">{homepage.hero.title.line2}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {homepage.hero.description}
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md">
                <Button size="lg" asChild>
                  <a href={homepage.hero.buttons.primary.url} target="_blank" rel="noopener noreferrer">
                    {homepage.hero.buttons.primary.label}
                  </a>
                </Button>
              </div>
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                <Button variant="outline" size="lg" asChild>
                  <a href={homepage.hero.buttons.secondary.url}>
                    {homepage.hero.buttons.secondary.label}
                  </a>
                </Button>
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
              {homepage.services.title}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {homepage.services.subtitle}
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {homepage.services.items.map((service, index) => {
                const icons = [<Zap key="zap" />, <Shield key="shield" />, <Building2 key="building" />, <Users key="users" />]
                return (
                  <Card key={service.title}>
                    <CardHeader>
                      <div className="h-8 w-8 text-indigo-600 mb-2">
                        {icons[index]}
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {service.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {homepage.industries.title}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {homepage.industries.subtitle}
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {homepage.industries.items.map((industry) => (
                <Card key={industry.title}>
                  <CardHeader>
                    <CardTitle>{industry.title}</CardTitle>
                    <CardDescription>{industry.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">{homepage.cta.title.line1}</span>
            <span className="block">{homepage.cta.title.line2}</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            {homepage.cta.description}
          </p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <a href={homepage.cta.button.url} target="_blank" rel="noopener noreferrer">
              {homepage.cta.button.label}
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

