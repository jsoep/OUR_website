import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getTeamMembers, getTeamMembersBySubteam } from '@/lib/content'
import SectionTitle from '@/components/common/SectionTitle'

export const metadata: Metadata = {
  title: 'Meet the Team',
  description: 'Meet the talented individuals behind Oxford University Racing.',
}

// Helper component to display team member cards
function TeamMemberCards({ members, maxMembers = 3 }: { members: any[], maxMembers?: number }) {
  const displayMembers = members.slice(0, maxMembers)


  if (displayMembers.length === 0) {
    return (
      <div className="text-center bg-gray-50 rounded-lg p-8 text-gray-500">
        Team member information will appear here once added through the CMS
      </div>
    )
  }

  return (
    <div className="flex justify-center mb-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl">
        {displayMembers.map((member) => (
          <div key={member.slug} className="border border-gray-300 bg-white rounded-lg shadow-sm p-4">
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
  )
}

export default function TeamPage() {
  const teamMembers = getTeamMembers()

  // Get members for each subteam
  const leadershipMembers = getTeamMembersBySubteam('leadership')
  const bodyworkMembers = getTeamMembersBySubteam('bodywork and aerodynamics')
  const coolingMembers = getTeamMembersBySubteam('cooling')
  const chassisMembers = getTeamMembersBySubteam('chassis')
  const powertrainMembers = getTeamMembersBySubteam('powertrain')
  const batteryMembers = getTeamMembersBySubteam('battery')
  const simulationsMembers = getTeamMembersBySubteam('simulations')
  const electronicsMembers = getTeamMembersBySubteam('electronics')
  const wheelAssemblyMembers = getTeamMembersBySubteam('wheel assembly')
  const operationsMembers = getTeamMembersBySubteam('operations')

  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6 text-oxford-blue">MEET THE TEAM</h1>
          <p className="text-xl text-gray-600 mb-4">
            Oxford University Racing is a <strong>100% student-run</strong> organization with over <strong>100 students</strong> from across the University of Oxford.
          </p>
          <p className="text-lg text-gray-600">
            We are divided into specialized sub-teams, each focused on different aspects of designing and building our Formula Student race car.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Leadership Team</h2>
            <Link
              href="/team/leadership"
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Leadership Team is responsible for the strategic direction of the project, ensuring that all sub-teams work together cohesively to deliver an exceptional race car. They manage resources, coordinate with sponsors, and represent the team at events.
          </p>
          <TeamMemberCards members={leadershipMembers} maxMembers={6} />
          <div className="text-sm text-gray-500">
            {leadershipMembers.length} total members
          </div>
        </div>

        {/* Bodywork and Aerodynamics Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Bodywork and Aerodynamics Team</h2>
            <Link
              href="/team/bodywork-and-aerodynamics"
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Bodywork and Aerodynamics Team focuses on optimizing airflow around the car. They use computational fluid dynamics (CFD) tools like Ansys to design bodywork that maximizes downforce while minimizing drag, creating a sleek and efficient race car profile.
          </p>
          <TeamMemberCards members={bodyworkMembers} />
          <div className="text-sm text-gray-500">
            {bodyworkMembers.length} total members
          </div>
        </div>

        {/* Cooling Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Cooling Team</h2>
            <Link
              href="/team/cooling"
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Cooling Team develops thermal management systems to maintain optimal operating temperatures for all vehicle components. They design radiators, cooling ducts, and airflow paths to ensure reliable performance in all conditions.
          </p>
          <TeamMemberCards members={coolingMembers} />
          <div className="text-sm text-gray-500">
            {coolingMembers.length} total members
          </div>
        </div>

        {/* Battery Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Battery Team</h2>
            <Link
              href="/team/battery"
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Battery Team is responsible for the design and integration of our high-performance battery pack. They work with industry-leading tools like MATLAB and Simulink to model cell behavior, develop battery management systems, and ensure safety and reliability in all conditions.
          </p>
          <TeamMemberCards members={batteryMembers} />
          <div className="text-sm text-gray-500">
            {batteryMembers.length} total members
          </div>
        </div>

        {/* Chassis Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Chassis Team</h2>
            <Link
              href="/team/chassis"
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Chassis Team designs the structural backbone of our race car. Using SOLIDWORKS and other CAD tools, they create a lightweight yet incredibly strong frame that meets all Formula Student safety requirements while providing the foundation for all other systems.
          </p>
          <TeamMemberCards members={chassisMembers} />
          <div className="text-sm text-gray-500">
            {chassisMembers.length} total members
          </div>
        </div>

        {/* Powertrain Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Powertrain Team</h2>
            <Link
              href="/team/powertrain"
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Powertrain Team is responsible for maximizing the performance of our electric motor and drivetrain. They work on motor control, inverter design, and gear ratios to ensure our car delivers exceptional acceleration and top speed on the track.
          </p>
          <TeamMemberCards members={powertrainMembers} />
          <div className="text-sm text-gray-500">
            {powertrainMembers.length} total members
          </div>
        </div>

        {/* Simulations Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Simulations Team</h2>
            <Link
              href="/team/simulations"
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Simulations Team uses advanced modeling and simulation tools to predict vehicle performance before physical testing. They analyze lap times, cornering speeds, and energy consumption to optimize our design decisions and validate our engineering approaches.
          </p>
          <TeamMemberCards members={simulationsMembers} />
          <div className="text-sm text-gray-500">
            {simulationsMembers.length} total members
          </div>
        </div>

        {/* Electronics & Software Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Electronics & Software Team</h2>
            <Link
              href="/team/electronics"
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Electronics & Software Team develops the control systems that bring our car to life. From the dashboard display to the motor controller, they write code and design circuits that monitor and manage every aspect of vehicle performance in real-time.
          </p>
          <TeamMemberCards members={electronicsMembers} />
          <div className="text-sm text-gray-500">
            {electronicsMembers.length} total members
          </div>
        </div>

        {/* Wheel Assembly Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Wheel Assembly Team</h2>
            <Link
              href="/team/wheel-assembly"
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Wheel Assembly Team is responsible for the design and integration of our suspension and steering systems. They work closely with the Chassis Team to ensure optimal handling characteristics and implement innovative solutions for wheel mounting and alignment.
          </p>
          <TeamMemberCards members={wheelAssemblyMembers} />
          <div className="text-sm text-gray-500">
            {wheelAssemblyMembers.length} total members
          </div>
        </div>

        {/* Operations Team */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-oxford-blue">Operations Team</h2>
            <Link
              href="/team/operations"
              className="text-oxford-blue hover:text-accent-red transition-colors"
            >
              View all members →
            </Link>
          </div>
          <p className="text-gray-600 mb-6">
            The Operations Team manages the logistics and manufacturing processes that keep our project running smoothly. From sourcing materials to organizing build schedules, they ensure that every team has what they need to succeed and that our car is built to the highest quality standards.
          </p>
          <TeamMemberCards members={operationsMembers} />
          <div className="text-sm text-gray-500">
            {operationsMembers.length} total members
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            We're always looking for passionate students to join our team. Whether you're interested in engineering, business, or operations, there's a place for you at Oxford University Racing.
          </p>
          <Link
            href="/contact"
            className="btn-primary px-8 py-3 text-lg font-medium"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  )
}