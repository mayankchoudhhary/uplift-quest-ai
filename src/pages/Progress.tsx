import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Flame, Award, TrendingUp, Calendar, Target, Star } from "lucide-react";
import Navigation from "@/components/Navigation";

const Progress = () => {
  const [streak, setStreak] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);

  useEffect(() => {
    const savedStreak = localStorage.getItem("streak") || "0";
    const savedBadges = JSON.parse(localStorage.getItem("badges") || "[]");
    setStreak(parseInt(savedStreak));
    setBadges(savedBadges);
  }, []);

  const allBadges = [
    { id: "day1", name: "First Step", description: "Completed day 1", icon: Star, earned: streak >= 1 },
    { id: "week", name: "Week Warrior", description: "7 days streak", icon: Flame, earned: badges.includes("week") },
    { id: "month", name: "Monthly Master", description: "30 days streak", icon: Calendar, earned: streak >= 30 },
    { id: "support", name: "Community Helper", description: "Helped others in community", icon: Target, earned: false },
  ];

  const nextMilestone = streak < 7 ? 7 : streak < 30 ? 30 : streak < 60 ? 60 : 90;
  const progressPercent = (streak / nextMilestone) * 100;

  return (
    <div className="min-h-screen bg-subtle-gradient pb-20">
      <div className="container max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-calm-gradient flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Your Progress</h1>
              <p className="text-sm text-muted-foreground">Celebrating every step forward</p>
            </div>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-6 bg-calm-gradient text-white border-0 shadow-soft">
            <div className="flex items-center gap-3 mb-2">
              <Flame className="w-6 h-6" />
              <span className="text-sm font-medium">Current Streak</span>
            </div>
            <p className="text-5xl font-bold mb-1">{streak}</p>
            <p className="text-sm opacity-90">consecutive days</p>
          </Card>

          <Card className="p-6 bg-healing-gradient text-white border-0 shadow-soft">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-6 h-6" />
              <span className="text-sm font-medium">Badges Earned</span>
            </div>
            <p className="text-5xl font-bold mb-1">{badges.length}</p>
            <p className="text-sm opacity-90">achievements</p>
          </Card>

          <Card className="p-6 bg-secondary text-secondary-foreground border-0 shadow-soft">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-6 h-6" />
              <span className="text-sm font-medium">Days to Goal</span>
            </div>
            <p className="text-5xl font-bold mb-1">{nextMilestone - streak}</p>
            <p className="text-sm opacity-90">until {nextMilestone} days</p>
          </Card>
        </div>

        {/* Progress to Next Milestone */}
        <Card className="p-6 mb-6 shadow-soft border-0">
          <h3 className="font-semibold mb-4 text-foreground">Next Milestone: {nextMilestone} Days</h3>
          <ProgressBar value={progressPercent} className="h-3 mb-2" />
          <p className="text-sm text-muted-foreground">
            {streak} / {nextMilestone} days completed ({Math.round(progressPercent)}%)
          </p>
        </Card>

        {/* Weekly Chart Visualization */}
        <Card className="p-6 mb-6 shadow-soft border-0">
          <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            This Week
          </h3>
          <div className="flex gap-2 justify-between">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
              <div key={day} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className={`w-full h-24 rounded-lg ${
                    index <= new Date().getDay()
                      ? "bg-primary/20 border-2 border-primary"
                      : "bg-muted border-2 border-border"
                  } transition-all`}
                />
                <span className="text-xs text-muted-foreground">{day}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Badges Collection */}
        <Card className="p-6 shadow-soft border-0">
          <h3 className="font-semibold mb-4 text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-accent" />
            Achievement Badges
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {allBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.id}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    badge.earned
                      ? "bg-success/10 border-success shadow-glow"
                      : "bg-muted/50 border-border opacity-60"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                      badge.earned ? "bg-success/20" : "bg-muted"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${badge.earned ? "text-success" : "text-muted-foreground"}`} />
                  </div>
                  <h4 className="font-semibold text-sm mb-1 text-foreground">{badge.name}</h4>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                  {badge.earned && (
                    <Badge className="mt-2 bg-success hover:bg-success/90 text-xs">
                      Earned
                    </Badge>
                  )}
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Navigation />
    </div>
  );
};

export default Progress;
