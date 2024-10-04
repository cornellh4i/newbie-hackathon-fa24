import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-xl font-bold text-red-600">Martha Pollack's Portfolio</h1>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#about" className="text-gray-700 hover:text-red-600">About</a></li>
          <li><a href="#achievements" className="text-gray-700 hover:text-red-600">Achievements</a></li>
          <li><a href="#fun-facts" className="text-gray-700 hover:text-red-600">Fun Facts</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-red-600">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content Section Only */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto mt-12 p-8">
        {/* Avatar Section */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-12">
          <Image
            src="/headshot.jpeg" 
            alt="Martha Pollack"
            className="rounded-full"
            width={250}
            height={250}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl text-red-600 underline font-bold mb-8">Welcome</h1>
          <p className="text-black leading-relaxed">
          I am the 14th President of Cornell University and a computer scientist with a passion for advancing education, 
          research, and technology. My academic career has focused on artificial intelligence, natural language processing, 
          and assistive technology, with a commitment to applying these fields to real-world challenges. At Cornell, I&#39m dedicated 
          to fostering academic excellence, interdisciplinary collaboration, and sustainability, while building a more inclusive and 
          engaged campus community. Outside of my role at the university, I enjoy mentoring future leaders and exploring new ways to make 
          meaningful contributions to both academia and society.
          </p>
        </div>
      </div>
    </main>
  );
}

