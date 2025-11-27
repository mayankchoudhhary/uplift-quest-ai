import { Home, MessageCircle, Users, TrendingUp, Sparkles } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const navItems = [
    { to: "/dashboard", icon: Home, label: "Home" },
    { to: "/feed", icon: Sparkles, label: "Feed" },
    { to: "/mentor", icon: MessageCircle, label: "Mentor" },
    { to: "/community", icon: Users, label: "Community" },
    { to: "/progress", icon: TrendingUp, label: "Progress" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/80 backdrop-blur-lg border-t border-border shadow-elevated z-50">
      <div className="container max-w-4xl mx-auto">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex flex-col items-center gap-1 px-4 py-2 text-muted-foreground hover:text-primary transition-colors"
                activeClassName="text-primary font-semibold"
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
