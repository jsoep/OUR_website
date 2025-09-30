import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getTeamMembersBySubteam } from '@/lib/content'
import SectionTitle from '@/components/common/SectionTitle'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'

export const metadata: Metadata = {
  title: 'Chassis Team',
  description: 'Meet the chassis team behind Oxford University Racing.',
}

export default function ChassisTeamPage() {
  const teamMembers = getTeamMembersBySubteam('chassis')

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
            title="Chassis Team"
            subtitle="Frame design and structural engineering"
          />
        </div>

        <div className="flex justify-center">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {teamMembers.map((member) => (
              <Card key={member.slug} className="group hover:shadow-lg transition-shadow">
                {member.image && (
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                  <div className="text-sm text-gray-500">
                    {member.course} • Year {member.year}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-600 text-sm line-clamp-3">
                    {member.bio}
                  </div>
                </CardContent>
              </Card>
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