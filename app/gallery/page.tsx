import Image from "next/image";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-[2px] bg-red-500"></div>

        <h1 className="text-red-500 uppercase tracking-[3px]">Our Gallery</h1>
      </div>

      <h1 className="text-5xl font-bold uppercase mb-4">
        Gym <span className="text-red-500">Gallery</span>
      </h1>

      <p className="text-gray-400 mb-12 max-w-3xl">
        Explore our premium gym environment, modern equipment, and fitness
        lifestyle moments.
      </p>

      {/* Gallery Layout */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Left Large Image */}
        <div className="lg:col-span-1">
          <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
            alt="Gym Dumbbells"
            width={800}
            height={900}
            className="w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* Middle Column */}
        <div className="grid gap-4">
          <Image
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
            alt="Gym Training"
            width={800}
            height={400}
            className="w-full h-[240px] object-cover rounded-md hover:scale-105 transition-all duration-300"
          />

          <Image
            src="https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80"
            alt="Running"
            width={800}
            height={400}
            className="w-full h-[240px] object-cover rounded-md hover:scale-105 transition-all duration-300"
          />
        </div>

        {/* Right Column */}
        <div className="grid gap-4">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
            alt="Deadlift"
            width={800}
            height={400}
            className="w-full h-[240px] object-cover rounded-md hover:scale-105 transition-all duration-300"
          />

          <Image
            src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80"
            alt="Workout"
            width={800}
            height={400}
            className="w-full h-[240px] object-cover rounded-md hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
      <div className="mt-22">
        <div className="flex  text-sm items-center gap-2">
          <div className="bg-red-500 w-8 h-[2px]"></div>
          <div className="text-red-400 uppercase tracking-[3px]">
            client stores
          </div>
        </div>
        <div className="text-4xl font-bold uppercase mt-2">
          What members <span className="text-red-500">say</span>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 mt-8">
          {/* Client Testimonial 1 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-xl relative hover:translate-y-2 transition-all duration-300">
            <span className="absolute top-2 right-4 text-red-700 text-5xl font-bold">
              "
            </span>

            <div className="text-yellow-400 text-xl mb-6">★★★★★</div>

            <p className="text-gray-300 text-md mb-8">
              The best gym experience I've ever had! The trainers are
              knowledgeable and the community is so supportive. I've seen
              amazing results in just a few months.
            </p>
            <div>
                <h1 className="text-white font-bold text-xl">Rohit Mehta</h1>
                <p className="text-red-500">Member since 2023</p>
            </div>
          </div>

          {/* Client Testimonial 2 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-xl relative hover:translate-y-2 transition-all duration-300">
            {/* Quote Icon */}
            <span className="absolute top-2 right-4 text-red-700 text-5xl font-bold">
              "
            </span>

            {/* Stars */}
            <div className="text-yellow-400 text-xl mb-6">★★★★★</div>

            {/* Review Text */}
            <p className="text-gray-300 text-md mb-8">
              Amazing trainers and environment. IronCore completely changed my
              life. Lost 18 kg in 4 months with Arjun's fat loss program. The
              energy here is unreal!
            </p>

            {/* User */}
            <div>
              <h2 className="text-white font-bold text-xl">Aditya Kapoor</h2>

              <p className="text-red-500">Strength Members </p>
            </div>
          </div>

          {/* Client Testimonial 3 */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-xl relative hover:translate-y-2 transition-all duration-300">
            {/* Quote Icon */}
            <span className="absolute top-2 right-4 text-red-700 text-5xl font-bold">
              "
            </span>

            {/* Stars */}
            <div className="text-yellow-400 text-xl mb-6">★★★★★</div>

            {/* Review Text */}
            <p className="text-gray-300 text-md mb-8">
              The best gym experience I've ever had! The trainers are
              knowledgeable and the community is so supportive. I've seen
              amazing results in just a few months.
            </p>

            {/* User */}
            <div>
              <h2 className="text-white font-bold text-xl">Neha Gupta</h2>

              <p className="text-red-500">Yoga Member</p>
            </div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 max-w-xl relative hover:translate-y-2 transition-all duration-300">
            {/* Quote Icon */}
            <span className="absolute top-2 right-4 text-red-700 text-5xl font-bold">
              "
            </span>

            {/* Stars */}
            <div className="text-yellow-400 text-xl mb-6">★★★★★</div>

            {/* Review Text */}
            <p className="text-gray-300 text-md mb-8">
              IronCore is hands down the best gym in town. The trainers are
              incredibly supportive and the facilities are top-notch. I've
              achieved my fitness goals faster than I ever thought possible!
            </p>

            {/* User */}
            <div>
              <h2 className="text-white font-bold text-xl">Sanjay Rawat</h2>

              <p className="text-red-500">Annual Member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}