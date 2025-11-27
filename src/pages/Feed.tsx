import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Bookmark, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";

const Feed = () => {
  const posts = [
    {
      id: 1,
      type: "story",
      title: "90 Days Sober - My Journey",
      content: "Today marks 90 days without alcohol. Three months ago, I couldn't imagine going a single day. The journey has been challenging, but every sunrise feels like a victory now.",
      likes: 124,
      comments: 18,
      tags: ["Milestone", "Alcohol Recovery"],
      gradient: "bg-calm-gradient",
    },
    {
      id: 2,
      type: "tip",
      title: "Alternative Activities That Help",
      content: "When cravings hit, I go for a walk or call a friend. Having a list of 5 go-to activities has saved me countless times. What are yours?",
      likes: 89,
      comments: 34,
      tags: ["Coping Strategies", "Tips"],
      gradient: "bg-healing-gradient",
    },
    {
      id: 3,
      type: "motivation",
      title: "Daily Reminder",
      content: "You are stronger than your cravings. You are braver than you think. You are worthy of a healthy, fulfilling life. Keep going. 💙",
      likes: 203,
      comments: 12,
      tags: ["Motivation", "Daily Inspiration"],
      gradient: "bg-secondary",
    },
    {
      id: 4,
      type: "question",
      title: "How Do You Handle Social Situations?",
      content: "I'm attending my first party since starting recovery. Any advice on how to navigate social pressure? Feeling nervous but determined.",
      likes: 45,
      comments: 67,
      tags: ["Advice Needed", "Social Support"],
      gradient: "bg-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-subtle-gradient pb-20">
      <div className="container max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Your Feed</h1>
          </div>
          <p className="text-muted-foreground">Personalized content to inspire and support your journey</p>
        </div>

        {/* Filter Tags */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Badge variant="default" className="bg-primary hover:bg-primary/90 cursor-pointer whitespace-nowrap">
            For You
          </Badge>
          <Badge variant="outline" className="cursor-pointer whitespace-nowrap hover:bg-muted">
            Stories
          </Badge>
          <Badge variant="outline" className="cursor-pointer whitespace-nowrap hover:bg-muted">
            Tips
          </Badge>
          <Badge variant="outline" className="cursor-pointer whitespace-nowrap hover:bg-muted">
            Motivation
          </Badge>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="p-6 shadow-soft border-0 hover:shadow-elevated transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full ${post.gradient} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  A
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground">Anonymous User</span>
                    <span className="text-xs text-muted-foreground">• 2h ago</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 text-foreground">{post.title}</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">{post.content}</p>

              <div className="flex items-center gap-6 pt-4 border-t border-border">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors ml-auto">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Feed;
