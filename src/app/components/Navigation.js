"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import content from '@/app/content/sitecontent.json'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { navigation } = content

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-700">{navigation.logo}</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            {navigation.menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button variant="default" asChild>
              <a href={navigation.consultationButton.url} target="_blank" rel="noopener noreferrer">
                {navigation.consultationButton.label}
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } sm:hidden absolute top-16 left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out z-50`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-3 py-2">
            <Button variant="default" className="w-full" asChild onClick={() => setIsOpen(false)}>
              <a href={navigation.consultationButton.url} target="_blank" rel="noopener noreferrer">
                {navigation.consultationButton.label}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

