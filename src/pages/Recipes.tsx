import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Search, Clock, Users, ChefHat } from "lucide-react";
import { useState } from "react";
import quinoaBowlImage from "@/assets/quinoa-kale-bowl.jpg";
import tacoImage from "@/assets/sweet-potato-tacos.jpg";
import smoothieImage from "@/assets/berry-spinach-smoothie.jpg";
import keeraiMasiyalImage from "@/assets/keerai-masiyal.jpg";
import kambuKanjiImage from "@/assets/kambu-kanji.jpg";
import ragiMuddeImage from "@/assets/ragi-mudde.jpg";
import vegetableKurmaImage from "@/assets/vegetable-kurma.jpg";
import oatsUpmaImage from "@/assets/oats-upma.jpg";
import kolluRasamImage from "@/assets/kollu-rasam.jpg";

interface Recipe {
  id: number;
  title: string;
  tamilName?: string;
  description: string;
  image: string;
  category: string;
  prepTime: string;
  servings: string;
  difficulty: string;
  tags: string[];
  ingredients: string[];
  benefits: string[];
  method?: string[];
}

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snacks", "Beverages", "Sweets", "Side Dishes"];

  const recipes: Recipe[] = [
    { id: 1, title: "Quinoa & Kale Power Bowl", description: "A nutrient-packed bowl with organic quinoa, fresh kale, roasted chickpeas, avocado, and a lemon-tahini dressing.", image: quinoaBowlImage, category: "Lunch", prepTime: "15 min", servings: "2", difficulty: "Easy", tags: ["Vegan", "Gluten-Free", "High-Protein"], ingredients: ["1 cup quinoa", "2 cups fresh kale", "1 can chickpeas", "1 avocado", "2 tbsp tahini", "1 lemon juice", "Olive oil", "Salt & pepper"], benefits: ["High in protein", "Rich in fiber", "Packed with vitamins"] },
    { id: 2, title: "Sweet Potato & Black Bean Tacos", description: "Delicious soft tacos filled with roasted sweet potatoes, black beans, fresh salsa, and cilantro-lime crema.", image: tacoImage, category: "Dinner", prepTime: "25 min", servings: "4", difficulty: "Medium", tags: ["Vegetarian", "Organic", "Fiber-Rich"], ingredients: ["2 sweet potatoes", "1 can black beans", "8 soft tortillas", "Fresh salsa", "Cilantro", "Lime", "Greek yogurt", "Cumin", "Paprika"], benefits: ["High in fiber", "Rich in antioxidants", "Good for gut health"] },
    { id: 3, title: "Berry & Spinach Smoothie", description: "A refreshing blend of organic spinach, mixed berries, banana, and almond milk for an antioxidant-rich start to your day.", image: smoothieImage, category: "Breakfast", prepTime: "5 min", servings: "1", difficulty: "Easy", tags: ["Vegan", "Dairy-Free", "Antioxidants"], ingredients: ["1 cup spinach", "1 cup mixed berries", "1 banana", "1 cup almond milk", "1 tbsp honey (optional)"], benefits: ["Antioxidant rich", "Boosts immunity", "Good for skin"] },
    { id: 7, title: "Keerai Masiyal", tamilName: "கீரை மசியல்", description: "Mashed greens dish prepared using mortar and pestle. Uses manathakkali, siru keerai, arai keerai mixed with garlic and salt only. A healing food for digestion.", image: keeraiMasiyalImage, category: "Lunch", prepTime: "20 min", servings: "3", difficulty: "Easy", tags: ["Traditional", "Iron-Rich", "Healing", "Tamil"], ingredients: ["2 cups any keerai", "3 garlic pods", "1 green chilli", "¼ tsp turmeric", "Salt", "1 tsp oil", "½ tsp mustard seeds", "½ tsp urad dal"], benefits: ["Rich in iron & calcium", "Good for digestion", "Boosts immunity"], method: ["Wash keerai well and chop roughly", "Cook with garlic, green chilli, turmeric with little water", "Once soft, mash using ladle or hand blender", "Temper mustard + urad dal in oil; add to mashed keerai", "Add salt and mix well"] },
    { id: 8, title: "Kambu Kanji", tamilName: "கம்பு கஞ்சி", description: "Traditional high-protein, high-fiber breakfast porridge made with pearl millet flour and buttermilk. Excellent for diabetics.", image: kambuKanjiImage, category: "Breakfast", prepTime: "15 min", servings: "2", difficulty: "Easy", tags: ["Traditional", "High-Fiber", "Weight-Loss", "Tamil"], ingredients: ["3 tbsp kambu flour", "1½ cups water", "½ cup buttermilk", "Salt"], benefits: ["Helps in weight loss", "Keeps you full for long", "Excellent for diabetics"], method: ["Mix kambu flour with some water to make slurry", "Add to boiling water and stir continuously", "Cook for 5-7 mins until thick", "Cool slightly and add buttermilk + salt"] },
    { id: 9, title: "Ragi Kali / Ragi Mudde", tamilName: "ராகி களி", description: "A powerhouse of calcium and energy made from finger millet flour. Strengthens bones and great for all ages.", image: ragiMuddeImage, category: "Breakfast", prepTime: "15 min", servings: "2", difficulty: "Easy", tags: ["Traditional", "Calcium-Rich", "Gluten-Free", "Tamil"], ingredients: ["1 cup ragi flour", "2 cups water", "½ tsp salt"], benefits: ["Very high in calcium", "Strengthens bones", "Great for children & seniors"], method: ["Take ragi flour, add some hot water and mix into paste", "Boil remaining water with salt", "Add ragi paste into boiling water and stir", "Close lid for 3-4 minutes", "Stir vigorously and form balls"] },
    { id: 10, title: "Thengai Paal Vegetable Kurma", tamilName: "தேங்காய் பால் குருமா", description: "Nutritious mixed-vegetable kurma made with coconut milk, onions, and aromatic spices. Rich in vitamins and healthy fats.", image: vegetableKurmaImage, category: "Dinner", prepTime: "30 min", servings: "4", difficulty: "Medium", tags: ["Traditional", "Coconut", "Vitamin-Rich", "Tamil"], ingredients: ["2 cups mixed vegetables", "1 onion", "1 tomato", "1 tsp ginger-garlic paste", "1 cup coconut milk", "½ tsp turmeric", "½ tsp chilli powder", "½ tsp garam masala"], benefits: ["Rich in vitamins & minerals", "Healthy fats from coconut", "Great with chapati, dosa or rice"], method: ["Sauté onion + tomato + ginger-garlic paste", "Add vegetables and spices; cook until soft", "Add coconut milk and simmer for 3 minutes"] },
    { id: 11, title: "Oats Vegetable Upma", tamilName: "ஓட்ஸ் உப்மா", description: "A modern yet healthy Tamil-style breakfast with roasted oats, mixed vegetables, and traditional tempering. High in fiber.", image: oatsUpmaImage, category: "Breakfast", prepTime: "20 min", servings: "2", difficulty: "Easy", tags: ["Heart-Healthy", "High-Fiber", "Quick", "Tamil"], ingredients: ["1 cup oats", "½ cup mixed vegetables", "1 onion", "Mustard seeds", "Urad dal", "Curry leaves", "1 green chilli", "Salt"], benefits: ["High fiber", "Good for heart & weight control", "Very quick to make"], method: ["Roast oats lightly and keep aside", "Temper mustard, urad dal, curry leaves", "Add onion, chillies, vegetables and sauté", "Add water + salt and boil", "Add oats and cook till fluffy"] },
    { id: 12, title: "Kollu Rasam", tamilName: "கொள்ளு ரசம்", description: "Very healthy rasam made with horse gram, garlic, and pepper. Great for weight loss, immunity boost, and cold relief.", image: kolluRasamImage, category: "Dinner", prepTime: "25 min", servings: "4", difficulty: "Medium", tags: ["Traditional", "Weight-Loss", "Immunity", "Tamil"], ingredients: ["½ cup kollu", "1 tomato", "4 garlic pods", "1 tsp pepper", "1 tsp jeera", "1 cup tamarind water", "Mustard seeds"], benefits: ["Burns fat naturally", "Improves immunity", "Clears cold and cough"], method: ["Pressure cook kollu and strain water", "Grind pepper, jeera, garlic", "Add kollu water + masala + tamarind + tomato", "Boil well and temper with mustard"] },
    { id: 13, title: "Kamban Koozh", tamilName: "கம்பன் கூழ்", description: "An ancient farmer's energy drink from Sangam times, made with pearl millet and natural fermentation. Cooling for the body.", image: kambuKanjiImage, category: "Beverages", prepTime: "8+ hours", servings: "4", difficulty: "Medium", tags: ["Ancient", "Fermented", "Cooling", "Tamil"], ingredients: ["1 cup kambu", "4 cups water", "½ cup buttermilk", "Salt", "Small onion (optional)", "Green chilli (optional)"], benefits: ["Cooling for the body", "Natural probiotic", "No oil, no spices"] },
    { id: 14, title: "Thinai Arisi Saadam", tamilName: "திணை அரிசி சாதம்", description: "Foxtail millet rice used by kurinji people (hill tribes). Eaten plain with salt or buttermilk, mentioned in Sangam literature.", image: ragiMuddeImage, category: "Lunch", prepTime: "25 min", servings: "3", difficulty: "Easy", tags: ["Ancient", "Millet", "Gluten-Free", "Tamil"], ingredients: ["1 cup thinai", "2 cups water", "Salt", "Buttermilk (optional)"], benefits: ["Naturally gluten-free", "High in protein", "Low glycemic index"] },
    { id: 15, title: "Kollu Saadam", tamilName: "கொள்ளு சாதம்", description: "Horse-gram cooked with rice or millets — warrior food. High protein dish used during winters.", image: kolluRasamImage, category: "Lunch", prepTime: "35 min", servings: "4", difficulty: "Medium", tags: ["Ancient", "High-Protein", "Warrior Food", "Tamil"], ingredients: ["½ cup kollu", "1 cup rice or millet", "1 onion", "2 tomatoes", "Ginger-garlic paste", "Spices", "Curry leaves"], benefits: ["High protein", "Strengthens bones", "Builds stamina"] },
    { id: 16, title: "Ellu Saadam", tamilName: "எள்ளு சாதம்", description: "Black sesame rice eaten during Aadi & Kaanum Pongal. Detoxifying and rich in calcium, traditionally offered in temples.", image: quinoaBowlImage, category: "Lunch", prepTime: "20 min", servings: "4", difficulty: "Easy", tags: ["Ancient", "Temple Food", "Detox", "Tamil"], ingredients: ["2 cups cooked rice", "¼ cup black sesame seeds", "2 tbsp gingelly oil", "Mustard seeds", "Urad dal", "Curry leaves", "Salt"], benefits: ["Detoxifying", "Rich in calcium", "Temple offering food"] },
    { id: 17, title: "Pulichu Keerai Kootu", tamilName: "புளிச்ச கீரை கூட்டு", description: "Made using gongura / pulicha keerai and dal. Sangam-era sour greens used before tamarind became common.", image: keeraiMasiyalImage, category: "Lunch", prepTime: "30 min", servings: "4", difficulty: "Medium", tags: ["Ancient", "Iron-Rich", "Sour Greens", "Tamil"], ingredients: ["2 cups pulicha keerai", "½ cup toor dal", "1 onion", "2 green chillies", "Coconut", "Cumin seeds", "Mustard"], benefits: ["Boosts iron levels", "Sangam-era food", "Natural sourness"] },
    { id: 18, title: "Ulunthu Kali", tamilName: "உளுந்து களி", description: "Ancient post-natal and strength food. Ulunthu flour with palm jaggery, given to women and warriors.", image: ragiMuddeImage, category: "Sweets", prepTime: "25 min", servings: "4", difficulty: "Medium", tags: ["Ancient", "Strength Food", "Post-Natal", "Tamil"], ingredients: ["1 cup ulunthu flour", "1 cup palm jaggery", "½ cup ghee", "2 cups water", "Cardamom powder"], benefits: ["Builds muscle and immunity", "Post-natal strength food", "Energy booster"] },
    { id: 19, title: "Puzhungal Arisi Kanji", tamilName: "புழுங்கல் அரிசி கஞ்சி", description: "Boiled rice porridge drained and eaten with simple sides. Ancient gut-healing food used during illness.", image: smoothieImage, category: "Breakfast", prepTime: "30 min", servings: "2", difficulty: "Easy", tags: ["Ancient", "Healing", "Probiotic", "Tamil"], ingredients: ["1 cup puzhungal arisi", "4 cups water", "Salt", "Buttermilk or pickle as side"], benefits: ["Gut-healing food", "Easy to digest", "Naturally probiotic"] },
    { id: 20, title: "Murungai Ilai Poriyal", tamilName: "முருங்கை இலை பொரியல்", description: "Drumstick leaves sautéed lightly. Sangam texts call it 'Amrutha keerai' - improves blood quality.", image: keeraiMasiyalImage, category: "Side Dishes", prepTime: "15 min", servings: "3", difficulty: "Easy", tags: ["Ancient", "Anti-inflammatory", "Blood-Building", "Tamil"], ingredients: ["2 cups murungai ilai", "1 small onion", "1 green chilli", "¼ cup grated coconut", "Mustard seeds", "Urad dal", "Salt"], benefits: ["Improves blood quality", "Anti-inflammatory", "Called Amrutha keerai"] },
    { id: 21, title: "Odiyal Kool", tamilName: "ஒடியல் கூழ்", description: "A rare food made from palmyra tuber flour (South Tamil Nadu). Very ancient with labor-intensive preparation.", image: kambuKanjiImage, category: "Beverages", prepTime: "45 min", servings: "4", difficulty: "Hard", tags: ["Rare", "Ancient", "Palmyra", "Tamil"], ingredients: ["1 cup odiyal flour", "3 cups water", "Buttermilk", "Salt", "Small onion (optional)"], benefits: ["Highly nutritious", "Traditional South Tamil Nadu food", "Cooling properties"] },
    { id: 22, title: "Pacharisi Idli", tamilName: "பச்சரிசி இட்லி", description: "Idli made without urad dal, temple style. Easily digestible white rice fermentation.", image: oatsUpmaImage, category: "Breakfast", prepTime: "8+ hours", servings: "4", difficulty: "Medium", tags: ["Ancient", "Temple Food", "Fermented", "Tamil"], ingredients: ["2 cups raw rice", "½ cup poha", "Salt", "Water for grinding"], benefits: ["Easily digestible", "Temple style", "Light on stomach"] },
    { id: 23, title: "Nei Paniyaram", tamilName: "நெய் பணியாரம்", description: "Old batter pan-fried in ghee. Mentioned in old Tamil households, no refined oil, served in festivals.", image: tacoImage, category: "Snacks", prepTime: "20 min", servings: "4", difficulty: "Medium", tags: ["Ancient", "Festival Food", "Ghee", "Tamil"], ingredients: ["Leftover idli/dosa batter", "2 tbsp ghee", "1 small onion", "2 green chillies", "Curry leaves", "Salt"], benefits: ["No refined oil", "Festival food", "Made with pure ghee"] },
    { id: 24, title: "Vazhaipoo Vadai", tamilName: "வாழைப்பூ வடை", description: "Banana flower fritters. Women-centric nutrition, iron-rich ancient kitchen medicine.", image: vegetableKurmaImage, category: "Snacks", prepTime: "30 min", servings: "4", difficulty: "Medium", tags: ["Ancient", "Iron-Rich", "Women's Health", "Tamil"], ingredients: ["1 banana flower", "1 cup chana dal", "2 onions", "3 green chillies", "Ginger", "Curry leaves", "Salt", "Oil for frying"], benefits: ["Iron-rich", "Women-centric nutrition", "Ancient kitchen medicine"] },
    { id: 25, title: "Ellu Thuvaiyal", tamilName: "எள்ளு துவையல்", description: "Stone-ground sesame chutney. Used instead of coconut, has long shelf life. Traditional winter food.", image: quinoaBowlImage, category: "Side Dishes", prepTime: "10 min", servings: "4", difficulty: "Easy", tags: ["Ancient", "Winter Food", "Sesame", "Tamil"], ingredients: ["½ cup white sesame seeds", "3 dry red chillies", "Small tamarind ball", "Salt", "1 tsp gingelly oil"], benefits: ["Long shelf life", "Coconut substitute", "Warming properties"] },
    { id: 26, title: "Poondu Rasam", tamilName: "பூண்டு ரசம்", description: "Garlic-based rasam, ancient fever food. No tomatoes used, strengthens immunity.", image: kolluRasamImage, category: "Dinner", prepTime: "20 min", servings: "4", difficulty: "Easy", tags: ["Ancient", "Fever Food", "Immunity", "Tamil"], ingredients: ["8-10 garlic cloves", "1 tsp pepper", "1 tsp cumin", "Small tamarind", "Toor dal water", "Curry leaves", "Mustard"], benefits: ["Ancient fever food", "Strengthens immunity", "No tomatoes needed"] },
    { id: 27, title: "Pirandai Thuvaiyal", tamilName: "பிரண்டை துவையல்", description: "Made from veldt grape stem. Bone-healing food used in Siddha medicine, rare today.", image: keeraiMasiyalImage, category: "Side Dishes", prepTime: "15 min", servings: "4", difficulty: "Medium", tags: ["Rare", "Siddha Medicine", "Bone-Healing", "Tamil"], ingredients: ["1 cup pirandai", "3 dry red chillies", "Small tamarind", "Salt", "1 tsp gingelly oil"], benefits: ["Bone-healing food", "Siddha medicine ingredient", "Rare traditional food"] },
    { id: 28, title: "Panangarkandu Payasam", tamilName: "பனங்கற்கண்டு பாயசம்", description: "Palm sugar crystal dessert. No white sugar, cooling effect, traditionally offered in temples.", image: smoothieImage, category: "Sweets", prepTime: "25 min", servings: "4", difficulty: "Easy", tags: ["Ancient", "Temple Food", "Natural Sugar", "Tamil"], ingredients: ["½ cup rice or vermicelli", "1 cup palm sugar crystals", "2 cups coconut milk", "Cardamom", "Cashews", "Ghee"], benefits: ["No white sugar", "Cooling effect", "Temple offering"] },
    { id: 29, title: "Aval Vilayichathu", tamilName: "அவல் விளையிச்சது", description: "Flattened rice roasted with jaggery and coconut. Quick ancient sweet, village snack and energy food.", image: oatsUpmaImage, category: "Sweets", prepTime: "10 min", servings: "4", difficulty: "Easy", tags: ["Ancient", "Quick Sweet", "Energy Food", "Tamil"], ingredients: ["1 cup thick aval", "½ cup jaggery", "¼ cup grated coconut", "2 tbsp ghee", "Cardamom powder"], benefits: ["Quick energy food", "Village snack", "No cooking required"] },
    { id: 30, title: "Sirukurinjan Keerai Kadayal", tamilName: "சிறுகுறிஞ்சான் கீரை", description: "Medicinal leaf mashed with salt for blood sugar regulation. Siddha food, not commercialized.", image: keeraiMasiyalImage, category: "Side Dishes", prepTime: "20 min", servings: "2", difficulty: "Easy", tags: ["Rare", "Siddha Food", "Diabetic-Friendly", "Tamil"], ingredients: ["1 cup sirukurinjan keerai", "Salt", "1 garlic clove", "Small onion"], benefits: ["Blood sugar regulation", "Siddha medicine", "Not commercialized"] },
    { id: 31, title: "Nochi Ilai Rasam", tamilName: "நொச்சி இலை ரசம்", description: "Rasam made only with Nochi leaves. Fever relief food from temple kitchens - no tomato, no tamarind.", image: kolluRasamImage, category: "Dinner", prepTime: "20 min", servings: "4", difficulty: "Medium", tags: ["Rare", "Fever Relief", "Temple Food", "Tamil"], ingredients: ["Handful of nochi leaves", "1 tsp pepper", "1 tsp cumin", "4 garlic cloves", "Dal water", "Salt"], benefits: ["Fever relief food", "Temple kitchen recipe", "No tomato or tamarind"] },
    { id: 32, title: "Mudakathan Thanni", tamilName: "முடக்கத்தான் தண்ணி", description: "Herbal leaf water for arthritis relief. Consumed as drink, not curry. Almost unknown today.", image: smoothieImage, category: "Beverages", prepTime: "15 min", servings: "2", difficulty: "Easy", tags: ["Rare", "Arthritis Relief", "Herbal", "Tamil"], ingredients: ["Handful of mudakathan leaves", "3 cups water", "1 tsp pepper", "Salt"], benefits: ["Arthritis relief", "Consumed as drink", "Herbal medicine"] },
    { id: 33, title: "Panai Vellam Kali", tamilName: "பனை வெல்லம் களி", description: "Palm jaggery porridge - pre-payasam era sweet. No milk, no coconut. Cooling and energizing.", image: ragiMuddeImage, category: "Sweets", prepTime: "20 min", servings: "4", difficulty: "Easy", tags: ["Ancient", "Pre-Payasam Era", "Palm Jaggery", "Tamil"], ingredients: ["1 cup rice flour or millet flour", "1 cup palm jaggery", "2 cups water", "Cardamom"], benefits: ["Pre-payasam era sweet", "No milk or coconut", "Cooling & energizing"] },
    { id: 34, title: "Thinai Kallu Urundai", tamilName: "திணை கல்லு உருண்டை", description: "Foxtail millet + palm jaggery balls. Made without heating syrup, sun-dried tribal snack.", image: oatsUpmaImage, category: "Snacks", prepTime: "30 min", servings: "6", difficulty: "Medium", tags: ["Tribal", "Sun-Dried", "Millet", "Tamil"], ingredients: ["1 cup thinai", "½ cup palm jaggery", "2 tbsp grated coconut", "Cardamom powder"], benefits: ["Made without heating syrup", "Sun-dried", "Tribal snack"] }
  ];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) || (recipe.tamilName && recipe.tamilName.includes(searchTerm));
    const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-24 pb-16 bg-gradient-to-b from-accent/20 to-background">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">Wholesome Recipes</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">Discover nourishing recipes crafted with organic ingredients — from modern wellness bowls to ancient Tamil traditional foods.</p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input type="text" placeholder="Search recipes in English or Tamil..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-3 text-lg" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 border-b border-border">
        <div className="container-max section-padding">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (<Button key={category} variant={selectedCategory === category ? "default" : "outline"} onClick={() => setSelectedCategory(category)} className="rounded-full">{category}</Button>))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <Card key={recipe.id} className="card-hover overflow-hidden cursor-pointer" onClick={() => setSelectedRecipe(recipe)}>
                <div className="aspect-video overflow-hidden"><img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" /></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{recipe.prepTime}</div>
                    <div className="flex items-center gap-1"><Users className="w-4 h-4" />{recipe.servings} servings</div>
                    <div className="flex items-center gap-1"><ChefHat className="w-4 h-4" />{recipe.difficulty}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{recipe.title}</h3>
                  {recipe.tamilName && <p className="text-sm text-primary mb-2">{recipe.tamilName}</p>}
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{recipe.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">{recipe.tags.slice(0, 3).map((tag) => (<Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>))}</div>
                  <Button variant="outline" className="w-full">View Recipe</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {filteredRecipes.length === 0 && (<div className="text-center py-16"><p className="text-xl text-muted-foreground">No recipes found matching your criteria.</p><Button variant="outline" onClick={() => {setSearchTerm(""); setSelectedCategory("All");}} className="mt-4">Clear Filters</Button></div>)}
        </div>
      </section>
      <Dialog open={!!selectedRecipe} onOpenChange={() => setSelectedRecipe(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedRecipe && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedRecipe.title}{selectedRecipe.tamilName && <span className="block text-lg text-primary font-normal mt-1">{selectedRecipe.tamilName}</span>}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img src={selectedRecipe.image} alt={selectedRecipe.title} className="w-full h-64 object-cover rounded-lg" />
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{selectedRecipe.prepTime}</div>
                  <div className="flex items-center gap-1"><Users className="w-4 h-4" />{selectedRecipe.servings} servings</div>
                  <div className="flex items-center gap-1"><ChefHat className="w-4 h-4" />{selectedRecipe.difficulty}</div>
                </div>
                <p className="text-muted-foreground">{selectedRecipe.description}</p>
                <div className="flex flex-wrap gap-2">{selectedRecipe.tags.map((tag) => (<Badge key={tag} variant="secondary">{tag}</Badge>))}</div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">🍳 Ingredients</h4>
                  <ul className="space-y-2">{selectedRecipe.ingredients.map((ingredient, index) => (<li key={index} className="flex items-start gap-2 text-muted-foreground"><span className="text-primary">•</span>{ingredient}</li>))}</ul>
                </div>
                {selectedRecipe.method && selectedRecipe.method.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">📝 Method</h4>
                    <ol className="space-y-2 list-decimal list-inside">{selectedRecipe.method.map((step, index) => (<li key={index} className="text-muted-foreground">{step}</li>))}</ol>
                  </div>
                )}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">✨ Health Benefits</h4>
                  <ul className="space-y-2">{selectedRecipe.benefits.map((benefit, index) => (<li key={index} className="flex items-start gap-2 text-muted-foreground"><span className="text-primary">✔</span>{benefit}</li>))}</ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Recipes;