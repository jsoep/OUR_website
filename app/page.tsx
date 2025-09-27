import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/common/Button'
import { getSponsors } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Oxford University Racing - Formula Student Team',
  description: 'Welcome to Oxford University Racing, the University of Oxford\'s official team for the Formula Student racing competition.',
}

export default function HomePage() {
  const sponsors = getSponsors()

  return (
    <>
      {/* Hero Section - Simplified to match live site */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Large Logo */}
            <div className="mb-12">
              <Image
                src="/images/general_assets/OUR+new+logo+white+on+transparent.png"
                alt="Oxford University Racing"
                width={300}
                height={150}
                className="mx-auto"
                priority
              />
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-oxford-blue sm:text-5xl mb-6">
              Welcome to Oxford University Racing
            </h1>
            <p className="text-lg leading-8 text-gray-600 sm:text-xl">
              The University of Oxford's official team for the Formula Student racing competition
            </p>

            <div className="mt-10">
              <Button asChild size="lg" className="bg-oxford-blue hover:bg-oxford-royal text-white">
                <Link href="/team">MEET the team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Oxford Uni Racing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-oxford-blue">What is Oxford Uni Racing?</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                The proving ground for the next generation of world class engineers, Formula Student
                is an internationally renowned student motorsport competition. Student teams from around
                the world compete to design and build a winning race car.
              </p>
              <p>
                Established in 2018 and made up of over 100 students, Oxford University Racing (OUR)
                is the official Formula Student team of the University of Oxford.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* University of Oxford Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-oxford-blue">University of Oxford</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                The OUR team consists of students from across the University of Oxford. We are proud
                to be supported by the University's world-leading Department of Engineering Science,
                which you can learn more about via the link below.
              </p>
              <p>
                Please note that visits to our workshop at the department are by appointment only -
                kindly use the contact tab to arrange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet our Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-oxford-blue">Meet our Partners</h2>
            <div className="prose prose-lg text-gray-600 mb-12">
              <p>
                It is thanks to the ongoing support from our sponsors that the Oxford University Racing
                team exists as a cutting-edge technical and creative project space for future leading
                engineers. Their resources allow us to set ourselves apart from the crowd, and we very
                much consider them an essential part of our team.
              </p>
            </div>

            {sponsors.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {sponsors.slice(0, 8).map((sponsor) => (
                  <div key={sponsor.slug} className="flex items-center justify-center p-4">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={120}
                      height={64}
                      className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-lg">
                <p className="text-gray-500">Partner logos will appear here once added through the CMS</p>
              </div>
            )}

            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/sponsors">View All Partners</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}