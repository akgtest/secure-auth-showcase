import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Users, Shield, Activity, AlertTriangle, Search, MoreHorizontal, Ban, UserCheck, Monitor } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const AdminDashboard = () => {
  const [users] = useState([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      status: "active",
      lastLogin: "2 hours ago",
      sessions: 2,
      createdAt: "2024-01-15"
    },
    {
      id: "2", 
      name: "Jane Smith",
      email: "jane@example.com",
      status: "suspended",
      lastLogin: "1 week ago",
      sessions: 0,
      createdAt: "2024-01-10"
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@example.com", 
      status: "active",
      lastLogin: "5 minutes ago",
      sessions: 3,
      createdAt: "2024-01-20"
    }
  ]);

  const [sessions] = useState([
    {
      id: "s1",
      userId: "1",
      userName: "John Doe",
      device: "Chrome on Windows",
      location: "New York, US",
      ip: "192.168.1.1",
      lastActive: "2 minutes ago",
      duration: "2 hours"
    },
    {
      id: "s2",
      userId: "1", 
      userName: "John Doe",
      device: "Safari on iPhone",
      location: "New York, US",
      ip: "192.168.1.2",
      lastActive: "1 hour ago",
      duration: "3 hours"
    },
    {
      id: "s3",
      userId: "3",
      userName: "Mike Johnson",
      device: "Chrome on Mac",
      location: "San Francisco, US",
      ip: "10.0.0.1",
      lastActive: "5 minutes ago",
      duration: "45 minutes"
    }
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="default">Active</Badge>;
      case "suspended":
        return <Badge variant="destructive">Suspended</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">Manage users, sessions, and system security</p>
          </div>
          <Button variant="outline">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Security Alerts
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
              <p className="text-xs text-muted-foreground">+2 from last week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{sessions.length}</div>
              <p className="text-xs text-muted-foreground">Across all users</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security Score</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">98%</div>
              <p className="text-xs text-muted-foreground">System wide</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">3</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>View and manage all user accounts</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search users..." className="pl-8 w-[200px]" />
                    </div>
                    <Button>Add User</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Sessions</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-1">
                            <Monitor className="h-3 w-3 text-muted-foreground" />
                            <span>{user.sessions}</span>
                          </div>
                        </TableCell>
                        <TableCell>{user.createdAt}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem className="gap-2">
                                <UserCheck className="h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2">
                                <Monitor className="h-4 w-4" />
                                View Sessions
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2 text-destructive">
                                <Ban className="h-4 w-4" />
                                Suspend User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Session Management</CardTitle>
                    <CardDescription>Monitor and manage all active user sessions</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search sessions..." className="pl-8 w-[200px]" />
                    </div>
                    <Button variant="destructive">Terminate All</Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Device</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>IP Address</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sessions.map((session) => (
                      <TableRow key={session.id}>
                        <TableCell className="font-medium">{session.userName}</TableCell>
                        <TableCell>{session.device}</TableCell>
                        <TableCell>{session.location}</TableCell>
                        <TableCell className="font-mono text-sm">{session.ip}</TableCell>
                        <TableCell>{session.duration}</TableCell>
                        <TableCell>{session.lastActive}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem className="gap-2">
                                <Activity className="h-4 w-4" />
                                View Activity
                              </DropdownMenuItem>
                              <DropdownMenuItem className="gap-2 text-destructive">
                                <Ban className="h-4 w-4" />
                                Terminate Session
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Security Events</CardTitle>
                  <CardDescription>Recent security activities and alerts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { event: "Failed login attempt", user: "unknown", time: "2 minutes ago", severity: "high" },
                      { event: "Password changed", user: "john@example.com", time: "1 hour ago", severity: "low" },
                      { event: "New device login", user: "mike@example.com", time: "3 hours ago", severity: "medium" },
                      { event: "Account locked", user: "suspicious@evil.com", time: "1 day ago", severity: "high" }
                    ].map((event, index) => (
                      <div key={index} className="flex items-center space-x-4 text-sm">
                        <div className={`w-2 h-2 rounded-full ${
                          event.severity === "high" ? "bg-red-500" :
                          event.severity === "medium" ? "bg-yellow-500" : "bg-green-500"
                        }`} />
                        <div className="flex-1">
                          <p className="font-medium">{event.event}</p>
                          <p className="text-muted-foreground">{event.user}</p>
                        </div>
                        <span className="text-muted-foreground">{event.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>Configure security policies and settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Configure Password Policy</Button>
                  <Button variant="outline" className="w-full">Session Timeout Settings</Button>
                  <Button variant="outline" className="w-full">Two-Factor Auth Settings</Button>
                  <Button variant="outline" className="w-full">IP Whitelist Management</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;