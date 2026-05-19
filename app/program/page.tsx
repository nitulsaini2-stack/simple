export default function Program() {
  return (
    <>
      <div className="bg-black text-white px-6 py-20">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[2px] bg-red-500"></div>
          <h1 className="text-red-500 uppercase tracking-[3px]">
            what we offer
          </h1>
        </div>
        <h1 className="text-5xl font-bold uppercase">
          Programs & <span className="text-red-500">services</span>
        </h1>
        <div className="grid lg:grid-cols-5 gap-2 mt-10">
          <div className="bg-gray-800 p-6 border border-transparent border-b-4 border-b-transparent rounded-lg hover:border-red-500 hover:border-b-red-500 hover:-translate-y-[2px] transition-all duration-300">
            <div className="img-icon w-[50px] h-[50px] flex items-center justify-center text-4xl">🏋️</div>
            <h2 className="text-xl font-bold mb-2">weight training</h2>
            <p className="text-gray-400">Build serious strength with access to free weights, machines, and expert programming tailored to your goals.</p>
          </div>
          <div className="bg-gray-800 p-6 border border-transparent border-b-4 border-b-transparent rounded-lg hover:border-red-500 hover:border-b-red-500 hover:-translate-y-[2px] transition-all duration-300">
            <div className="img-icon w-[50px] h-[50px] flex items-center justify-center text-4xl">🚴</div>
            <h2 className="text-xl font-bold mb-2">Cardio</h2>
            <p className="text-gray-400">Burn fat and boost endurance with treadmills, cycles, ellipticals, and high-intensity cardio sessions.</p>
          </div>
          <div className="bg-gray-800 p-6 border border-transparent border-b-4 border-b-transparent rounded-lg hover:border-red-500 hover:border-b-red-500 hover:-translate-y-[2px] transition-all duration-300">
            <div className="img-icon w-[50px] h-[50px] flex items-center justify-center text-4xl">🎯</div>
            <h2 className="text-xl font-bold mb-2">personal training</h2>
            <p className="text-gray-400">One-on-one sessions with certified trainers who craft custom plans, track progress, and keep you accountable.</p>
          </div>
           <div className="bg-gray-800 p-6 border border-transparent border-b-4 border-b-transparent rounded-lg hover:border-red-500 hover:border-b-red-500 hover:-translate-y-[2px] transition-all duration-300">
            <div className="img-icon w-[50px] h-[50px] flex items-center justify-center text-4xl">🧘</div>
            <h2 className="text-xl font-bold mb-2">Yoga</h2>
            <p className="text-gray-400">Restore balance, improve flexibility, and calm the mind in our dedicated yoga studio with expert instructors.</p>
          </div>
          <div className="bg-gray-800 p-6 border border-transparent border-b-4 border-b-transparent rounded-lg hover:border-red-500 hover:border-b-red-500 hover:-translate-y-[2px] transition-all duration-300">
            <div className="img-icon w-[50px] h-[50px] flex items-center justify-center text-4xl">💃</div>
            <h2 className="text-xl font-bold mb-2">Zumba</h2>
            <p className="text-gray-400">High-energy dance fitness classes that torch calories while having the time of your life. No experience needed.</p>
          </div>
        </div>
      </div>
    </>
  );
}
