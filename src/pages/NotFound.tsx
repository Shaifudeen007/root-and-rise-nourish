import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-background pt-16">
        <div className="text-center max-w-md mx-auto section-padding">
          <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
          <h2 className="mb-4 text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Oops! The page you're looking for seems to have wandered off our organic path.
          </p>
          <Button asChild size="lg">
            <a href="/" className="inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
