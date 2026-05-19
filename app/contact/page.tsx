import { MessageCircleCheck } from "lucide-react";

export default function contact() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="flex items-center gap-2 mb-3 ">
        <div className="w-8 h-[2px] bg-red-500 mb-1"></div>
        <p className="text-red-500 uppercase tracking-[3px]">Get In Touch</p>
      </div>
      <h1 className="uppercase tracking-[3px] text-5xl font-bold">
        Contact <span className="text-red-500">Us</span>
      </h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="gap-4 mt-10 border-t border-gray-700 pt-6 ml-4">
          <div className="flex gap-4 ml-4">
            <div>
              <div className="icon font-bold text-3xl">📞</div>
            </div>

            <div>
              <p className="text-gray-400 ">Phone</p>
              <p className="text-lg text-gray-300">+1 234 567 890</p>
              <p className="text-lg text-gray-300">+1 987 654 321</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6 ml-4">
            <div>
              <div className="icon font-bold text-3xl">📍</div>
            </div>

            <div>
              <p className="text-gray-400 ">Address</p>
              <p className="text-lg text-gray-300">
                IronCore Gym, Plot 12, Shastri Nagar <br /> Meerut, Uttar
                Pradesh – 250001
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-6 ml-4">
            <div>
              <div className="icon font-bold text-3xl">⏰</div>
            </div>

            <div>
              <p className="text-gray-400 ">Working Hours</p>
              <p className="text-lg text-gray-300">
                Monday - Friday: 6:00 AM - 10:00 AM <br /> Saturday - Sunday:
                8:00 AM - 9:00 AM
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-6 ml-4">
            <div>
              <div className="icon font-bold text-3xl">📧</div>
            </div>

            <div>
              <p className="text-gray-400 ">Email</p>
              <p className="text-lg text-gray-300">info@gym.com</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center ">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-6  px-6 py-6 w-[600px] bg-green-500 text-black rounded hover:bg-green-600 transition duration-300 justify-center flex items-center gap-2">
                  <MessageCircleCheck size={24} />
                  Chat on WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-2xl  shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Meerut,Uttar%20Pradesh&z=12&output=embed"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
