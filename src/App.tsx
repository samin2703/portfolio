import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathon from './components/Hackathon';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * ============================================
 * PERSONAL PORTFOLIO - MAIN APPLICATION
 * ============================================
 * 
 * This is the main entry point for the portfolio.
 * 
 * TO CUSTOMIZE YOUR PORTFOLIO:
 * 1. Edit src/data/portfolioData.ts - Update all your personal information
 * 2. Add your profile image to public/ folder and update About.tsx
 * 3. Replace project images with your own
 * 4. Update the resume URL in portfolioData.ts
 * 5. Connect the contact form to your backend (see Contact.tsx)
 * 
 * SECTIONS:
 * - Hero: Main landing section with gradient background
 * - About: Personal introduction and stats
 * - Skills: Technical skills with progress bars
 * - Projects: Project cards with hover effects
 * - Experience: Work and education timeline
 * - Contact: Contact form and information
 * - Footer: Social links and copyright
 * 
 * ============================================
 */

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 dark:bg-gray-950 transition-colors duration-300 relative">
        {/* Animated Particle Background */}
        <ParticleBackground />
        
        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Navigation */}
          <Navbar />
          
          {/* Main Content */}
          <main>
            {/* Hero Section */}
            <Hero />
            
            {/* About Section */}
            <About />
            {/* Projects Section */}
            <Projects />

            {/* Hackathon Section */}
            <Hackathon />
            
            {/* Experience Section */}
            <Experience />
            
            {/* Skills Section */}
            <Skills />
            
            {/* Contact Section */}
            <Contact />
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
