import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/common/Button'
import VideoBackground from '@/components/common/VideoBackground'
import { getSponsors } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Oxford University Racing - Formula Student Team',
  description: 'Welcome to Oxford University Racing, the University of Oxford\'s official team for the Formula Student racing competition.',
}

export default function HomePage() {
  const sponsors = getSponsors()

  return (
    <>
      {/* Hero Section with Video Background */}
      <VideoBackground
        videoId="9KrlCkwmILc"
        className="min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Large Logo - Centered and Prominent */}
            <div className="flex items-center justify-center h-screen">
              <Image
                src="/images/general_assets/OUR+new+logo+white+on+transparent.png"
                alt="Oxford University Racing"
                width={600}
                height={300}
                className="mx-auto drop-shadow-2xl"
                priority
              />
            </div>

            {/* Scroll down indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6 text-white/70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* What is Oxford Uni Racing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <Image
                src="/images/general/IMG_1004.JPG"
                alt="Oxford University Racing team with their Formula Student car"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-8 text-oxford-blue text-center">What is Oxford Uni Racing?</h2>
              <div className="text-lg text-gray-600 space-y-6 text-center">
                <p>
                  The proving ground for the next generation of world class engineers, Formula Student is an
                  internationally renowned student motorsport competition. Student teams from around
                  the world compete to design and build a winning race car.
                </p>
                <p className="font-semibold text-oxford-blue">
                  Established in 2018 and made up of over 100 students, Oxford University Racing (OUR) is the
                  official Formula Student team of the University of Oxford.
                </p>
                <div className="pt-6">
                  <Button asChild>
                    <Link href="/team" className="inline-block">
                      MEET THE TEAM
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University of Oxford Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - Content */}
            <div className="order-1">
              <h2 className="text-4xl font-bold mb-8 text-oxford-blue text-center">University of Oxford</h2>
              <div className="text-lg text-gray-600 space-y-6 text-center">
                <p>
                  The OUR team consists of students from across the University of Oxford. We are proud
                  to be supported by the University's world-leading Department of Engineering Science,
                  which you can learn more about via the link below.
                </p>
                <p>
                  Please note that visits to our workshop at the department are by appointment only -
                  kindly use the contact tab to arrange.
                </p>
                <div className="pt-6">
                  <Button asChild>
                    <Link href="https://www.eng.ox.ac.uk/" className="inline-block" target="_blank" rel="noopener noreferrer">
                      ENGINEERING AT OXFORD
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="order-2">
              <Image
                src="/images/general/301375251_415386697249278_5876784168922633401_n.jpg"
                alt="Oxford University Department of Engineering Science building"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
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