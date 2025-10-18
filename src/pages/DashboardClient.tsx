import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Smile, TrendingUp, CheckCircle2, Calendar, Target } from "lucide-react";
import Layout from "@/components/Layout";

const DashboardClient = () => {
  const moods = [
    { emoji: "😊", label: "Great" },
    { emoji: "🙂", label: "Good" },
    { emoji: "😐", label: "Okay" },
    { emoji: "😔", label: "Low" },
    { emoji: "😢", label: "Struggling" },
  ];

  const progressJourney = [
    { milestone: "Assessment", completed: true },
    { milestone: "First Therapy Session", completed: true },
    { milestone: "Anxiety Management", completed: false },
    { milestone: "Stress Reduction Goals", completed: false },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="font-heading font-bold text-3xl mb-2">Welcome back, User</h1>
            <p className="text-muted-foreground">Here's mental health overview for today</p>
          </div>
          <div className="flex gap-4">
            <Button className="gap-2">
              <Smile className="w-4 h-4" />
              Quick mood Check
            </Button>
            <Button className="gap-2">
              <Calendar className="w-4 h-4" />
              Start Session
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Overview */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading font-bold text-xl">Today's Overview</h2>
                  <Button className="bg-primary">Date</Button>
                </div>
                
                <div className="space-y-4">
                  <Card className="bg-muted/50">
                    <CardContent className="p-4 flex items-center gap-4">
                      <Smile className="w-8 h-8 text-yellow-500" />
                      <span className="font-medium">Current Mood</span>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardContent className="p-4 flex items-center gap-4">
                      <span className="text-2xl">🔥</span>
                      <span className="font-medium">Streak</span>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardContent className="p-4 flex items-center gap-4">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                      <span className="font-medium">Goal Progress</span>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Mood Trends */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading font-bold text-xl">Mood Trends</h2>
                  <select className="border rounded px-3 py-1">
                    <option>This Week</option>
                  </select>
                </div>
                
                <div className="h-48 bg-muted/30 rounded flex items-end justify-around p-4 gap-2">
                  <div className="w-full h-3/4 bg-green-400 rounded-t"></div>
                  <div className="w-full h-2/3 bg-yellow-400 rounded-t"></div>
                  <div className="w-full h-1/2 bg-orange-400 rounded-t"></div>
                  <div className="w-full h-5/6 bg-red-400 rounded-t"></div>
                </div>

                <div className="mt-6 space-y-3">
                  <Card className="bg-muted/50">
                    <CardContent className="p-4 flex items-center gap-3">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-sm">Mood improving over the past week</span>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardContent className="p-4 flex items-center gap-3">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-sm">Stress levels remain stable</span>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Personalized Recommendations */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading font-bold text-xl">Personalized Recommendations</h2>
                  <span className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">AI POWERED</span>
                </div>

                <Card className="bg-muted/50">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary rounded flex items-center justify-center">
                        <Target className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Understanding Anxiety Triggers</h3>
                        <p className="text-sm text-muted-foreground">Recommendations</p>
                      </div>
                    </div>
                    <Button size="sm">Try Now</Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* AI Companion */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold">AI COMPANION</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Available</span>
                  </div>
                </div>

                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-4xl">🤖</span>
                  </div>
                </div>

                <p className="text-center text-sm mb-4">Paragraph</p>

                <Button variant="secondary" className="w-full">
                  Chat with AI Companion
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Sessions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading font-bold mb-6">Upcoming Sessions</h3>
                
                <div className="space-y-4">
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">2:00 PM</p>
                          <p className="text-sm text-muted-foreground">Today</p>
                        </div>
                        <Button size="sm" className="bg-green-500 hover:bg-green-600">Join</Button>
                      </div>
                      <p className="text-sm">Therapist Name</p>
                      <p className="text-xs text-muted-foreground">Individual Therapy</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">10:00 AM</p>
                          <p className="text-sm text-muted-foreground">Tomorrow</p>
                        </div>
                        <Button size="sm" variant="outline">Reschedule</Button>
                      </div>
                      <p className="text-sm">Therapist Name</p>
                      <p className="text-xs text-muted-foreground">Follow-up session</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Progress Journey */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading font-bold">Your Progress Journey</h3>
                  <Button variant="link" size="sm" className="text-primary">View Full RoadMap</Button>
                </div>

                <div className="space-y-4">
                  {progressJourney.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2
                        className={`w-6 h-6 ${
                          item.completed ? "text-green-500" : "text-muted"
                        }`}
                      />
                      <span className={item.completed ? "font-medium" : "text-muted-foreground"}>
                        {item.milestone}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>68% Complete</span>
                  </div>
                  <Progress value={68} className="h-3" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardClient;
