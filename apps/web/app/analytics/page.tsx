import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { Progress } from "@workspace/ui/components/progress"
import { Badge } from "@workspace/ui/components/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@workspace/ui/components/table"

const projectStats = {
  totalTasks: 156,
  completedTasks: 89,
  inProgressTasks: 45,
  pendingTasks: 22,
  teamMembers: 8,
  projectHealth: 85,
}

const taskTrendData = [
  { month: "Jan", completed: 12, inProgress: 8, pending: 5 },
  { month: "Feb", completed: 15, inProgress: 10, pending: 3 },
  { month: "Mar", completed: 20, inProgress: 12, pending: 4 },
  { month: "Apr", completed: 18, inProgress: 8, pending: 2 },
  { month: "May", completed: 24, inProgress: 6, pending: 1 },
]

const teamPerformanceData = [
  { name: "John D.", completed: 24, efficiency: 92 },
  { name: "Sarah M.", completed: 18, efficiency: 88 },
  { name: "Mike R.", completed: 15, efficiency: 85 },
  { name: "Lisa K.", completed: 20, efficiency: 90 },
  { name: "Tom B.", completed: 12, efficiency: 82 },
]

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Project Analytics</h1>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectStats.totalTasks}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{projectStats.completedTasks}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{projectStats.inProgressTasks}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Project Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{projectStats.projectHealth}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Task Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Task Progress</CardTitle>
            <CardDescription>Overall project completion status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Completed Tasks</span>
                  <span className="text-sm text-green-600">{projectStats.completedTasks}</span>
                </div>
                <Progress value={(projectStats.completedTasks / projectStats.totalTasks) * 100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">In Progress</span>
                  <span className="text-sm text-blue-600">{projectStats.inProgressTasks}</span>
                </div>
                <Progress value={(projectStats.inProgressTasks / projectStats.totalTasks) * 100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Pending</span>
                  <span className="text-sm text-orange-600">{projectStats.pendingTasks}</span>
                </div>
                <Progress value={(projectStats.pendingTasks / projectStats.totalTasks) * 100} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Performance</CardTitle>
            <CardDescription>Individual team member metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Tasks</TableHead>
                  <TableHead>Efficiency</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {teamPerformanceData.map((member) => (
                  <TableRow key={member.name}>
                    <TableCell>{member.name}</TableCell>
                    <TableCell>{member.completed}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={member.efficiency} className="h-2 w-20" />
                        <span className="text-sm">{member.efficiency}%</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Detailed Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-4">Task Distribution</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Completed</span>
                        <Badge variant="default" className="bg-green-500">{projectStats.completedTasks}</Badge>
                      </div>
                      <Progress value={(projectStats.completedTasks / projectStats.totalTasks) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">In Progress</span>
                        <Badge variant="secondary">{projectStats.inProgressTasks}</Badge>
                      </div>
                      <Progress value={(projectStats.inProgressTasks / projectStats.totalTasks) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Pending</span>
                        <Badge variant="outline">{projectStats.pendingTasks}</Badge>
                      </div>
                      <Progress value={(projectStats.pendingTasks / projectStats.totalTasks) * 100} className="h-2" />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-4">Project Health Trend</h3>
                  <div className="space-y-4">
                    {[
                      { month: "Jan", health: 75 },
                      { month: "Feb", health: 78 },
                      { month: "Mar", health: 82 },
                      { month: "Apr", health: 85 },
                      { month: "May", health: 85 },
                    ].map((item) => (
                      <div key={item.month}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">{item.month}</span>
                          <span className="text-sm font-medium">{item.health}%</span>
                        </div>
                        <Progress value={item.health} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-4">Team Efficiency</h3>
                  <Table>
                    <TableBody>
                      {teamPerformanceData.map((member) => (
                        <TableRow key={member.name}>
                          <TableCell className="font-medium">{member.name}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress value={member.efficiency} className="h-2 w-20" />
                              <span className="text-sm">{member.efficiency}%</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="team">
              <div className="space-y-4">
                <p className="text-gray-600">
                  Detailed team performance metrics and individual contributions.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="timeline">
              <div className="space-y-4">
                <p className="text-gray-600">
                  Project timeline and milestone tracking information.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
} 