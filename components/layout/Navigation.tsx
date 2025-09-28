'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { NavigationItem } from '@/lib/types'

const navigationItems: NavigationItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Team',
    href: '/team',
    children: [
      { title: 'Overview', href: '/team' },
      { title: 'Leadership', href: '/team/leadership' },
      { title: 'Aerodynamics', href: '/team/aerodynamics' },
      { title: 'Chassis', href: '/team/chassis' },
      { title: 'Powertrain', href: '/team/powertrain' },
      { title: 'Electronics', href: '/team/electronics' },
      { title: 'Operations', href: '/team/operations' },
    ],
  },
  {
    title: 'News',
    href: '/news',
  },
  {
    title: 'Sponsors',
    href: '/sponsors',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  const handleMouseEnter = (itemTitle: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setOpenDropdown(itemTitle)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150) // 150ms delay to allow mouse movement to dropdown
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <div
            key={item.title}
            className="relative"
            onMouseEnter={() => item.children && handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-oxford-peach',
                isActive(item.href)
                  ? 'text-oxford-peach'
                  : 'text-white hover:text-gray-200'
              )}
            >
              {item.title}
              {item.children && (
                <svg
                  className="ml-1 inline h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>

            {/* Dropdown Menu */}
            {item.children && openDropdown === item.title && (
              <div className="absolute left-0 top-full z-50 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                {item.children.map((child) => (
                  <Link
                    key={child.title}
                    href={child.href}
                    className={cn(
                      'block px-4 py-2 text-sm transition-colors hover:bg-gray-50',
                      isActive(child.href)
                        ? 'text-oxford-peach'
                        : 'text-gray-700 hover:text-gray-900'
                    )}
                  >
                    {child.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-oxford-royal hover:text-white"
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-screen bg-white shadow-lg ring-1 ring-black ring-opacity-5 md:hidden">
          <div className="px-2 pb-3 pt-2">
            {navigationItems.map((item) => (
              <div key={item.title}>
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                    isActive(item.href)
                      ? 'bg-oxford-peach text-white'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className={cn(
                          'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                          isActive(child.href)
                            ? 'bg-oxford-peach text-white'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}