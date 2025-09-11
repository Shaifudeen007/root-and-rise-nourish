import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Power of Organic Eating: Why It Matters for Your Health",
      excerpt: "Discover the science behind organic foods and how they can transform your wellness journey. Learn about the benefits of pesticide-free produce and sustainable farming practices.",
      author: "Sarah Chen",
      date: "2024-01-15",
      category: "Nutrition",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "5 Essential Nutrients Your Body Needs Daily",
      excerpt: "Understanding the fundamental building blocks of nutrition can help you make better food choices. We break down the key nutrients and their best organic sources.",
      author: "Marcus Rodriguez",
      date: "2024-01-10",
      category: "Health Tips",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 3,
      title: "Seasonal Superfoods: What to Eat This Fall",
      excerpt: "Make the most of autumn's bounty with these nutrient-dense seasonal foods. From pumpkins to pomegranates, discover nature's perfect timing.",
      author: "Emma Thompson",
      date: "2024-01-05",
      category: "Seasonal",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 4,
      title: "Building a Plant-Based Pantry: Essential Ingredients",
      excerpt: "Stock your kitchen with these versatile plant-based staples that form the foundation of countless healthy meals. Your guide to shopping smart and eating well.",
      author: "Sarah Chen",
      date: "2023-12-28",
      category: "Meal Planning",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 5,
      title: "The Art of Mindful Eating: Transforming Your Relationship with Food",
      excerpt: "Learn how to cultivate awareness and presence during meals. Discover techniques to enhance digestion, satisfaction, and overall well-being through mindful eating practices.",
      author: "Emma Thompson",
      date: "2023-12-20",
      category: "Wellness",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 6,
      title: "Fermented Foods: Your Gut's Best Friend",
      excerpt: "Explore the world of fermentation and its incredible benefits for digestive health. From kimchi to kombucha, learn how to incorporate these probiotic powerhouses into your diet.",
      author: "Marcus Rodriguez",
      date: "2023-12-15",
      category: "Gut Health",
      readTime: "6 min read",
      featured: false
    }
  ];

  const categories = ["All", "Nutrition", "Health Tips", "Seasonal", "Meal Planning", "Wellness", "Gut Health"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
              Wellness Blog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert insights, nutritional guidance, and inspiration for your journey to optimal health and vitality.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.find(post => post.featured) && (
        <section className="py-16">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4">Featured Article</Badge>
              <Card className="card-hover overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {blogPosts[0].category}
                      </Badge>
                      <h2 className="text-3xl font-bold mb-4 text-foreground">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {blogPosts[0].author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(blogPosts[0].date).toLocaleDateString()}
                        </div>
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                      <div className="flex items-center text-primary font-medium cursor-pointer hover:text-primary/80 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-8 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🌱</span>
                        </div>
                        <p className="text-muted-foreground">Featured Article Image</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container-max section-padding">
          <h2 className="text-3xl font-bold mb-12 text-foreground text-center">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="card-hover overflow-hidden">
                <CardContent className="p-6">
                  <div className="bg-primary/5 rounded-lg h-48 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl">📖</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Article Image</p>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <div className="flex items-center text-primary font-medium cursor-pointer hover:text-primary/80 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-6 opacity-90">
              Get the latest wellness tips, recipes, and nutritional insights delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-foreground"
              />
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;