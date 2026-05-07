import React from "react";
import cover from "../../assets/medlink cover.png";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-[50px] md:px-[120px] px-6 flex flex-col md:flex-row justify-between items-center gap-10">

            {/*left side*/}
            <div className="md:w-[45%] w-full">

                <h1 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight"> Welcome to the Health Community</h1>

                {/* Buttons */}
                <div className="mt-10 flex flex-col gap-4">

                    <div className="py-3 bg-white rounded-3xl w-full text-black text-center cursor-pointer hover:bg-gray-50 shadow-sm"> Google Button</div>

                    <div className="py-3 bg-white rounded-3xl border-2 border-gray-300 text-center text-black hover:bg-gray-100 cursor-pointer"> Sign in with email</div>
                </div>

                {/* terms */}
                <p className="mt-6 text-sm text-gray-600 leading-6">Clicking Contiune to join or sign in, you agree to{" "}
                    <span className="text-blue-800 cursor-pointer hover:underline"> MedLink's User Agreement</span>, {" "}
                    <span className="text-blue-800 cursor-pointer hover:underline">Private Policy</span>, and{" "}
                    <span className="text-blue-800 cursor-pointer hover:underline">Cookie Policy</span>.
                </p>

                {/* join */}
                <p className="mt-6 text-lg text-center md:text-left">
                    New to MedLink?{" "}
                    <span className="text-blue-800 cursor-pointer hover:underline">Join Now</span>
                </p>
            </div>

            {/* image on the right side */}
            <div className="md:w-[50%] w-full flex justify-center">
                <img src={cover} alt="HealthCare Professionals" className="w-full max-w-[600px] object-contain"/>
            </div>
        </div>
    )
}

export default LandingPage