import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Heart, MessageCircle, Users, TrendingUp, Award, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import CrisisModal from "@/components/CrisisModal";

const Dashboard = () => {
  const [streak, setStreak] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [showCrisis, setShowCrisis] = useState(false);

  useEffect(() => {
    const savedStreak = localStorage.getItem("streak") || "0";
    const savedBadges = JSON.parse(localStorage.getItem("badges") || "[]");
    setStreak(parseInt(savedStreak));
    setBadges(savedBadges);
  }, []);

  const handleCheckIn = () => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem("streak", newStreak.toString());
    
    // Award badges
    if (newStreak === 7 && !badges.includes("week")) {
      const newBadges = [...badges, "week"];
      setBadges(newBadges);
      localStorage.setItem("badges", JSON.stringify(newBadges));
    }
  };

  return (
    <div className="min-h-screen bg-subtle-gradient pb-20">
      {/* Crisis Support Button - Always visible */}
      <Button
        onClick={() => setShowCrisis(true)}
        className="fixed top-4 right-4 z-50 bg-destructive hover:bg-destructive/90 shadow-elevated"
        size="sm"
      >
        <AlertCircle className="w-4 h-4 mr-2" />
        Crisis Support
      </Button>

      <div className="container max-w-4xl mx-auto p-6 pt-16">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">You're doing great. Keep going, one day at a time.</p>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="p-6 bg-calm-gradient text-white border-0 shadow-soft">
            <div className="flex items-center gap-3 mb-2">
              <Flame className="w-6 h-6" />
              <span className="text-sm font-medium">Current Streak</span>
            </div>
            <p className="text-4xl font-bold">{streak}</p>
            <p className="text-sm opacity-90 mt-1">days strong</p>
          </Card>

          <Card className="p-6 bg-healing-gradient text-white border-0 shadow-soft">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-6 h-6" />
              <span className="text-sm font-medium">Badges Earned</span>
            </div>
            <p className="text-4xl font-bold">{badges.length}</p>
            <p className="text-sm opacity-90 mt-1">milestones reached</p>
          </Card>
        </div>

        {/* Daily Check-in */}
        <Card className="p-6 mb-8 shadow-soft border-0">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">Daily Check-in</h3>
              <p className="text-muted-foreground text-sm">Mark another day of progress</p>
            </div>
            <Button onClick={handleCheckIn} className="bg-secondary hover:bg-secondary/90">
              <Heart className="w-4 h-4 mr-2" />
              Check In
            </Button>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="p-6 hover:shadow-elevated transition-all cursor-pointer border-primary/20 hover:border-primary">
            <MessageCircle className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-1">AI Mentor</h3>
            <p className="text-sm text-muted-foreground">Talk to your recovery coach</p>
          </Card>

          <Card className="p-6 hover:shadow-elevated transition-all cursor-pointer border-secondary/20 hover:border-secondary">
            <Users className="w-8 h-8 text-secondary mb-3" />
            <h3 className="font-semibold mb-1">Community</h3>
            <p className="text-sm text-muted-foreground">Connect with others</p>
          </Card>
        </div>

        {/* Today's Inspiration */}
        <Card className="p-6 bg-accent/5 border-accent/20 shadow-soft">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-accent-foreground">Today's Inspiration</h3>
              <p className="text-foreground/90">
                "Recovery is not a race. You don't have to feel guilty if it takes you longer than you thought it would. Progress is still progress, no matter how slow."
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Navigation />
      <CrisisModal open={showCrisis} onClose={() => setShowCrisis(false)} />
    </div>
  );
};

export default Dashboard;
