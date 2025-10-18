import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Activity, DollarSign, TrendingUp, LogOut, Shield } from "lucide-react";
import Layout from "@/components/Layout";

const DashboardAdmin = () => {
  const users = [
    { id: "001", name: "Alex Martinez", role: "Client", status: "Active", joined: "Jan 2, 2025" },
    { id: "002", name: "Dr. Sarah Johnson", role: "Therapist", status: "Active", joined: "Dec 15, 2024" },
    { id: "003", name: "Jordan Kim", role: "Client", status: "Active", joined: "Jan 5, 2025" },
    { id: "004", name: "Sam Parker", role: "Client", status: "Active", joined: "Jan 8, 2025" },
    { id: "005", name: "Dr. Emily Rodriguez", role: "Therapist", status: "Active", joined: "Dec 20, 2024" },
  ];

  const systemStats = [
    { label: "Total Users", value: "3,456", icon: Users, color: "text-blue-500" },
    { label: "Active Sessions", value: "89", icon: Activity, color: "text-green-500" },
    { label: "Revenue (MTD)", value: "$45.2K", icon: DollarSign, color: "text-primary" },
    { label: "Growth", value: "+18%", icon: TrendingUp, color: "text-accent" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-2">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">System overview and user management</p>
          </div>
          <Link to="/login">
            <Button variant="outline" className="gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </Link>
        </div>

        {/* System Overview Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="font-heading font-bold text-3xl">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Health */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="font-semibold">System Status</span>
              </div>
              <p className="text-2xl font-bold text-green-500">Operational</p>
              <p className="text-sm text-muted-foreground mt-1">All systems running smoothly</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <Activity className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">Server Load</span>
              </div>
              <p className="text-2xl font-bold text-blue-500">42%</p>
              <p className="text-sm text-muted-foreground mt-1">Within normal parameters</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="font-semibold">Uptime</span>
              </div>
              <p className="text-2xl font-bold text-accent">99.98%</p>
              <p className="text-sm text-muted-foreground mt-1">Last 30 days</p>
            </CardContent>
          </Card>
        </div>

        {/* User Management Table */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              User Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">User ID</th>
                    <th className="text-left p-3 font-semibold">Name</th>
                    <th className="text-left p-3 font-semibold">Role</th>
                    <th className="text-left p-3 font-semibold">Status</th>
                    <th className="text-left p-3 font-semibold">Joined</th>
                    <th className="text-left p-3 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-3 font-mono text-sm">{user.id}</td>
                      <td className="p-3 font-medium">{user.name}</td>
                      <td className="p-3">
                        <span
                          className={`px-3 py-1 text-xs rounded-full ${
                            user.role === "Therapist"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          {user.status}
                        </span>
                      </td>
                      <td className="p-3 text-sm text-muted-foreground">{user.joined}</td>
                      <td className="p-3">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-6">
              <p className="text-sm text-muted-foreground">Showing 5 of 3,456 users</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-3 text-primary" />
              <h3 className="font-heading font-semibold text-lg mb-2">Add New User</h3>
              <p className="text-sm text-muted-foreground">Create client or therapist account</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Activity className="w-12 h-12 mx-auto mb-3 text-accent" />
              <h3 className="font-heading font-semibold text-lg mb-2">System Logs</h3>
              <p className="text-sm text-muted-foreground">View recent system activity</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 mx-auto mb-3 text-green-500" />
              <h3 className="font-heading font-semibold text-lg mb-2">Security Settings</h3>
              <p className="text-sm text-muted-foreground">Manage security and permissions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardAdmin;
