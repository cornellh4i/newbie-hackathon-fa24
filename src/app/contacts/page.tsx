import Image from "next/image";
import image from "../../../public/img.png";
import Link from "next/link";

const Contacts = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between py-8 shadow-md">
      {/* Profile Section */}
      <nav className="flex w-full items-center justify-between bg-white p-6 shadow-md">
        <h1 className="text-3xl font-bold text-[#9B142C]">
          <u>Martha Pollack&#39;s</u> Portfolio
        </h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link
              href="/about"
              className="font-normal text-[#9B142C] opacity-50 hover:font-bold"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              href="/achievements"
              className="font-normal text-[#9B142C] opacity-50 hover:font-bold"
            >
              ACHIEVEMENTS
            </Link>
          </li>
          <li>
            <Link
              href="/fun-facts"
              className="font-normal text-[#9B142C] opacity-50 hover:font-bold"
            >
              FUN FACTS
            </Link>
          </li>
          <li className="relative">
            <Link
              href="/contacts"
              className="font-bold text-[#9B142C] before:absolute before:left-0 before:top-[-10px] before:h-1 before:w-full before:bg-[#9B142C] before:content-[''] hover:font-bold"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mb-10 mt-10 flex w-full items-center">
        <div className="flex-left float ml-5 w-1/4">
          <h3 className="mt-2 text-xl text-[#9B142C]">
            <strong>
              <u>LINKEDIN</u>
            </strong>{" "}
            <br></br>
            <a
              href="https://www.linkedin.com/school/cornell-university/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-l text-[#DF4A64] underline"
            >
              Cornell University
            </a>
          </h3>
          <br></br>
          <p className="mt-1 text-xl text-[#9B142C]">
            <strong>
              <u>PHONE</u>
            </strong>{" "}
            <br></br>
            <a
              href="tel:+1234567890"
              className="text-l text-[#DF4A64] text-[#fa98a9] underline"
            >
              (123) 456-7890
            </a>
          </p>
          <br></br>
          <br></br>
          <div className="mb-4">
            <Image src={image} alt="Martha Pollack" width={300} height={300} />
          </div>
        </div>
        <div className="flex w-1/2"></div>
        <div className="flex-right mr-5 w-1/4 max-w-xs rounded-3xl rounded-lg bg-[#fa98a9] p-8 text-left shadow-lg">
          <h2 className="mb-4 text-xl font-semibold text-[#9B142C] text-red-600">
            EMAIL ME
          </h2>
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
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="float w-1/2 rounded-full bg-[#DF4A64] py-2 text-white transition-colors hover:bg-[#FFC0CB]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Email Section with mailto: link */}
    </div>
  );
};

export default Contacts;
