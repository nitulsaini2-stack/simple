import React from "react";
import Image from "next/image"; 
export default function Trainer() {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-20">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-[2px] bg-red-500"></div>

                <h1 className="text-red-500 uppercase tracking-[3px]">
                    Our Trainers
                </h1>
            </div>

            <h1 className="text-5xl font-bold uppercase">
                Meet Our <span className="text-red-500">& Expert Trainers</span>
            </h1>

            <p className="text-gray-400 mt-4 mb-10 text-lg max-w-3xl">
                Our team of expert trainers is here to guide you every step of the way.
            </p>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Trainer 1 */}
                <div className="bg-gray-900 p-6 border border-gray-700 rounded-xl hover:border-red-500 hover:border-b-4 hover:-translate-y-2 transition-all duration-300">
                    <Image
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80"
                        alt="Trainer 1"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                        width={600}
                        height={400}
                    />

                    <h2 className="text-2xl font-bold uppercase mb-2 text-center">
                        John Doe
                    </h2>

                    <p className="text-red-400 text-center mb-4 uppercase tracking-[2px] text-sm">
                        Strength & Conditioning Coach
                    </p>

                    <p className="text-gray-300 text-center">
                        With over 10 years of experience, John specializes in strength training and conditioning programs tailored to individual needs.
                    </p>
                </div>

                {/* Trainer 2 */}
                <div className="bg-gray-900 p-6 border border-gray-700 rounded-xl hover:border-red-500 hover:border-b-4 hover:-translate-y-2 transition-all duration-300">
                    <Image
                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"
                        alt="Trainer 2"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                        width={600}
                        height={400}
                    />

                    <h2 className="text-2xl font-bold uppercase mb-2 text-center">
                        Jane Smith
                    </h2>

                    <p className="text-red-400 text-center mb-4 uppercase tracking-[2px] text-sm">
                        Certified Personal Trainer
                    </p>

                    <p className="text-gray-300 text-center">
                        Jane is a certified personal trainer with a passion for helping clients achieve their fitness goals through personalized workout plans and nutrition guidance.
                    </p>
                </div>

                {/* Trainer 3 */}
                <div className="bg-gray-900 p-6 border border-gray-700 rounded-xl hover:border-red-500 hover:border-b-4 hover:-translate-y-2 transition-all duration-300">
                    <Image
                        src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80"
                        alt="Trainer 3"
                        className="w-full h-64 object-cover rounded-lg mb-4"
                        width={600}
                        height={400}
                    />

                    <h2 className="text-2xl font-bold uppercase mb-2 text-center">
                        Mike Johnson
                    </h2>

                    <p className="text-red-400 text-center mb-4 uppercase tracking-[2px] text-sm">
                        Yoga & Flexibility Expert
                    </p>

                    <p className="text-gray-300 text-center">
                        Mike is a yoga and flexibility expert who helps clients improve their mobility, reduce stress, and enhance overall well-being through tailored yoga sessions.
                    </p>
                </div>
            </div>
        </div>
    );
}

