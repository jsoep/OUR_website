import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-oxford-blue">
      <div className="container-custom flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="h-12 w-24 flex items-center justify-center">
            {/* Fallback to PNG with proper styling */}
            <div className="relative h-10 w-20">
              <Image
                src="/images/general_assets/OUR+new+logo+white+on+transparent.png"
                alt="Oxford University Racing"
                fill
                className="object-contain [background:transparent] [mix-blend-mode:normal]"
                priority
                style={{
                  backgroundColor: 'transparent',
                  mixBlendMode: 'normal'
                }}
              />
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <Navigation />

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="bg-white text-oxford-blue hover:bg-gray-100 px-4 py-2 rounded text-sm font-medium transition-colors"
          >
            Join the Team
          </Link>
        </div>
      </div>
    </header>
  )
}