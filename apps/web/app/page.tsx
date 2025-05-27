import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Component-Based Development Demo</h1>
        <p className="text-xl text-gray-600">
          A showcase of building a modern web application using Next.js and shadcn/ui components
          in a monorepo structure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

        {/* Content Div */}

        <Card>
          <CardHeader>
            <CardTitle>Task Management Dashboard</CardTitle>
            <CardDescription>
              A feature-rich dashboard showcasing task management with filtering and status tracking.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Demonstrates the use of Cards, Tabs, Badges, and other UI components to create
              an interactive task management interface.
            </p>
            <Link href="/dashboard">
              <Button>View Dashboard</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
            <CardDescription>
              A comprehensive user profile page with settings and information display.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Showcases Avatar, Form components, and Tabs for organizing user information
              and settings.
            </p>
            <Link href="/profile">
              <Button>View Profile</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Analytics</CardTitle>
            <CardDescription>
              Interactive data visualization and project metrics dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Features various chart types, statistics cards, and detailed analytics views
              for project monitoring.
            </p>
            <Link href="/analytics">
              <Button>View Analytics</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Collaboration</CardTitle>
            <CardDescription>
              Real-time team interaction and communication features.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Includes team member status, activity feed, discussions, and messaging
              components for effective collaboration.
            </p>
            <Link href="/team">
              <Button>View Team</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
