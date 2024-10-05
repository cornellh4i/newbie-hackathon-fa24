export default function AchievementsPage() {
  return (
    <main
      className=""
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

    <nav className="bg-white shadow-md">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center p-6 bg-white">
        {/* Title */}
        <h1 className="text-3xl font-bold text-red-600 mb-4 md:mb-0">
          Martha Pollacks Portfolio
        </h1>
        {/* Line below the title on mobile (hidden on desktop) */}
        <div className="w-full border-t-2 border-red-300 mt-2 mb-4 md:hidden"></div>
        {/* Navigation Links */}
        <ul className="flex flex-col w-full items-center space-y-1 md:flex-row md:space-y-0 md:space-x-6 md:w-auto">
          {/* ABOUT Link with line above on desktop */}
          <li className="relative w-full md:w-auto">
            <a
              href="#about"
              className="block text-center text-red-300 hover:text-red-600 py-2 w-full md:w-auto"
            >
              ABOUT
            </a>
          </li>
          {/* Other Links */}
          <li className="w-full md:w-auto">
            <a
              href="#achievements"
              className="block text-center text-red-600 font-bold md:text-left md:inline-block md:border-t-4 border-red-600 py-2 w-full md:w-auto"
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

      <div className="flex min-h-screen flex-col items-center justify-between p-24 w-full max-w-10xl flex flex-col items-center">

        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-start space-x-4">
            <img 
              src="/images/martha1.png" 
              alt="Achievement 1" 
              className="w-[272px] h-[272px] object-cover" 
            />
            <div className="rounded-lg p-4" style={{ width: '960px', height: '251px', fontSize: '22px' }}>
              <div className="flex justify-between items-start">
                <h2 style={{ color: 'rgba(155, 20, 44, 1)', fontSize: '28px' }} className="text-xl font-bold">UNIVERSITY OF MICHIGAN</h2>
                <h2 className="text-xl font-bold">VICE PRESIDENT OF ACADEMIC AFFAIRS</h2>
              </div>
              <hr className="mb-2" style={{width: '182px', border: '1px solid rgba(155, 20, 44, 1)', fontSize: '22px'}} />
              <p className="text-gray-600">I was appointed provost and executive vice president for academic affairs at the 
                University of Michigan in May 2013, where I also was professor of computer science and engineering in the 
                College of Engineering, and professor of information in the School of Information. As the university's 
                chief academic officer and chief budget officer, I oversaw the public research university's academic 
                enterprise.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img 
              src="/images/martha2.jpg" 
              alt="Achievement 2" 
              className="w-[272px] h-[272px] object-cover" 
            />
            <div className="rounded-lg p-4" style={{ width: '960px', height: '251px', fontSize: '22px' }}>
              <div className="flex justify-between items-start">
                <h2 style={{ color: 'rgba(155, 20, 44, 1)', fontSize: '28px' }} className="text-xl font-bold">AMERICAN ASSOCIATION FOR THE ADVANCEMENT OF SCIENCE</h2>
                <h2 className="text-xl font-bold">FELLOW</h2>
              </div>
              <hr className="mb-2" style={{width: '182px', border: '1px solid rgba(155, 20, 44, 1)', fontSize: '22px'}} />
              <p className="text-gray-600">I provide funding to projects that deploy "learning analytics," 
                the application of data mining techniques to student data, to develop new approaches to 
                teaching, and I commissioned an academic innovation initiative that supports the development 
                and deployment of programs and systems for engaged and personalized learning.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <img 
              src="/images/martha3.jpg" 
              alt="Achievement 3" 
              className="w-[272px] h-[272px] object-cover" 
            />
            <div className="rounded-lg p-4" style={{ width: '960px', height: '251px', fontSize: '22px' }}>
              <div className="flex justify-between items-start">
                <h2 style={{ color: 'rgba(155, 20, 44, 1)', fontSize: '28px' }} className="text-xl font-bold">JOURNAL OF ARTIFICIAL INTELLIGENCE</h2>
                <h2 className="text-xl font-bold" >EDITOR-IN-CHIEF</h2>
              </div>
              <hr className="mb-2" style={{width: '182px', border: '1px solid rgba(155, 20, 44, 1)', fontSize: '22px'}} />
              <p className="text-gray-600">My research has been in the area of artificial intelligence, 
                where I have published widely on topics including automated planning, natural-language processing, 
                temporal reasoning and constraint satisfaction. A particular focus of her work has been the design 
                of intelligent technology to assist people with cognitive impairment.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
