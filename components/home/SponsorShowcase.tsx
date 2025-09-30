import Link from 'next/link'
import Image from 'next/image'
import SectionTitle from '@/components/common/SectionTitle'
import Button from '@/components/common/Button'
import { Sponsor } from '@/lib/types'

interface SponsorShowcaseProps {
  sponsors: Sponsor[]
}

export default function SponsorShowcase({ sponsors }: SponsorShowcaseProps) {
  // Show only the first 8 sponsors on the home page
  const displaySponsors = sponsors.slice(0, 8)

  if (sponsors.length === 0) {
    return (
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <SectionTitle
              title="Our Partners"
              subtitle="We're proud to work with outstanding organizations who support our mission."
              centered
            />
          </div>
          <div className="text-center bg-white rounded-lg p-12">
            <p className="text-gray-500 mb-8">Partner logos will appear here once added through the CMS</p>
            <Button asChild>
              <Link href="/contact">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <SectionTitle
            title="Our Partners"
            subtitle="We're proud to work with these outstanding organizations who support our mission."
            centered
          />
        </div>

        <div className="space-y-16 mb-12">
          {displaySponsors.map((sponsor, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={sponsor.slug}
                className="border-b border-gray-200 pb-12 last:border-0 last:pb-0"
              >
                <div className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    {sponsor.website ? (
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="relative w-52 h-28 bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
                          <Image
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            fill
                            sizes="(max-width: 768px) 100vw, 208px"
                            className="object-contain"
                          />
                        </div>
                      </a>
                    ) : (
                      <div className="relative w-52 h-28 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          fill
                          sizes="(max-width: 768px) 100vw, 208px"
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-oxford-blue mb-3">{sponsor.name}</h3>
                    {sponsor.description && (
                      <div className="text-gray-600 text-base prose max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: sponsor.description }} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Interested in partnering with Oxford University Racing?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild>
                <Link href="/sponsors">View All Partners</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}