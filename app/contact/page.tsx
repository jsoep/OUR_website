import { Metadata } from 'next'
import SectionTitle from '@/components/common/SectionTitle'
import ContactForm from '@/components/contact/ContactForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Oxford University Racing for partnerships, recruitment, or general inquiries.',
}

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
        <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle
            title="Get in Touch"
            subtitle="We are always happy to hear from you"
            centered
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>General Enquiries</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">For general questions and information</p>
                <a
                  href="mailto:our@eng.ox.ac.uk"
                  className="text-accent-red hover:underline font-medium"
                >
                  our@eng.ox.ac.uk
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Join the Team</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Team admissions mainly during weeks 0-1 of Michaelmas Term</p>
                <a
                  href="mailto:our@eng.ox.ac.uk"
                  className="text-accent-red hover:underline font-medium"
                >
                  our@eng.ox.ac.uk
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-gray-600">
                  <p>University of Oxford</p>
                  <p>Department of Engineering Science</p>
                  <p>Parks Road</p>
                  <p>Oxford OX1 3PJ</p>
                  <p>United Kingdom</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Collaborate Section */}
        <div className="mt-16 text-center">
          <Card className="bg-oxford-blue text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Collaborate</h3>
              <p className="text-lg mb-6">Interested in sponsoring or collaborating with Oxford University Racing?</p>
              <a
                href="/sponsors"
                className="inline-block bg-accent-red text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Become a Sponsor
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Connect - Social Media */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-oxford-blue mb-6">Connect</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com/oxforduniracing"
              className="text-gray-600 hover:text-accent-red transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/oxforduniracing"
              className="text-gray-600 hover:text-accent-red transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM12 18.15c-3.404 0-6.15-2.746-6.15-6.15s2.746-6.15 6.15-6.15 6.15 2.746 6.15 6.15-2.746 6.15-6.15 6.15zm6.857-13.006a1.43 1.43 0 11-2.86 0 1.43 1.43 0 012.86 0zm-2.156 2.853c-.855-.191-1.79-.3-2.701-.3-4.09 0-7.404 3.315-7.404 7.404 0 .911.109 1.846.3 2.701.855.191 1.79.3 2.701.3 4.09 0 7.404-3.315 7.404-7.404 0-.911-.109-1.846-.3-2.701z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/oxforduniracing"
              className="text-gray-600 hover:text-accent-red transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}