import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Users, Plus, Heart, MessageCircle, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const Community = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const { toast } = useToast();

  const communityPosts = [
    {
      id: 1,
      content: "Day 15 and feeling proud! The first week was the hardest, but it gets easier. To anyone just starting: you can do this! 💪",
      likes: 87,
      comments: 23,
      time: "3h ago",
      category: "Victory",
    },
    {
      id: 2,
      content: "Has anyone tried meditation for managing stress? I'm looking for recommendations on apps or techniques that worked for you.",
      likes: 34,
      comments: 45,
      time: "5h ago",
      category: "Question",
    },
    {
      id: 3,
      content: "Grateful for this community. You all inspire me every day. Remember: progress, not perfection. ❤️",
      likes: 156,
      comments: 31,
      time: "1d ago",
      category: "Gratitude",
    },
  ];

  const handlePost = () => {
    if (!newPostContent.trim()) {
      toast({
        title: "Post is empty",
        description: "Please write something before posting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Post shared!",
      description: "Your anonymous post has been shared with the community.",
    });
    setNewPostContent("");
    setShowNewPost(false);
  };

  return (
    <div className="min-h-screen bg-subtle-gradient pb-20">
      <div className="container max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Community</h1>
                <p className="text-sm text-muted-foreground">Safe, anonymous support</p>
              </div>
            </div>
            <Button
              onClick={() => setShowNewPost(!showNewPost)}
              className="bg-secondary hover:bg-secondary/90"
            >
              <Plus className="w-4 h-4 mr-2" />
              Post
            </Button>
          </div>

          {/* Safety Notice */}
          <Card className="p-4 bg-muted/50 border-0 mb-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground">
                  This is a safe space. All posts are anonymous and AI-moderated for everyone's wellbeing.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* New Post Form */}
        {showNewPost && (
          <Card className="p-6 mb-6 shadow-soft border-0 animate-in fade-in-50 slide-in-from-top-5 duration-300">
            <h3 className="font-semibold mb-4 text-foreground">Share with the community</h3>
            <Textarea
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="What's on your mind? Share your progress, ask for advice, or offer support..."
              className="mb-4 min-h-[120px] resize-none border-border focus:border-primary"
            />
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setShowNewPost(false);
                  setNewPostContent("");
                }}
              >
                Cancel
              </Button>
              <Button onClick={handlePost} className="bg-secondary hover:bg-secondary/90">
                Post Anonymously
              </Button>
            </div>
          </Card>
        )}

        {/* Community Posts */}
        <div className="space-y-4">
          {communityPosts.map((post) => (
            <Card key={post.id} className="p-6 shadow-soft border-0 hover:shadow-elevated transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold flex-shrink-0">
                  A
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-foreground">Anonymous Member</span>
                    <span className="text-xs text-muted-foreground">• {post.time}</span>
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                </div>
              </div>

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
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Navigation />
    </div>
  );
};

export default Community;
