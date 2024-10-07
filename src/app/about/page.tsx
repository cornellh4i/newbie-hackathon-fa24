import Image from "next/image";
import Link from "next/link";
import image from "../../../public/image.png";

const About = () => {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="flex flex-col items-center bg-white p-6 md:flex-row md:items-center md:justify-between">
          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold text-red-600 md:mb-0">
            Martha Pollack&#39;s Portfolio
          </h1>

          {/* Line below the title on mobile (hidden on desktop) */}
          <div className="mb-4 mt-2 w-full border-t-2 border-red-300 md:hidden"></div>

          {/* Navigation Links */}
          <ul className="flex w-full flex-col items-center space-y-1 md:w-auto md:flex-row md:space-x-6 md:space-y-0">
            {/* ABOUT Link with line above on desktop */}
            <li className="relative w-full md:w-auto">
              <Link
                href="/about"
                className="block w-full border-red-600 py-2 text-center font-bold text-red-600 md:inline-block md:w-auto md:border-t-4 md:text-left"
              >
                ABOUT
              </Link>
            </li>

            {/* Other Links */}
            <li className="w-full md:w-auto">
              <Link
                href="/achievements"
                className="block w-full py-2 text-center text-red-300 hover:text-red-600 md:w-auto"
              >
                ACHIEVEMENTS
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/fun-facts"
                className="block w-full py-2 text-center text-red-300 hover:text-red-600 md:w-auto"
              >
                FUN FACTS
              </Link>
            </li>
            <li className="w-full md:w-auto">
              <Link
                href="/contacts"
                className="block w-full py-2 text-center text-red-300 hover:text-red-600 md:w-auto"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Section Only */}
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-center p-8 md:flex-row">
        {/* Avatar Section */}
        <div className="mb-6 flex-shrink-0 md:mb-0 md:mr-12">
          <Image
            src={image}
            alt="Martha Pollack"
            className="rectangle"
            width={400}
            height={500}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="mb-8 text-5xl font-bold text-red-600 underline">
            Welcome
          </h1>
          <p className="leading-relaxed text-black">
            I am the 14th President of Cornell University and a computer
            scientist with a passion for advancing education, research, and
            technology. My academic career has focused on artificial
            intelligence, natural language processing, and assistive technology,
            with a commitment to applying these fields to real-world challenges.
            At Cornell, I&#39;m dedicated to fostering academic excellence,
            interdisciplinary collaboration, and sustainability, while building
            a more inclusive and engaged campus community. Outside of my role at
            the university, I enjoy mentoring future leaders and exploring new
            ways to make meaningful contributions to both academia and society.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
