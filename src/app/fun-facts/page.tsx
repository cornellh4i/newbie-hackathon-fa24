const FunFacts = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-white to-pink-100">
      {/* headings */}
      <header className="flex justify-between items-center mb-8">
      <nav className="flex justify-between items-center p-6 bg-white shadow-md w-full">
        <h1 className="text-xl text-red-600 underline">Martha Pollack's Portfolio</h1>
        <ul className="flex space-x-6 text-lg">
          <li><a href="#about" className="text-gray-700 hover:text-red-600">About</a></li>
          <li><a href="#achievements" className="text-gray-700 hover:text-red-600">Achievements</a></li>
          <li><a href="#fun-facts" className="text-gray-700 hover:text-red-600">Fun Facts</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-red-600">Contact</a></li>
        </ul>
      </nav>
      </header>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* image */}
        <div className="lg:w-1/3 w-full">
          <img
            src="/martha_fun_facts.png"
            alt="Martha Pollack"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* facts */}
        <div className="lg:w-2/3 w-full bg-pink-100 p-6 rounded-lg shadow-lg space-y-8">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-rose-700 mb-2 underline">FACT #1:</h2>
            <p className="text-lg text-rose-700">
              She’s an expert in <strong>AI</strong>. Pollack is known for her research in artificial intelligence, particularly in the areas of knowledge representation and reasoning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-rose-700 mb-2 underline">FACT #2:</h2>
            <p className="text-lg text-rose-700">
              An advocate for women in <strong>STEM</strong>. Pollack is an advocate for increasing diversity in technology, working to promote the participation of women in STEM fields.
            </p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-rose-700 mb-2 underline" >FACT #3:</h2>
            <p className="text-lg text-rose-700">
              She has an interdisciplinary focus. Pollack emphasizes the importance of interdisciplinary collaboration, combining computer science with fields like social science and engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
