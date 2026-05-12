import { Camera, CircleEllipsis, NotebookPen, Play } from "lucide-react";
export default function Footer() {
  return (
    <div className="bg-black text-white py-10 px-6">
      <div className="grid lg:grid-cols-4  gap-4">
        <div className="mt-2">
          <h1 className="text-2xl font-bold uppercase tracking-[3px] mb-2">
            IRON<span className="text-red-500">CORE</span>
          </h1>
          <div className="text-gray-400 text-sm">
            <p>IronCore Gym — Meerut's premier fitness destination.<br /> Forge discipline, build strength, live better.</p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div>
            <a href="/"><Camera  size={24} className="hover:text-red-500"/></a>
            </div>
             <div>
            <a href="/"><NotebookPen size={24} className="hover:text-red-500"/></a>
            </div>
            <div>
            <a href="/"><Play size={24} className="hover:text-red-500"/></a>
            </div>
             <div>
            <a href="/contact"><CircleEllipsis size={24} className="hover:text-red-500"/></a>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h1 className="text-lg font-bold uppercase tracking-[3px] mb-2">
            Quick Links
          </h1>
          <ul className="text-gray-400 text-sm">
            <li className="mb-1 hover:text-red-500 transition duration-300">
              <a href="/about">About Us</a>
            </li>
            <li className="mb-1 hover:text-red-500 transition duration-300">
              <a href="/program">Programs</a>
            </li>
            <li className="mb-1 hover:text-red-500 transition duration-300">
              <a href="/membership">Membership</a>
            </li>
            <li className="mb-1 hover:text-red-500 transition duration-300">
              <a href="/trainer">Trainers</a>
            </li>
            <li className="mb-1 hover:text-red-500 transition duration-300">
              <a href="/gallery">Gallery</a>
            </li>
            <li className="mb-1 hover:text-red-500 transition duration-300">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h1 className="text-lg font-bold uppercase tracking-[3px] mb-2">
            programs
          </h1>
          <ul className="text-gray-400 text-sm">
            <li className="mb-1 hover:text-red-500 transition duration-300">
              <a href="/about">Weight Training</a>
            </li>
            <li className="mb-1 hover:text-red-500 transition duration-300">
              <a href="/program">Cardio</a>
            </li>
            <li className="mb-1 hover:text-red-500 transition duration-300">
              <a href="/membership">Personal Training</a>
            </li>
            <li className="mb-1 hover:text-red-500 transition duration-300">
              <a href="/trainer">Yoga</a>
            </li>
            <li className="mb-1 hover:text-red-500 transition duration-300">
              <a href="/gallery">Zumba</a>
            </li>
          </ul>
        </div>
        <div className="mt-2">
          <h1 className="text-lg font-bold uppercase tracking-[3px] mb-2">
            contact
          </h1>
          <div className="text-gray-400 text-sm">
            <p className="hover:text-red-500 transition duration-300">Phone: +1 234 567 890</p>
            <p className="hover:text-red-500 transition duration-300">Email: info@ironcore.com</p>
            <p className="hover:text-red-500 transition duration-300">Shri Ram Nagar, Meerut, Uttar Pradesh - 250001</p>
            <p className="hover:text-red-500 transition duration-300">What's App: +1 234 567 890</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} IronCore Gym. All rights reserved.
      </div>
      <div className="flex gap-4 mt-8 justify-center">
        <a
          href="/membership"
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3  font-semibold transition duration-300"
        >
          Join Now
        </a>

        <a
          href="/contact"
          className="border border-white text-white hover:bg-white hover:text-black px-8 py-3  font-semibold transition duration-300"
        >
          Free Trial
        </a>
        <a
          href="/contact"
          className="border border-white text-white hover:bg-white hover:text-black px-8 py-3  font-semibold transition duration-300"
        >
          Contact Us
        </a>            
    </div>
    </div>
  );
}
