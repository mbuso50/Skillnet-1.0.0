import { Navbar } from './navbar';
import Image from 'next/image';

const YourComponent = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <Image
        src="/homepage.jpg" // Reference directly from public folder
        alt="Background Image"
        fill
        style={{ objectFit: 'cover', zIndex: -1 }} // Ensures the image covers the entire area
      />

      {/* Header Section */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Image
            src="/logo.png" // Correctly reference the logo from public folder
            alt="SkillNt Logo"
            width={100} 
            height={40} 
            style={{ opacity: 0.7 }} // Set transparency
          />
        </div>

        {/* Navigation Bar on the right */}
        <div className="flex items-center">
          <Navbar />
        </div>
      </header>

      {/* Welcome Message */}
      <h1 className="text-3xl font-bold text-white mt-16">Welcome to Skillnet</h1>

      {/* Form Section */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Login</h2>
        <form className="flex flex-col w-full">
          <input 
            placeholder="Email address" 
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
            type="email" 
            required 
          />
          <input 
            placeholder="Password" 
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
            type="password" 
            required 
          />
          <div className="flex items-center justify-between flex-wrap mb-4">
            <label className="text-sm text-gray-200 cursor-pointer" htmlFor="remember-me">
              <input className="mr-2" id="remember-me" type="checkbox" />
              Remember me
            </label>
            <a className="text-sm text-blue-500 hover:underline" href="#">Forgot password?</a>
          </div>
          <p className="text-white mb-4">
            Do not have an account? 
            <a className="text-sm text-blue-500 hover:underline ml-1" href="#"> Signup</a>
          </p>
          <button 
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" 
            type="submit"
          >
            Login
          </button>
        </form>
      </div>

      {/* Footer Section */}
    <footer className="w-full h-auto px-4 pt-4 pb-6 bg-stone-300 border-t border-gray-400 flex flex-wrap justify-start items-start gap-4">
      {/* Title Section */}
      <div className="flex flex-col w-48">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h3>
        <div className="flex gap-2">
          <a href="/path/to/xlogo" className="w-6 h-6 flex items-center justify-center">
            <img src="/path/to/xlogo.png" alt="X Logo" className="w-full h-full" />
          </a>
          <a href="/path/to/instagram" className="w-6 h-6 flex items-center justify-center">
            <img src="/path/to/instagram.png" alt="Instagram Logo" className="w-full h-full" />
          </a>
          <a href="/path/to/youtube" className="w-6 h-6 flex items-center justify-center">
            <img src="/path/to/youtube.png" alt="YouTube Logo" className="w-full h-full" />
          </a>
          <a href="/path/to/linkedin" className="w-6 h-6 flex items-center justify-center">
            <img src="/path/to/linkedin.png" alt="LinkedIn Logo" className="w-full h-full" />
          </a>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="flex flex-col w-48">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Support Agency  </h3>
        <ul className="space-y-1 text-gray-700">
          {["UI Design", "UX Design", "Wireframing", "Diagramming", "Brainstorming", "Online Whiteboard", "Team Collaboration"].map(item => (
            <li key={item}>
              <a href={`/use-cases/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-base font-normal hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Explore Section */}
      <div className="flex flex-col w-48">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Focus On Workforce Development </h3>
        <ul className="space-y-1 text-gray-700">
          {["Design", "Prototyping", "Development Features", "Design Systems", "Collaboration Features", "Design Process", "FigJam"].map(item => (
            <li key={item}>
              <a href={`/explore/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-base font-normal hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Resources Section */}
      <div className="flex flex-col w-48">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Government Initiative</h3>
        <ul className="space-y-1 text-gray-700">
          {["Blog", "Best Practices", "Colors", "Color Wheel", "Support", "Developers", "Resource Library"].map(item => (
            <li key={item}>
              <a href={`/resources/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-base font-normal hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
    </div>
  );
};

export default YourComponent;
