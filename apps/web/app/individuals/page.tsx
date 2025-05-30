"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Team Lead",
    avatar: "/avatars/john-doe.png",
    status: "online",
  },
  {
    id: 2,
    name: "Sarah Smith",
    role: "Developer",
    avatar: "/avatars/sarah-smith.png",
    status: "online",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Designer",
    avatar: "/avatars/mike-johnson.png",
    status: "away",
  },
  {
    id: 4,
    name: "Lisa Brown",
    role: "Developer",
    avatar: "/avatars/lisa-brown.png",
    status: "offline",
  },
]

export default function TeamViewPage() {
  const roles = Array.from(new Set(teamMembers.map((m) => m.role)))

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Team View</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => {
          const members = teamMembers.filter((m) => m.role === role)

          return (
            <Card key={role}>
              <CardHeader>
                <CardTitle className="text-lg">{role}s</CardTitle>
                <CardDescription>
                  {members.length} member{members.length > 1 ? "s" : ""}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {members.map((member) => (
                  <div key={member.id} className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <Badge
                        variant={
                          member.status === "online"
                            ? "default"
                            : member.status === "away"
                            ? "secondary"
                            : "outline"
                        }
                        className="capitalize mt-1"
                      >
                        {member.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
