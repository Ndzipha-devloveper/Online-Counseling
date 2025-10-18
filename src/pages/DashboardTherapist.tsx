import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, TrendingUp, Users, Clock, LogOut } from "lucide-react";
import Layout from "@/components/Layout";

const DashboardTherapist = () => {
  const todaySessions = [
    { time: "9:00 AM", client: "Alex M.", type: "Video", status: "Scheduled" },
    { time: "11:30 AM", client: "Jordan K.", type: "Phone", status: "Scheduled" },
    { time: "2:00 PM", client: "Sam P.", type: "Video", status: "In Progress" },
    { time: "4:30 PM", client: "Taylor R.", type: "Video", status: "Scheduled" },
  ];

  const moodTrends = [
    { week: "Week 1", avgMood: "Good 🙂" },
    { week: "Week 2", avgMood: "Great 😊" },
    { week: "Week 3", avgMood: "Good 🙂" },
    { week: "Week 4", avgMood: "Great 😊" },
  ];

  const clientProgress = [
    { name: "Alex M.", sessions: 12, progress: "Excellent", trend: "↑" },
    { name: "Jordan K.", sessions: 8, progress: "Good", trend: "↑" },
    { name: "Sam P.", sessions: 15, progress: "Very Good", trend: "↑" },
    { name: "Taylor R.", sessions: 6, progress: "Good", trend: "→" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-2">
              Welcome, Dr. Johnson! 👋
            </h1>
            <p className="text-muted-foreground">Your therapist dashboard overview</p>
          </div>
          <Link to="/login">
            <Button variant="outline" className="gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Today's Sessions</p>
                  <p className="font-heading font-bold text-3xl">4</p>
                </div>
                <Calendar className="w-10 h-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Clients</p>
                  <p className="font-heading font-bold text-3xl">28</p>
                </div>
                <Users className="w-10 h-10 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">This Week</p>
                  <p className="font-heading font-bold text-3xl">18</p>
                </div>
                <TrendingUp className="w-10 h-10 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg Session Time</p>
                  <p className="font-heading font-bold text-3xl">52m</p>
                </div>
                <Clock className="w-10 h-10 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Session Schedule */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Today's Session Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todaySessions.map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="font-semibold text-primary">{session.time}</div>
                      <div>
                        <p className="font-medium">{session.client}</p>
                        <p className="text-sm text-muted-foreground">{session.type} Session</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        session.status === "In Progress"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {session.status}
                    </span>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline">
                View Full Schedule
              </Button>
            </CardContent>
          </Card>

          {/* Mood Trends */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Client Mood Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Average mood across all clients (Last 4 weeks)
              </p>
              <div className="space-y-4">
                {moodTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="font-medium">{trend.week}</span>
                    <span className="text-lg">{trend.avgMood}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-green-800">
                  📈 Overall client mood is trending positive! Great work!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Client Progress Overview */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Client Progress Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Client Name</th>
                    <th className="text-left p-3 font-semibold">Total Sessions</th>
                    <th className="text-left p-3 font-semibold">Progress</th>
                    <th className="text-left p-3 font-semibold">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {clientProgress.map((client, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-3 font-medium">{client.name}</td>
                      <td className="p-3">{client.sessions}</td>
                      <td className="p-3">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          {client.progress}
                        </span>
                      </td>
                      <td className="p-3 text-2xl">{client.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DashboardTherapist;
