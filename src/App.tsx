import { ThemeProvider } from "@/components/theme-provider"
import NavBar from "./layout/NavBar"


function App() {

  return (
    <>
       <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-max bg-background text-foreground shadow-md transition-colors duration-300">
        <NavBar />
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold">Propertex</h1>
          <p>Welcome to our platform!</p>
        </div>
      </div>
    </ThemeProvider>
    </>
  )
}

export default App
