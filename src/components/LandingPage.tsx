import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Leaf, Heart, Users, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import heroImage from "@/assets/hero-organic-ingredients.jpg";
import quinoaBowlImage from "@/assets/quinoa-kale-bowl.jpg";
import tacoImage from "@/assets/sweet-potato-tacos.jpg";
import smoothieImage from "@/assets/berry-spinach-smoothie.jpg";

const LandingPage = () => {
  const recipes = [
    {
      id: 1,
      title: "Quinoa & Kale Power Bowl",
      description: "A nutrient-packed bowl with organic quinoa, fresh kale, roasted chickpeas, avocado, and a lemon-tahini dressing.",
      image: quinoaBowlImage,
      tags: ["Vegan", "Gluten-Free", "High-Protein"]
    },
    {
      id: 2,
      title: "Sweet Potato & Black Bean Tacos",
      description: "Delicious soft tacos filled with roasted sweet potatoes, black beans, fresh salsa, and cilantro-lime crema.",
      image: tacoImage,
      tags: ["Vegetarian", "Organic", "Fiber-Rich"]
    },
    {
      id: 3,
      title: "Berry & Spinach Smoothie",
      description: "A refreshing blend of organic spinach, mixed berries, banana, and almond milk for an antioxidant-rich start to your day.",
      image: smoothieImage,
      tags: ["Vegan", "Dairy-Free", "Antioxidants"]
    }
  ];

  const blogPosts = [
    "The Power of Organic Eating: Why It Matters for Your Health",
    "5 Essential Nutrients Your Body Needs Daily",
    "Seasonal Superfoods: What to Eat This Fall"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center pt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-max section-padding text-white z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Root & Rise
            </h1>
            <p className="text-xl sm:text-2xl mb-4 font-light">
              Nourish Your Body with Nature's Best
            </p>
            <p className="text-lg sm:text-xl mb-8 text-cream max-w-2xl mx-auto">
              Discover organic foods and wholesome recipes that fuel your wellness journey.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Explore Recipes
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-cream">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Leaf className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-8 text-foreground">About Root & Rise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Root & Rise, we believe in returning to the roots of natural nutrition — sourcing organic, 
              sustainable ingredients and crafting recipes that nurture your body and soul. Our mission is to 
              inspire a deeper connection with wholesome foods that heal, energize, and bring joy to your daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Featured Recipes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nourishing meals crafted with love and the finest organic ingredients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="card-hover overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{recipe.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{recipe.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {recipe.tags.map((tag) => (
                      <span key={tag} className="recipe-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    View Recipe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Tips */}
      <section className="py-20 bg-accent/20">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Latest from Our Blog</h2>
            <p className="text-lg text-muted-foreground">
              Expert insights on nutrition and healthy living
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
                  {post}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Mail className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Stay Nourished</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe for exclusive recipes, nutritional advice, and seasonal product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground text-foreground"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Leaf className="w-8 h-8" />
                Root & Rise
              </h3>
              <p className="text-background/80 mb-6">
                Nourishing your journey to wellness with organic foods and wholesome recipes.
              </p>
              <div className="flex gap-4">
                <Facebook className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
                <Instagram className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
                <Twitter className="w-6 h-6 hover:text-primary transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Recipes</h4>
              <ul className="space-y-2 text-background/80">
                <li className="hover:text-background transition-colors cursor-pointer">Breakfast</li>
                <li className="hover:text-background transition-colors cursor-pointer">Lunch</li>
                <li className="hover:text-background transition-colors cursor-pointer">Dinner</li>
                <li className="hover:text-background transition-colors cursor-pointer">Snacks</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-background/80">
                <li className="hover:text-background transition-colors cursor-pointer">Nutrition Tips</li>
                <li className="hover:text-background transition-colors cursor-pointer">Meal Planning</li>
                <li className="hover:text-background transition-colors cursor-pointer">Organic Guide</li>
                <li className="hover:text-background transition-colors cursor-pointer">About Us</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 Root & Rise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;