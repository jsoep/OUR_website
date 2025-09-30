import { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/common/Button'

export const metadata: Metadata = {
  title: 'About Oxford University Racing',
  description: 'Oxford University Racing is the University of Oxford\'s official team for the Formula Student racing competition.',
}

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-oxford-blue mb-6">About Oxford University Racing</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Oxford University Racing is the University of Oxford's official team for the Formula Student racing competition.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Mission */}
          <section className="mb-16">
            <div className="bg-white rounded-lg p-8 shadow-sm border">
              <h2 className="text-2xl font-bold text-oxford-blue mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Oxford University Racing comprises around 100 students from across the university.
                Our goal is to research, design, develop, build and test an electric race car.
              </p>
              <p className="text-lg text-gray-600">
                We are entirely student-run and supported by Oxford's Engineering Department and our sponsors.
                Our members come from diverse academic backgrounds including engineering, mathematics, arts, and humanities.
              </p>
            </div>
          </section>

          {/* Team Characteristics */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-8 text-center">What Makes Us Special</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-oxford-blue mb-4">Diverse & Inclusive</h3>
                <p className="text-gray-600">
                  Our team includes students from across the university - not just engineers.
                  We organize into technical and creative sub-teams, bringing together diverse
                  perspectives and skills.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-oxford-blue mb-4">Learning Environment</h3>
                <p className="text-gray-600">
                  We create an open and supportive environment for all team members to learn
                  and work in. Every member has the opportunity to develop new skills and
                  contribute meaningfully to the project.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-oxford-blue mb-4">Technical Excellence</h3>
                <p className="text-gray-600">
                  Motivated by technical challenge, we strive for excellence in competition.
                  Our focus on innovation and engineering excellence drives everything we do.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-oxford-blue mb-4">University Spirit</h3>
                <p className="text-gray-600">
                  We represent the University of Oxford's innovative spirit in international
                  competition, showcasing the caliber of engineering talent at Oxford.
                </p>
              </div>
            </div>
          </section>

          {/* Formula Student Context */}
          <section className="mb-16">
            <div className="bg-oxford-blue rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Formula Student Competition</h2>
              <p className="text-lg mb-4">
                Formula Student is an internationally renowned student motorsport competition that serves as
                "the proving ground for the next generation of world class engineers."
              </p>
              <p className="text-lg">
                Teams from universities around the world design, build, and race single-seater cars,
                competing not just on track performance but also on engineering design, cost analysis,
                and business planning.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-oxford-blue mb-8 text-center">Our Key Principles</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-oxford-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <h3 className="text-xl font-semibold text-oxford-blue mb-2">Learning</h3>
                <p className="text-gray-600">
                  Every project is an opportunity to learn and grow, both technically and personally.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-oxford-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <h3 className="text-xl font-semibold text-oxford-blue mb-2">Teamwork</h3>
                <p className="text-gray-600">
                  Collaboration across disciplines and backgrounds is essential to our success.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-oxford-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">E</span>
                </div>
                <h3 className="text-xl font-semibold text-oxford-blue mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We push technical boundaries and strive for excellence in everything we do.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Contact Section */}
        <section className="bg-gray-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6">Get Involved</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in collaborations, sponsorships, or joining our team?
            We're always looking for passionate individuals and partners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:our@eng.ox.ac.uk">our@eng.ox.ac.uk</a>
            </Button>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            Follow us on social media: Facebook | Instagram | Twitter
          </div>
        </section>
      </div>
    </div>
  )
}