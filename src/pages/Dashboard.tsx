import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Monitor, Smartphone, Tablet, MapPin, Calendar, Trash2, LogOut, Settings, Shield } from "lucide-react";

const Dashboard = () => {
  const [sessions] = useState([
    {
      id: "1",
      device: "Chrome on Windows",
      location: "New York, US",
      ip: "192.168.1.1",
      lastActive: "2 minutes ago",
      current: true,
      icon: Monitor
    },
    {
      id: "2", 
      device: "Safari on iPhone",
      location: "New York, US",
      ip: "192.168.1.2",
      lastActive: "1 hour ago",
      current: false,
      icon: Smartphone
    },
    {
      id: "3",
      device: "Chrome on iPad",
      location: "Boston, US", 
      ip: "192.168.1.3",
      lastActive: "1 day ago",
      current: false,
      icon: Tablet
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">Manage your account and security settings</p>
          </div>
          <Button variant="outline" className="gap-2">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
                  <Monitor className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{sessions.length}</div>
                  <p className="text-xs text-muted-foreground">Across all devices</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Last Login</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2m ago</div>
                  <p className="text-xs text-muted-foreground">From current device</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Security Score</CardTitle>
                  <Shield className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <p className="text-xs text-muted-foreground">Excellent security</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest account activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: "Signed in", time: "2 minutes ago", device: "Chrome on Windows" },
                    { action: "Password changed", time: "3 days ago", device: "Chrome on Windows" },
                    { action: "New session started", time: "1 week ago", device: "Safari on iPhone" }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-muted-foreground">{activity.device}</p>
                      </div>
                      <span className="text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sessions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Sessions</CardTitle>
                <CardDescription>Manage your active sessions across different devices</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Device</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>IP Address</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sessions.map((session) => (
                      <TableRow key={session.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <session.icon className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{session.device}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span>{session.location}</span>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{session.ip}</TableCell>
                        <TableCell>{session.lastActive}</TableCell>
                        <TableCell>
                          {session.current ? (
                            <Badge variant="default">Current</Badge>
                          ) : (
                            <Badge variant="secondary">Active</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          {!session.current && (
                            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4">
                  <Button variant="destructive" className="gap-2">
                    <Trash2 className="h-4 w-4" />
                    Terminate All Other Sessions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Password Settings
                  </CardTitle>
                  <CardDescription>Manage your password and authentication</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Change Password</Button>
                  <Button variant="outline" className="w-full">Enable Two-Factor Authentication</Button>
                  <div className="text-sm text-muted-foreground">
                    Last changed: 3 days ago
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Connected Accounts
                  </CardTitle>
                  <CardDescription>Manage social login providers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { provider: "Google", connected: true },
                      { provider: "GitHub", connected: false },
                      { provider: "Apple", connected: false }
                    ].map((account) => (
                      <div key={account.provider} className="flex items-center justify-between">
                        <span className="font-medium">{account.provider}</span>
                        {account.connected ? (
                          <Button variant="destructive" size="sm">Disconnect</Button>
                        ) : (
                          <Button variant="outline" size="sm">Connect</Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;