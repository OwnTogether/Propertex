import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle"; // Dark mode toggle

const NavBar = () => {
  return (
    <nav className="flex fixed top-0 left-0 w-full backdrop-blur-lg justify-between items-center p-4 bg-background/80 text-foreground shadow-lg dark:shadow-xl dark:shadow-slate-800 z-50 transition-all duration-300">
      <h1 className="text-xl font-bold">Propertex</h1>
      <div className="flex items-center space-x-4">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
        <Link to="/auth" className="hover:text-primary">Login</Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default NavBar;
