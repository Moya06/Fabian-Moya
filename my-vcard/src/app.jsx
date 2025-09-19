// App.jsx
import React from "react";

// Component imports (asegúrate que los nombres de archivos coincidan exactamente)
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";
import './assets/js/script.tsx'; // Asegúrate de que la ruta es correcta


function App() {
  return (
    <main>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="main-content">
        <Navbar />
        <About />
        <Resume />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    </main>
  );
}

export default App;
