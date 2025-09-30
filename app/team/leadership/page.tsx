import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getTeamMembersBySubteam } from '@/lib/content'
import SectionTitle from '@/components/common/SectionTitle'

export const metadata: Metadata = {
  title: 'Leadership Team',
  description: 'Meet the leadership team behind Oxford University Racing.',
}

export default function LeadershipTeamPage() {
  const teamMembers = getTeamMembersBySubteam('leadership')

  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="mb-12">
          <Link 
            href="/team" 
            className="inline-flex items-center text-oxford-blue hover:text-accent-red mb-6 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Team
          </Link>
          <SectionTitle
            title="Leadership Team"
            subtitle="Strategic direction and team management"
          />
        </div>

        <div className="flex justify-center">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {teamMembers.map((member) => (
              <div key={member.slug} className="border border-gray-300 bg-white rounded-lg shadow-sm p-4 group hover:shadow-lg transition-shadow">
                {member.image && (
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <div className="text-sm text-gray-500">
                    {member.course} • Year {member.year}
                  </div>
                  <div className="text-gray-600 text-sm mt-2">
                    {member.bio}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {teamMembers.length === 0 && (
          <div className="text-center bg-gray-50 rounded-lg p-12">
            <p className="text-gray-500">
              Team member information will appear here once added through the CMS
            </p>
          </div>
        )}
      </div>
    </div>
  )
}