import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Users, TrendingUp, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already onboarded
    const anonymousId = localStorage.getItem("anonymousId");
    if (anonymousId) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-subtle-gradient">
      {/* Hero Section */}
      <div className="container max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-calm-gradient rounded-full flex items-center justify-center animate-in zoom-in-50 duration-700">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-foreground animate-in slide-in-from-bottom-4 duration-700">
            Your Journey to Recovery
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-in slide-in-from-bottom-5 duration-700 delay-100">
            A safe, anonymous community powered by AI to support your path to wellness
          </p>
          <Button
            onClick={() => navigate("/onboarding")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 shadow-elevated animate-in slide-in-from-bottom-6 duration-700 delay-200"
          >
            Begin Your Journey
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all animate-in fade-in-50 slide-in-from-left-8 duration-700 delay-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">100% Anonymous</h3>
            <p className="text-muted-foreground">
              No personal details required. Your privacy and safety are our top priority.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all animate-in fade-in-50 slide-in-from-right-8 duration-700 delay-300">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">AI Recovery Mentor</h3>
            <p className="text-muted-foreground">
              24/7 supportive conversations using CBT and motivational interviewing techniques.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all animate-in fade-in-50 slide-in-from-left-8 duration-700 delay-400">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Supportive Community</h3>
            <p className="text-muted-foreground">
              Connect anonymously with others who understand your journey. Share and receive support.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all animate-in fade-in-50 slide-in-from-right-8 duration-700 delay-400">
            <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Track Your Progress</h3>
            <p className="text-muted-foreground">
              Build streaks, earn badges, and visualize your recovery journey with motivating milestones.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 rounded-2xl bg-calm-gradient text-white text-center shadow-elevated animate-in fade-in-50 slide-in-from-bottom-8 duration-700 delay-500">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">You're Not Alone</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Recovery is a journey, not a destination. Take the first step today in a safe, understanding environment
            designed to support you every step of the way.
          </p>
          <Button
            onClick={() => navigate("/onboarding")}
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
