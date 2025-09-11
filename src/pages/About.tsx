import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Organic First",
      description: "We source only the finest organic ingredients, supporting sustainable farming practices that nurture both our bodies and the planet."
    },
    {
      icon: Heart,
      title: "Wellness Focused",
      description: "Every recipe is crafted with your health in mind, providing balanced nutrition that fuels your body's natural vitality."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "We believe in the power of shared meals and collective wellness, building connections through food and healthy living."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Our commitment to excellence means rigorous testing and careful curation of every ingredient and recipe we share."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-b from-accent/20 to-background">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Born from a passion for natural wellness and sustainable living, Root & Rise is more than just a recipe platform—it's a movement towards mindful eating and holistic health.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Root & Rise, we believe that food is medicine, community is healing, and nature provides everything we need to thrive. Our mission is to make wholesome, organic nutrition accessible and enjoyable for everyone.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We curate recipes that not only taste incredible but also nourish your body at the cellular level, supporting your journey toward optimal health and vitality.
              </p>
            </div>
            <div className="bg-primary/5 p-8 rounded-2xl">
              <blockquote className="text-xl italic text-foreground mb-4">
                "Let food be thy medicine and medicine be thy food."
              </blockquote>
              <cite className="text-muted-foreground">— Hippocrates</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-accent/10">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do, from recipe development to community building.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 card-hover">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate nutritionists, chefs, and wellness advocates dedicated to your health journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Sarah Chen", role: "Founder & Nutritionist", bio: "Certified holistic nutritionist with 10+ years of experience in plant-based wellness." },
              { name: "Marcus Rodriguez", role: "Head Chef", bio: "Former restaurant chef turned wellness advocate, specializing in organic cuisine." },
              { name: "Emma Thompson", role: "Wellness Coach", bio: "Certified health coach helping people transform their relationship with food." }
            ].map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;