import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sparkles, Users, TrendingUp, Heart } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    addictionType: "",
    background: "",
    interests: "",
    recoveryStage: "",
  });

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Generate anonymous ID and save to localStorage
      const anonymousId = `anon_${Math.random().toString(36).substring(2, 15)}`;
      localStorage.setItem("anonymousId", anonymousId);
      localStorage.setItem("userData", JSON.stringify(formData));
      localStorage.setItem("streak", "0");
      localStorage.setItem("badges", JSON.stringify([]));
      navigate("/dashboard");
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-subtle-gradient flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 shadow-elevated border-0 bg-card/80 backdrop-blur-sm">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-calm-gradient rounded-full flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to Your Recovery Journey</h1>
          <p className="text-muted-foreground">You're taking a brave step. Let's personalize your experience.</p>
        </div>

        <div className="mb-8">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full transition-all ${
                  i <= step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">Step {step} of 4</p>
        </div>

        {step === 1 && (
          <div className="space-y-6 animate-in fade-in-50 duration-500">
            <div>
              <Label className="text-lg font-semibold mb-4 block">What are you recovering from?</Label>
              <RadioGroup value={formData.addictionType} onValueChange={(v) => updateFormData("addictionType", v)}>
                <div className="space-y-3">
                  {["Alcohol", "Smoking/Nicotine", "Substance Abuse", "Behavioral (Gaming, Social Media)", "Other"].map((option) => (
                    <label key={option} className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-all">
                      <RadioGroupItem value={option} />
                      <span className="flex-1">{option}</span>
                    </label>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in-50 duration-500">
            <div>
              <Label className="text-lg font-semibold mb-4 block flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Your Background
              </Label>
              <RadioGroup value={formData.background} onValueChange={(v) => updateFormData("background", v)}>
                <div className="space-y-3">
                  {["Student", "Professional", "Entrepreneur", "Homemaker", "Prefer not to say"].map((option) => (
                    <label key={option} className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-all">
                      <RadioGroupItem value={option} />
                      <span className="flex-1">{option}</span>
                    </label>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in-50 duration-500">
            <div>
              <Label className="text-lg font-semibold mb-4 block flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                What interests you?
              </Label>
              <RadioGroup value={formData.interests} onValueChange={(v) => updateFormData("interests", v)}>
                <div className="space-y-3">
                  {["Fitness & Sports", "Art & Creativity", "Reading & Learning", "Music", "Nature & Outdoors", "Spirituality"].map((option) => (
                    <label key={option} className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-all">
                      <RadioGroupItem value={option} />
                      <span className="flex-1">{option}</span>
                    </label>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in fade-in-50 duration-500">
            <div>
              <Label className="text-lg font-semibold mb-4 block flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary" />
                Where are you in your recovery?
              </Label>
              <RadioGroup value={formData.recoveryStage} onValueChange={(v) => updateFormData("recoveryStage", v)}>
                <div className="space-y-3">
                  {["Just starting (0-30 days)", "Building momentum (1-6 months)", "Gaining confidence (6-12 months)", "Maintaining long-term (1+ years)"].map((option) => (
                    <label key={option} className="flex items-center space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary cursor-pointer transition-all">
                      <RadioGroupItem value={option} />
                      <span className="flex-1">{option}</span>
                    </label>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        <div className="flex gap-4 mt-8">
          {step > 1 && (
            <Button
              variant="outline"
              onClick={() => setStep(step - 1)}
              className="flex-1"
            >
              Back
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={!Object.values(formData)[step - 1]}
            className="flex-1 bg-primary hover:bg-primary/90"
          >
            {step === 4 ? "Start Your Journey" : "Continue"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Onboarding;
