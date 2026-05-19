// export default function Membership() {
//     return (
//         <div className="min-h-screen bg-black text-white px-6 py-20">
//             <div className="flex items-center gap-3 mb-3">
//                 <div className="w-8 h-[2px] bg-red-500"></div>
//                 <h1 className="text-red-500 uppercase tracking-[3px]">
//                     Join Us
//                 </h1>
//             </div>
//             <h1 className="text-5xl font-bold uppercase">
//                 Membership & <span className="text-red-500">pricing</span>
//             </h1>
//             <p className="text-gray-400 mt-4 mb-10 text-lg">
//                 Choose the perfect membership plan to unlock your full potential at IronCore Gym. Whether you're just starting out or a seasoned athlete, we have a plan that fits your goals and lifestyle.
//             </p>
//             <div className="grid lg:grid-cols-3 gap-6">
//                 <div className="bg-gray-800 p-6 border border-gray-600 rounded-lg hover:border-red-500 hover:border-b-4 transition-all duration-300">
//                     <h2 className="text-xl font-bold mb-2">Monthly</h2>
//                     <div className="relative inline-block">
//                         <span className="absolute text-red-500 mt-2">₹</span>
//                         <p className="text-gray-400 m-2 font-bold text-5xl">999</p>
//                     </div>
//                     <p className="text-gray-400 mb-4">Access to gym facilities during staffed hours.</p>
//                     <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors duration-300">
//                         Join Now
//                     </button>
//                 </div>
//                 <div className="bg-gray-800 p-6 border border-gray-600 rounded-lg hover:border-red-500 hover:border-b-4 transition-all duration-300">
//                     <h2 className="text-xl font-bold mb-2">Premium</h2>
//                     <p className="text-gray-400 mb-4">24/7 gym access, group classes, and one free personal training session per month.</p>
//                     <p className="text-gray-400 mb-4">$59/month</p>
//                     <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors duration-300">
//                         Join Now
//                     </button>
//                 </div>
//                 <div className="bg-gray-800 p-6 border border-gray-600 rounded-lg hover:border-red-500 hover:border-b-4 transition-all duration-300">
//                     <h2 className="text-xl font-bold mb-2">Elite</h2>
//                     <p className="text-gray-400 mb-4">All Premium benefits plus unlimited personal training sessions and nutrition coaching.</p>
//                     <p className="text-gray-400 mb-4">$99/month</p>
//                     <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors duration-300">
//                         Join Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }





export default function Membership() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-[2px] bg-red-500"></div>

        <h1 className="text-red-500 uppercase tracking-[3px]">
          Pricing Plans
        </h1>
      </div>

      <h1 className="text-5xl font-bold uppercase">
        Membership <span className="text-red-500">& Plans</span>
      </h1>

      <p className="text-gray-400 mt-4 mb-10 text-lg max-w-3xl">
        Choose the perfect membership plan to unlock your full
        potential at IronCore Gym.
      </p>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Monthly */}
        <div className="bg-gray-900 p-8 border border-gray-700 rounded-xl hover:border-red-500 hover:border-b-4 transition-all duration-300">

          <h2 className="text-2xl font-bold uppercase mb-6 text-center">
            Monthly
          </h2>

          <div className="flex items-start justify-center mb-2">
            <span className="text-red-500 text-2xl mt-1 mr-1">
              ₹
            </span>

            <p className="text-6xl font-bold leading-none">
              999
            </p>
          </div>

          <p className="text-gray-400 text-center mb-8 uppercase tracking-[2px] text-sm">
            Per Month
          </p>

          <ul className="space-y-4 text-gray-300 mb-8">
            <li>✔ Full Gym Access</li>
            <li>✔ Locker Room</li>
            <li>✔ Group Classes</li>
            <li>✔ Fitness Assessment</li>
          </ul>

          <button className="w-full border border-gray-500 py-3 uppercase tracking-[2px] hover:bg-red-500 hover:border-red-500 transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Premium */}
        <div className="bg-red-950/30 p-8 border border-red-500 rounded-xl relative shadow-lg shadow-red-500/20">

          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 px-4 py-1 rounded-full text-xs uppercase tracking-[2px]">
            Most Popular
          </div>

          <h2 className="text-2xl font-bold uppercase mb-6 text-center">
            3 Months
          </h2>

          <div className="flex items-start justify-center mb-2">
            <span className="text-red-500 text-2xl mt-1 mr-1">
              ₹
            </span>

            <p className="text-6xl font-bold ">
              2499
            </p>
          </div>

          <p className="text-gray-400 text-center mb-8 uppercase tracking-[2px] text-sm">
            Save ₹498
          </p>

          <ul className="space-y-4 text-gray-300 mb-8">
            <li>✔ Full Gym Access</li>
            <li>✔ Locker Room</li>
            <li>✔ All Group Classes</li>
            <li>✔ 1 PT Session/month</li>
            <li>✔ Diet Consultation</li>
          </ul>

          <button className="w-full bg-red-500 py-3 uppercase tracking-[2px] hover:bg-red-600 transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Annual */}
        <div className="bg-gray-900 p-8 border border-gray-700 rounded-xl hover:border-red-500 hover:border-b-4 transition-all duration-300">

          <h2 className="text-2xl font-bold uppercase mb-6 text-center">
            Annual
          </h2>

          <div className="flex items-start justify-center mb-2">
            <span className="text-red-500 text-2xl mt-1 mr-1">
              ₹
            </span>

            <p className="text-6xl font-bold leading-none">
              7999
            </p>
          </div>

          <p className="text-gray-400 text-center mb-8 uppercase tracking-[2px] text-sm">
            Best Value
          </p>

          <ul className="space-y-4 text-gray-300 mb-8">
            <li>✔ Full Gym Access</li>
            <li>✔ Locker Room</li>
            <li>✔ Unlimited Classes</li>
            <li>✔ 4 PT Sessions/month</li>
            <li>✔ Full Diet Plan</li>
          </ul>

          <button className="w-full border border-gray-500 py-3 uppercase tracking-[2px] hover:bg-red-500 hover:border-red-500 transition-all duration-300">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
}