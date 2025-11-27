import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Heart, Wind, Brain, AlertCircle } from "lucide-react";

interface CrisisModalProps {
  open: boolean;
  onClose: () => void;
}

const CrisisModal = ({ open, onClose }: CrisisModalProps) => {
  const emergencyContacts = [
    { name: "National Crisis Hotline", number: "988", available: "24/7" },
    { name: "SAMHSA Helpline", number: "1-800-662-4357", available: "24/7" },
    { name: "Crisis Text Line", number: "Text HOME to 741741", available: "24/7" },
  ];

  const groundingTechniques = [
    {
      icon: Wind,
      title: "Box Breathing",
      steps: ["Breathe in for 4 counts", "Hold for 4 counts", "Breathe out for 4 counts", "Hold for 4 counts"],
    },
    {
      icon: Brain,
      title: "5-4-3-2-1 Technique",
      steps: [
        "Name 5 things you can see",
        "Name 4 things you can touch",
        "Name 3 things you can hear",
        "Name 2 things you can smell",
        "Name 1 thing you can taste",
      ],
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <AlertCircle className="w-6 h-6 text-destructive" />
            Crisis Support
          </DialogTitle>
          <DialogDescription>
            You're not alone. Help is available 24/7. Choose what feels right for you right now.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Emergency Contacts */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
              <Phone className="w-5 h-5 text-primary" />
              Talk to Someone Now
            </h3>
            <div className="space-y-2">
              {emergencyContacts.map((contact) => (
                <Card key={contact.name} className="p-4 border-primary/20 hover:border-primary transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{contact.name}</p>
                      <p className="text-sm text-muted-foreground">{contact.available}</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Phone className="w-4 h-4 mr-2" />
                      {contact.number}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Grounding Techniques */}
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2 text-foreground">
              <Heart className="w-5 h-5 text-accent" />
              Calm Your Mind
            </h3>
            <div className="space-y-3">
              {groundingTechniques.map((technique) => {
                const Icon = technique.icon;
                return (
                  <Card key={technique.title} className="p-4 bg-accent/5 border-accent/20">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-2 text-foreground">{technique.title}</h4>
                        <ol className="space-y-1">
                          {technique.steps.map((step, index) => (
                            <li key={index} className="text-sm text-foreground/80 flex gap-2">
                              <span className="text-accent font-semibold">{index + 1}.</span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Immediate Safety Message */}
          <Card className="p-4 bg-primary/5 border-primary/20">
            <p className="text-sm text-foreground">
              <strong>If you're in immediate danger:</strong> Please call 911 or go to your nearest emergency room.
              Your safety is the top priority.
            </p>
          </Card>

          <Button onClick={onClose} variant="outline" className="w-full">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CrisisModal;
