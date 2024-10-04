import Image from "next/image";


const About = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
  <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center p-6 bg-white">
    {/* Title */}
    <h1 className="text-3xl font-bold text-red-600 mb-4 md:mb-0">
      Martha Pollack's Portfolio
    </h1>
    
    {/* Line below the title on mobile (hidden on desktop) */}
    <div className="w-full border-t-2 border-red-300 mt-2 mb-4 md:hidden"></div>

    {/* Navigation Links */}
    <ul className="flex flex-col w-full items-center space-y-1 md:flex-row md:space-y-0 md:space-x-6 md:w-auto">
      {/* ABOUT Link with line above on desktop */}
      <li className="relative w-full md:w-auto">
        <a 
          href="#about" 
          className="block text-center text-red-600 font-bold md:text-left md:inline-block md:border-t-4 border-red-600 py-2 w-full md:w-auto"
        >
          ABOUT
        </a>
      </li>

      {/* Other Links */}
      <li className="w-full md:w-auto">
        <a 
          href="#achievements" 
          className="block text-center text-red-300 hover:text-red-600 py-2 w-full md:w-auto"
        >
          ACHIEVEMENTS
        </a>
      </li>
      <li className="w-full md:w-auto">
        <a 
          href="#fun-facts" 
          className="block text-center text-red-300 hover:text-red-600 py-2 w-full md:w-auto"
        >
          FUN FACTS
        </a>
      </li>
      <li className="w-full md:w-auto">
        <a 
          href="#contact" 
          className="block text-center text-red-300 hover:text-red-600 py-2 w-full md:w-auto"
        >
          CONTACT
        </a>
      </li>
    </ul>
  </div>
</nav>



      {/* Main Content Section Only */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto mt-12 p-8">
        {/* Avatar Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
          <Image
            src="/image.png" 
            alt="Martha Pollack"
            className="rectangle"
            width={400}
            height={500}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl text-red-600 underline font-bold mb-8">Welcome</h1>
          <p className="text-black leading-relaxed">
          I am the 14th President of Cornell University and a computer scientist with a passion for advancing education, 
          research, and technology. My academic career has focused on artificial intelligence, natural language processing, 
          and assistive technology, with a commitment to applying these fields to real-world challenges. At Cornell, I&#39;m dedicated 
          to fostering academic excellence, interdisciplinary collaboration, and sustainability, while building a more inclusive and 
          engaged campus community. Outside of my role at the university, I enjoy mentoring future leaders and exploring new ways to make 
          meaningful contributions to both academia and society.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;