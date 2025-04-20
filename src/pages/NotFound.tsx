
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 modern-card max-w-md">
        <h1 className="text-6xl font-bold mb-4 highlight">404</h1>
        <p className="text-xl text-gray-400 mb-8">Oops! Page not found</p>
        <a href="/" className="primary-btn inline-flex items-center">
          <Home size={18} className="mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
