import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, Users, ChefHat } from "lucide-react";
import { useState } from "react";
import quinoaBowlImage from "@/assets/quinoa-kale-bowl.jpg";
import tacoImage from "@/assets/sweet-potato-tacos.jpg";
import smoothieImage from "@/assets/berry-spinach-smoothie.jpg";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snacks", "Beverages"];

  const recipes = [
    {
      id: 1,
      title: "Quinoa & Kale Power Bowl",
      description: "A nutrient-packed bowl with organic quinoa, fresh kale, roasted chickpeas, avocado, and a lemon-tahini dressing.",
      image: quinoaBowlImage,
      category: "Lunch",
      prepTime: "15 min",
      servings: "2",
      difficulty: "Easy",
      tags: ["Vegan", "Gluten-Free", "High-Protein"]
    },
    {
      id: 2,
      title: "Sweet Potato & Black Bean Tacos",
      description: "Delicious soft tacos filled with roasted sweet potatoes, black beans, fresh salsa, and cilantro-lime crema.",
      image: tacoImage,
      category: "Dinner",
      prepTime: "25 min",
      servings: "4",
      difficulty: "Medium",
      tags: ["Vegetarian", "Organic", "Fiber-Rich"]
    },
    {
      id: 3,
      title: "Berry & Spinach Smoothie",
      description: "A refreshing blend of organic spinach, mixed berries, banana, and almond milk for an antioxidant-rich start to your day.",
      image: smoothieImage,
      category: "Breakfast",
      prepTime: "5 min",
      servings: "1",
      difficulty: "Easy",
      tags: ["Vegan", "Dairy-Free", "Antioxidants"]
    },
    // Additional recipes for demonstration
    {
      id: 4,
      title: "Mediterranean Chickpea Salad",
      description: "Fresh chickpeas with cucumber, tomatoes, red onion, and herbs in a zesty lemon dressing.",
      image: quinoaBowlImage, // Reusing image for demo
      category: "Lunch",
      prepTime: "10 min",
      servings: "3",
      difficulty: "Easy",
      tags: ["Vegan", "Mediterranean", "Quick"]
    },
    {
      id: 5,
      title: "Golden Turmeric Latte",
      description: "A warming blend of turmeric, ginger, and spices with creamy coconut milk.",
      image: smoothieImage, // Reusing image for demo
      category: "Beverages",
      prepTime: "8 min",
      servings: "1",
      difficulty: "Easy",
      tags: ["Anti-inflammatory", "Warming", "Vegan"]
    },
    {
      id: 6,
      title: "Stuffed Bell Peppers",
      description: "Colorful bell peppers stuffed with quinoa, vegetables, and herbs, baked to perfection.",
      image: tacoImage, // Reusing image for demo
      category: "Dinner",
      prepTime: "45 min",
      servings: "4",
      difficulty: "Medium",
      tags: ["Gluten-Free", "Vegetarian", "Comfort"]
    }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
              Wholesome Recipes
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover nourishing recipes crafted with organic ingredients and designed to fuel your wellness journey.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container-max section-padding">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <Card key={recipe.id} className="card-hover overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {recipe.prepTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {recipe.servings} servings
                    </div>
                    <div className="flex items-center gap-1">
                      <ChefHat className="w-4 h-4" />
                      {recipe.difficulty}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{recipe.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{recipe.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {recipe.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Recipe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No recipes found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Recipes;