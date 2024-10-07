import Image from "next/image";
import image from "../../../public/martha_fun_facts.png";
import Link from "next/link";

const FunFacts = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white to-pink-100 p-4 md:p-8"
    >
      {/* Header */}
      <header className="mb-8 flex flex-col items-center justify-between text-center md:flex-row md:text-left">
        <h1 className="mb-4 border-b-2 border-rose-300 pb-1 text-3xl text-rose-700 md:mb-0 md:text-4xl">
          Martha Pollack&#39;s Portfolio
        </h1>
        <nav className="flex space-x-6 text-lg font-semibold text-rose-500 md:space-x-12 md:text-xl">
          <Link href="/about" className="transition-all hover:text-rose-700">
            ABOUT
          </Link>
          <Link
            href="/achievements"
            className="transition-all hover:text-rose-700"
          >
            ACHIEVEMENTS
          </Link>
          <Link href="/fun-facts" className="relative pb-1 text-rose-700">
            FUN FACTS
            <span
              className="absolute left-0 top-[-8px] h-[3px] w-full bg-customPink"
            ></span>
          </Link>
          <Link href="/contacts" className="transition-all hover:text-rose-700">
            CONTACT
          </Link>
        </nav>
      </header>

      {/* Content Section */}
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <Image
            src={image}
            alt="Martha Pollack"
            width={400}
            height={400}
            className="h-auto w-full shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* Facts Section */}
        <div className="ml-auto w-full bg-pink-200 p-6 shadow-lg lg:w-1/2 lg:p-8">
          <div className="space-y-8">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-rose-700 md:text-4xl">
                FACT #1:
              </h2>
              <hr className="mb-4 border-2 border-rose-700" />
              <p className="text-base text-gray-800 md:text-lg">
                <strong>She’s an expert in AI.</strong> Pollack is known for her
                research in artificial intelligence, particularly in the areas
                of knowledge representation and reasoning.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-2xl font-bold text-rose-700 md:text-4xl">
                FACT #2:
              </h2>
              <hr className="mb-4 border-2 border-rose-700" />
              <p className="text-base text-gray-800 md:text-lg">
                <strong>An advocate for women in STEM.</strong> Pollack is an
                advocate for increasing diversity in technology, working to
                promote the participation of women in STEM fields.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-2xl font-bold text-rose-700 md:text-4xl">
                FACT #3:
              </h2>
              <hr className="mb-4 border-2 border-rose-700" />
              <p className="text-base text-gray-800 md:text-lg">
                <strong>She has an interdisciplinary focus.</strong> Pollack
                emphasizes the importance of interdisciplinary collaboration,
                combining computer science with fields like social science and
                engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
