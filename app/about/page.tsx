import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="relative">

          <div className="relative w-full h-[500px] rounded overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80"
              alt="Gym"
              fill
              className="object-cover"
            />
          </div>

          {/* Experience Circle */}
          <div className="absolute -bottom-8 right-[-30px] w-32 h-32 bg-red-600 rounded-full flex flex-col items-center justify-center shadow-2xl">
            <h1 className="text-4xl font-bold">8+</h1>
            <p className="text-xs tracking-[4px] uppercase">
              Years
            </p>
          </div>

        </div>

        {/* Right Content */}
        <div>

          {/* Small Heading */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-red-500"></div>

            <p className="text-red-500 uppercase tracking-[5px] text-sm">
              About Us
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase leading-none mb-10">
            More Than A{" "}
            <span className="text-red-600">Gym</span>
          </h1>

          {/* Paragraphs */}
          <p className="text-gray-400 leading-9 mb-8 text-lg">
            IronCore Gym was founded with one mission:
            to create a space where ordinary people achieve
            extraordinary results. Our state-of-the-art
            facility, expert coaching team, and relentless
            community will push you further than you thought
            possible.
          </p>

          <p className="text-gray-400 leading-9 mb-10 text-md">
            Whether you're just starting out or a seasoned
            athlete, IronCore has the equipment, programs,
            and support to help you reach your peak — and
            go beyond.
          </p>

          {/* Features */}
          <div className="space-y-5 mb-10">

            <div className="flex items-center gap-4">
              <span className="text-red-500 text-xl">✓</span>
              <p className="tracking-wide">
                World-Class Equipment & Facilities
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-red-500 text-xl">✓</span>
              <p className="tracking-wide">
                Expert Certified Personal Trainers
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-red-500 text-xl">✓</span>
              <p className="tracking-wide">
                Group Classes 7 Days a Week
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-red-500 text-xl">✓</span>
              <p className="tracking-wide">
                Nutritional Guidance & Support
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-red-500 text-xl">✓</span>
              <p className="tracking-wide">
                Open 5 AM – 11 PM Daily
              </p>
            </div>

          </div>

          {/* Button */}
          <button className="bg-red-600 hover:bg-red-700 px-10 py-4 uppercase tracking-[3px] font-bold transition duration-300">
            Start Today
          </button>

        </div>

      </div>
    </section>
  );
}