import Image from "next/image";
const Contacts = () => {
    return (
        
      <div className="flex flex-col items-center justify-between items-center min-h-screen py-8 shadow-md w-full">
        {/* Profile Section */}
        <nav className="flex justify-between items-center p-6 bg-white shadow-md w-full">
            <h1 className="text-3xl font-bold text-red-600"><u>Martha Pollack's</u> Portfolio</h1>
            <ul className="flex space-x-6 text-lg">
                <li className="relative">
                <a
                    href="/about"
                    className="text-red-600 font-bold hover:font-bold before:content-[''] before:absolute before:left-0 before:top-[-10px] before:w-full before:h-1 before:bg-red-600"
                >
                    ABOUT
                </a>
                </li>
                <li>
                <a
                    href="/achievements"
                    className="text-red-600 font-normal hover:font-bold"
                >
                    ACHIEVEMENTS
                </a>
                </li>
                <li>
                <a
                    href="/fun-facts"
                    className="text-red-600 font-normal hover:font-bold"
                >
                    FUN FACTS
                </a>
                </li>
                <li>
                <a
                    href="/contact"
                    className="text-red-600 font-normal hover:font-bold"
                >
                    CONTACT
                </a>
                </li>
            </ul>
        </nav>
        <div ></div>
        <div className="flex flex-left items-center mb-7 lg:w-1/2 flex-row ">
         
          <div className="float">
            <h3 className="mt-2 text-xl text-red-600">
              <strong><u>LINKEDIN</u></strong>{' '}<br></br>
              <a href="https://www.linkedin.com/school/cornell-university/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#fa98a9] underline text-l">
                Cornell University
              </a>
            </h3>
            <br></br>
            <p className="mt-1 text-xl text-red-600">
              <strong><u>PHONE</u></strong>{' '}<br></br>
              <a href="tel:+1234567890" className="text-[#fa98a9] underline text-l">
                (123) 456-7890
              </a>
            
            </p>
            <br></br><br></br>
            <div className="mb-4">
            <Image src="/img.png" alt="Martha Pollack" width={300} height={300}/>
          </div>
          
          </div>
          <div className="bg-[#fa98a9] p-8 rounded-lg shadow-lg w-full max-w-xs text-left">
            <h2 className="text-xl font-semibold mb-4 text-red-600">EMAIL ME</h2>
            <form>
            <label className="block text-sm mb-2 text-white">First Name</label>
            <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa98a9]"
            />
            
            <label className="block text-sm mb-2 text-white">Last Name</label>
            <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa98a9]"
            />
            
            <label className="block text-sm mb-2 text-white">Email</label>
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa98a9]"
            />
            
            <label className="block text mb-2 text-white">Message</label>
            <textarea
                placeholder="Message"
                className="w-full p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#fa98a9] h-32"
            />
            
            <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-[#fa98a9] transition-colors">
                Send
            </button>
            </form>
        </div>
        </div>
        
        {/* Email Section with mailto: link */}
        
      </div>
    );
  }

export default Contacts;
