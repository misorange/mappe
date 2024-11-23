import React from "react";

const Interests: React.FC = () => {
    return (
        <section id="interests" className="p-6 bg-gray-800 rounded-lg shadow-lg mt-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Interests</h2>
            
            <div className="bg-gray-800 flex flex-row w-full items-start space-x-8">
                {/* メイン画像 */}
                <div className="flex-shrink-0">
                    <img
                        src="img/piano_roll.png" // 正しいパスに修正
                        alt="Interest 1"
                        className="h-96 w-auto object-contain rounded-lg shadow-lg transition-transform duration-300"
                    />
                </div>

                {/* スキルセクション */}
                <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full">
                    {/* Track 1 - Java */}
                    <div className="flex flex-col items-center bg-gray-900 rounded-lg p-6 shadow-lg justify-center hover:bg-gray-700 transition duration-300">
                        <img
                            src="img/java_logo.svg"
                            alt="Java"
                            className="w-20 h-20 mb-4 transition-transform duration-300 hover:scale-110"
                        />
                        <span className="font-semibold text-xl text-white">Java</span>
                    </div>

                    {/* Track 2 - Go */}
                    <div className="flex flex-col items-center bg-gray-900 rounded-lg p-6 shadow-lg justify-center hover:bg-gray-700 transition duration-300">
                        <img
                            src="img/go_logo.svg"
                            alt="Go"
                            className="w-16 h-16 mb-4 transition-transform duration-300 hover:scale-110"
                        />
                        <span className="font-semibold text-xl text-white">Go</span>
                    </div>

                    {/* Track 3 - React */}
                    <div className="flex flex-col items-center bg-gray-900 rounded-lg p-6 shadow-lg justify-center hover:bg-gray-700 transition duration-300">
                        <img
                            src="img/react_logo.svg"
                            alt="React"
                            className="w-16 h-16 mb-4 transition-transform duration-300 hover:scale-110"
                        />
                        <span className="font-semibold text-xl text-white">React</span>
                    </div>

                    {/* Track 4 - English */}
                    <div className="flex flex-col items-center bg-gray-900 rounded-lg p-6 shadow-lg justify-center hover:bg-gray-700 transition duration-300">
                        <img
                            src="img/english_logo.svg"
                            alt="English"
                            className="w-20 h-20 mb-4 transition-transform duration-300 hover:scale-110"
                        />
                        <span className="font-semibold text-xl text-white">English</span>
                    </div>

                    {/* Track 5 - Deutsch */}
                    <div className="flex flex-col items-center bg-gray-900 rounded-lg p-6 shadow-lg justify-center hover:bg-gray-700 transition duration-300">
                        <img
                            src="img/Deutsch_logo.svg"
                            alt="Deutsch"
                            className="w-20 h-20 mb-4 transition-transform duration-300 hover:scale-110"
                        />
                        <span className="font-semibold text-xl text-white">Deutsch</span>
                    </div>

                    {/* Track 6 - DTM */}
                    <div className="flex flex-col items-center bg-gray-900 rounded-lg p-6 shadow-lg justify-center hover:bg-gray-700 transition duration-300">
                        <img
                            src="img/Cuase_logo.png"
                            alt="DTM"
                            className="w-20 h-20 mb-4 transition-transform duration-300 hover:scale-110"
                        />
                        <span className="font-semibold text-xl text-white">DTM</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Interests;
