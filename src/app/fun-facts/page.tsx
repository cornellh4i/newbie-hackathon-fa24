import Image from 'next/image';

const FunFacts = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-white to-pink-100">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl text-rose-700 border-b-2 border-rose-300 pb-1 mb-4 md:mb-0">
          Martha Pollack's Portfolio
        </h1>
        <nav className="flex space-x-6 md:space-x-12 text-lg md:text-xl font-semibold text-rose-500">
          <a href="/about" className="hover:text-rose-700 transition-all">ABOUT</a>
          <a href="/achievements" className="hover:text-rose-700 transition-all">ACHIEVEMENTS</a>
          <a href="/fun-facts" className="relative text-rose-700 pb-1">
            FUN FACTS
            <span className="absolute left-0 top-[-8px] w-full h-[3px] bg-customPink"></span>
          </a>
          <a href="#contact" className="hover:text-rose-700 transition-all">CONTACT</a>
        </nav>
      </header>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <Image
            src="/martha_fun_facts.png" 
            alt="Martha Pollack"
            width={400}
            height={400}
            className="shadow-[0_10px_30px_rgba(0,0,0,0.2)] w-full h-auto"
          />
        </div>

        {/* Facts Section */}
        <div className="w-full lg:w-1/2 bg-pink-200 p-6 lg:p-8 shadow-lg ml-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-rose-700 mb-2">FACT #1:</h2>
              <hr className="border-rose-700 border-2 mb-4" />
              <p className="text-base md:text-lg text-gray-800">
                <strong>She’s an expert in AI.</strong> Pollack is known for her research in artificial intelligence, particularly in the areas of knowledge representation and reasoning.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-rose-700 mb-2">FACT #2:</h2>
              <hr className="border-rose-700 border-2 mb-4" />
              <p className="text-base md:text-lg text-gray-800">
                <strong>An advocate for women in STEM.</strong> Pollack is an advocate for increasing diversity in technology, working to promote the participation of women in STEM fields.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-rose-700 mb-2">FACT #3:</h2>
              <hr className="border-rose-700 border-2 mb-4" />
              <p className="text-base md:text-lg text-gray-800">
                <strong>She has an interdisciplinary focus.</strong> Pollack emphasizes the importance of interdisciplinary collaboration, combining computer science with fields like social science and engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
