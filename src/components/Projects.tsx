import React, { useState } from "react";

const Projects: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState("");

    // モーダルを開く関数
    const openModal = (imageSrc: string) => {
        setModalImageSrc(imageSrc);
        setIsModalOpen(true);
    };
    
    // モーダルを閉じる関数
    const closeModal = () => {
        setIsModalOpen(false);
        setModalImageSrc("");
    };

    return (
        <section id="projects" className="p-8 bg-gray-900 rounded-lg shadow-lg mt-8">
            {/* セクションタイトル */}
            <div className="text-center py-6">
                <h2 className="text-4xl font-bold text-white">Projects</h2>
            </div>

            {/* Shoogi プロジェクト */}
            <div className="bg-gray-700 rounded-lg p-6 shadow-lg mb-8">
                <div className="mb-4">
                    <h3 className="text-3xl font-semibold text-white text-center">Shoogi</h3>
                </div>
                <div className="text-white leading-relaxed text-lg text-center">
                    <p className="mb-4">
                        このプログラムは、Pythonを用いて構築された、極東で人気のボードゲームである将棋もどき "Shooogi" を遊ぶことができるコマンドラインゲームです。
                    </p>
                    <p className="mb-6">
                        プレイヤーが動かしたい駒と動かしたい場所を入力することで、駒を動かすことができます。
                    </p>
                    <a
                        href="https://colab.research.google.com/drive/1fROR_gAEVYoCMf21WYpQ4NEtmNDsS_pm?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Play on Google Colab
                    </a>
                </div>
            </div>

            {/* Organisator プロジェクト */}
            <div className="bg-gray-700 rounded-lg p-6 shadow-lg flex flex-col md:flex-row items-center">
                {/* 画像 */}
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <img
                        src="img/Organisator.png" // 実際の画像パスに置き換えてください
                        alt="Organisator Screenshot"
                        className="w-64 h-auto rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105" // ここに変化を加えた
                        onClick={() => openModal("img/Organisator.png")}
                    />
                </div>
                {/* 説明 */}
                <div className="text-white leading-relaxed text-lg text-center md:text-left">
                    <h3 className="text-3xl font-semibold mb-4">Organisator</h3>
                    <p className="mb-4">
                        このプロジェクトは、SQLiteとNode.jsを使用して構築された、 自分たちがほしいと思った機能をつけたウェブアプリです。
                    </p>
                    <p className="mb-6">
                        課題管理や行事把握等を効率的に行うことができます。
                    </p>
                    <a
                        href="https://github.com/misorange/Organisator" // 実際のGitHubリポジトリのリンクに置き換えてください
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>

            {/* モーダル */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <img
                            src={modalImageSrc}
                            alt="Expanded View"
                            className="max-w-full max-h-full rounded-lg shadow-lg"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
