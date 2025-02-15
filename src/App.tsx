import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "./layout/NavBar"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="flex flex-col min-h-screen w-full"> 
        <NavBar />
        <main className="flex-grow pt-[4em]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App
