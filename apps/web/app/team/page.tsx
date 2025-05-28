import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { Textarea } from "@workspace/ui/components/textarea"
import { Badge } from "@workspace/ui/components/badge"

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Team Lead",
    avatar: "/avatars/john-doe.png",
    status: "online",
    lastActive: "2 min ago",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Developer",
    avatar: "/avatars/sarah-smith.png",
    status: "online",
    lastActive: "5 min ago",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Designer",
    avatar: "/avatars/mike-johnson.png",
    status: "away",
    lastActive: "15 min ago",
  },
  {
    id: 4,
    name: "Lisa Brown",
    role: "Developer",
    avatar: "/avatars/lisa-brown.png",
    status: "offline",
    lastActive: "1 hour ago",
  },
]

const recentActivities = [
  {
    id: 1,
    user: "John Doe",
    action: "completed task",
    target: "Implement authentication",
    time: "2 hours ago",
  },
  {
    id: 2,
    user: "Sarah Smith",
    action: "commented on",
    target: "Design system setup",
    time: "3 hours ago",
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "created task",
    target: "Update UI components",
    time: "4 hours ago",
  },
]

const discussions = [
  {
    id: 1,
    title: "Project Timeline Discussion",
    participants: 5,
    lastMessage: "Let's review the sprint goals",
    time: "1 hour ago",
  },
  {
    id: 2,
    title: "Design System Updates",
    participants: 3,
    lastMessage: "New components are ready for review",
    time: "2 hours ago",
  },
]

export default function TeamPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Team Collaboration</h1>
        <Button>New Discussion</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Team Members */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Active team members and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px]">
              <div className="space-y-4">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{member.name}</p>
                        <Badge
                          variant={
                            member.status === "online"
                              ? "default"
                              : member.status === "away"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {member.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">{member.role}</p>
                      <p className="text-xs text-gray-400">
                        Last active: {member.lastActive}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from team members</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4">
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span>{" "}
                          {activity.action}{" "}
                          <span className="font-medium">{activity.target}</span>
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Discussions */}
          <Card>
            <CardHeader>
              <CardTitle>Discussions</CardTitle>
              <CardDescription>Active team discussions</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="active">
                <TabsList>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="archived">Archived</TabsTrigger>
                </TabsList>
                <TabsContent value="active" className="space-y-4">
                  {discussions.map((discussion) => (
                    <Card key={discussion.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-base">
                            {discussion.title}
                          </CardTitle>
                          <Badge variant="secondary">
                            {discussion.participants} participants
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          {discussion.lastMessage}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {discussion.time}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="archived">
                  <p className="text-sm text-gray-500">
                    No archived discussions found.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Quick Message */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Message</CardTitle>
              <CardDescription>Send a message to the team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Message subject" />
                <Textarea
                  placeholder="Type your message here..."
                  className="min-h-[100px]"
                />
                <div className="flex justify-end">
                  <Button>Send Message</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 