import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getSponsors } from '@/lib/content'
import SectionTitle from '@/components/common/SectionTitle'

export const metadata: Metadata = {
  title: 'OUR Sponsors',
  description: 'Meet our valued partners and sponsors who support Oxford University Racing.',
}

export default function SponsorsPage() {
  const sponsors = getSponsors()

  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6 text-oxford-blue">OUR SPONSORS</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            <strong>When we win, our sponsors win.</strong>
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            It is thanks to the ongoing support from our sponsors that the Oxford University Racing
            team exists as a cutting-edge technical and creative project space for future leading
            engineers. Their resources allow us to set ourselves apart from the crowd, and we very
            much consider them an essential part of our team.
          </p>
        </div>

        {/* Sponsors Listing */}
        <div className="space-y-16 mb-20">
          {sponsors.length > 0 ? (
            sponsors.map((sponsor) => (
              <div key={sponsor.slug} className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    {sponsor.website ? (
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="relative w-48 h-24 bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
                          <Image
                            src={sponsor.logo}
                            alt={`${sponsor.name} logo`}
                            fill
                            sizes="(max-width: 768px) 100vw, 192px"
                            className="object-contain"
                          />
                        </div>
                      </a>
                    ) : (
                      <div className="relative w-48 h-24 bg-white rounded-lg shadow-sm border border-gray-100 p-4">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          fill
                          sizes="(max-width: 768px) 100vw, 192px"
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-oxford-blue mb-4">{sponsor.name}</h3>
                    <div className="prose max-w-none text-gray-600 mb-4">
                      {sponsor.description && (
                        <div dangerouslySetInnerHTML={{ __html: sponsor.description }} />
                      )}
                    </div>
                    {sponsor.website && (
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-oxford-blue hover:text-accent-red font-medium transition-colors"
                      >
                        Visit Website
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center bg-gray-50 rounded-lg p-12">
              <p className="text-gray-500 text-lg">
                Partner information will appear here once added through the CMS
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6">Interested in becoming a Sponsor?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our mission to develop the next generation of engineers while gaining valuable exposure
            to top talent at one of the world's leading universities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3 text-lg font-medium"
            >
              Become a Sponsor
            </Link>
            <a
              href="mailto:our@eng.ox.ac.uk"
              className="btn-outline px-8 py-3 text-lg font-medium"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}