import Image from "next/image";
const Contacts = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between py-8 shadow-md">
      {/* Profile Section */}
      <nav className="flex w-full items-center justify-between bg-white p-6 shadow-md">
        <h1 className="text-3xl font-bold text-red-600">
          <u>Martha Pollack&#39;s</u> Portfolio
        </h1>
        <ul className="flex space-x-6 text-lg">
          <li className="relative">
            <a
              href="/about"
              className="font-bold text-red-600 hover:font-bold"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="/achievements"
              className="font-normal text-red-600 hover:font-bold"
            >
              ACHIEVEMENTS
            </a>
          </li>
          <li>
            <a
              href="/fun-facts"
              className="font-normal text-red-600 hover:font-bold"
            >
              FUN FACTS
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="font-normal text-red-600 before:absolute before:left-0 before:top-[-10px] before:h-1 before:w-full before:bg-red-600 before:content-[''] hover:font-bold"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <div></div>
      <div className="flex-left mb-7 flex flex-row items-center lg:w-1/2">
        <div className="float">
          <h3 className="mt-2 text-xl text-red-600">
            <strong>
              <u>LINKEDIN</u>
            </strong>{" "}
            <br></br>
            <a
              href="https://www.linkedin.com/school/cornell-university/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-l text-[#fa98a9] underline"
            >
              Cornell University
            </a>
          </h3>
          <br></br>
          <p className="mt-1 text-xl text-red-600">
            <strong>
              <u>PHONE</u>
            </strong>{" "}
            <br></br>
            <a
              href="tel:+1234567890"
              className="text-l text-[#fa98a9] underline"
            >
              (123) 456-7890
            </a>
          </p>
          <br></br>
          <br></br>
          <div className="mb-4">
            <Image
              src="/img.png"
              alt="Martha Pollack"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="w-full max-w-xs rounded-lg bg-[#fa98a9] p-8 text-left shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-red-600">EMAIL ME</h2>
          <form>
            <label className="mb-2 block text-sm text-white">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="mb-4 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#fa98a9]"
            />

            <label className="mb-2 block text-sm text-white">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="mb-4 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#fa98a9]"
            />

            <label className="mb-2 block text-sm text-white">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="mb-4 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#fa98a9]"
            />

            <label className="text mb-2 block text-white">Message</label>
            <textarea
              placeholder="Message"
              className="mb-4 h-32 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#fa98a9]"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-red-600 py-2 text-white transition-colors hover:bg-[#fa98a9]"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Email Section with mailto: link */}
    </div>
  );
};

export default Contacts;
