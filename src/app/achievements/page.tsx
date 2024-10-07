import Link from "next/link";
import Image from "next/image";
import image1 from "../../../public/images/martha1.png";
import image2 from "../../../public/images/martha2.jpg";
import image3 from "../../../public/images/martha3.jpg";

export default function AchievementsPage() {
  return (
    <main
      className=""
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="bg-white shadow-md">
        <div className="flex flex-col items-center bg-white p-6 md:flex-row md:items-center md:justify-between">
          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold text-red-600 md:mb-0">
            Martha Pollacks Portfolio
          </h1>
          {/* Line below the title on mobile (hidden on desktop) */}
          <div className="mb-4 mt-2 w-full border-t-2 border-red-300 md:hidden"></div>
          {/* Navigation Links */}
          <ul className="flex w-full flex-col items-center space-y-1 md:w-auto md:flex-row md:space-x-6 md:space-y-0">
            {/* ABOUT Link with line above on desktop */}
            <li className="relative w-full md:w-auto">
              <Link
                href="/about"
                className="block w-full py-2 text-center text-red-300 hover:text-red-600 md:w-auto"
              >
                ABOUT
              </Link>
            </li>
            {/* Other Links */}
            <li className="w-full md:w-auto">
              <Link
                href="/achievements"
                className="block w-full border-red-600 py-2 text-center font-bold text-red-600 md:inline-block md:w-auto md:border-t-4 md:text-left"
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

      <div className="max-w-10xl flex min-h-screen w-full flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-start space-x-4">
            <Image
              src={image1}
              alt="Achievement 1"
              className="h-[272px] w-[272px] object-cover"
            />
            <div
              className="rounded-lg p-4"
              style={{ width: "960px", height: "251px", fontSize: "22px" }}
            >
              <div className="flex items-start justify-between">
                <h2
                  style={{ color: "rgba(155, 20, 44, 1)", fontSize: "28px" }}
                  className="text-xl font-bold"
                >
                  UNIVERSITY OF MICHIGAN
                </h2>
                <h2 className="text-xl font-bold">
                  VICE PRESIDENT OF ACADEMIC AFFAIRS
                </h2>
              </div>
              <hr
                className="mb-2"
                style={{
                  width: "182px",
                  border: "1px solid rgba(155, 20, 44, 1)",
                  fontSize: "22px",
                }}
              />
              <p className="text-gray-600">
                I was appointed provost and executive vice president for
                academic affairs at the University of Michigan in May 2013,
                where I also was professor of computer science and engineering
                in the College of Engineering, and professor of information in
                the School of Information. As the university&#39;s chief
                academic officer and chief budget officer, I oversaw the public
                research university&#39;s academic enterprise.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Image
              src={image2}
              alt="Achievement 2"
              className="h-[272px] w-[272px] object-cover"
            />
            <div
              className="rounded-lg p-4"
              style={{ width: "960px", height: "251px", fontSize: "22px" }}
            >
              <div className="flex items-start justify-between">
                <h2
                  style={{ color: "rgba(155, 20, 44, 1)", fontSize: "28px" }}
                  className="text-xl font-bold"
                >
                  AMERICAN ASSOCIATION FOR THE ADVANCEMENT OF SCIENCE
                </h2>
                <h2 className="text-xl font-bold">FELLOW</h2>
              </div>
              <hr
                className="mb-2"
                style={{
                  width: "182px",
                  border: "1px solid rgba(155, 20, 44, 1)",
                  fontSize: "22px",
                }}
              />
              <p className="text-gray-600">
                I provide funding to projects that deploy &#34;learning
                analytics,&#34; the application of data mining techniques to
                student data, to develop new approaches to teaching, and I
                commissioned an academic innovation initiative that supports the
                development and deployment of programs and systems for engaged
                and personalized learning.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Image
              src={image3}
              alt="Achievement 3"
              className="h-[272px] w-[272px] object-cover"
            />
            <div
              className="rounded-lg p-4"
              style={{ width: "960px", height: "251px", fontSize: "22px" }}
            >
              <div className="flex items-start justify-between">
                <h2
                  style={{ color: "rgba(155, 20, 44, 1)", fontSize: "28px" }}
                  className="text-xl font-bold"
                >
                  JOURNAL OF ARTIFICIAL INTELLIGENCE
                </h2>
                <h2 className="text-xl font-bold">EDITOR-IN-CHIEF</h2>
              </div>
              <hr
                className="mb-2"
                style={{
                  width: "182px",
                  border: "1px solid rgba(155, 20, 44, 1)",
                  fontSize: "22px",
                }}
              />
              <p className="text-gray-600">
                My research has been in the area of artificial intelligence,
                where I have published widely on topics including automated
                planning, natural-language processing, temporal reasoning and
                constraint satisfaction. A particular focus of her work has been
                the design of intelligent technology to assist people with
                cognitive impairment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
