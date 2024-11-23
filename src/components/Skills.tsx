import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const [tracks] = useState([
    { id: 1, name: 'Python', icon: 'img/python_logo.svg', description: 'Pythonを用いて、Discord Botの開発団体で機能実装を行った経験があります。' },
    { id: 2, name: 'C#', icon: 'img/csharp_logo.svg', description: '中学時代、Unityを触り、文化祭でゲームを展示しました。' },
    { id: 3, name: 'JavaScript', icon: 'img/javascript_logo.svg', description: '学生向けの課題等管理アプリの作成に使用しました。' },
  ]);

  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  return (
    <section id="skills">
    <div className="px-6 bg-gray-900 text-white">
      {/* ヘッダー */}
      <div className="text-center py-6">
        <h2 className="text-4xl font-bold">My Skills</h2>
      </div>

      <div className="flex">
        <div className="w-64 border-r border-gray-800">
          <div className="p-4 border-b border-gray-800">
            <h2 className="text-lg font-bold">Skills</h2>
          </div>
          {tracks.map((track) => (
            <div
              className={`flex items-center p-3 border-b border-gray-800 h-24 cursor-pointer ${
                selectedTrack === track.id ? 'bg-gray-700' : ''
              }`}
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
            >
              <div className="w-8 text-center">
                <img
                  src={track.icon}
                  alt={`${track.name} icon`}
                  className="w-8 h-8 mx-auto"
                />
              </div>
              <div className="flex-grow text-2xl p-1">
                <span>{track.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-grow p-4 flex flex-col">
          <h3 className="bg-gray-800 text-center text-xl pb-4">Details</h3>
          <div className="grid grid-cols-12 gap-0">
            {[...Array(12)].map((_, index) => (
              <div
                className="relative flex items-center justify-center h-80"
                key={index}
              >
                <span className="absolute -top-4 text-xs">{index * 2 + 1}</span>
                <div className="absolute top-0 left-0 w-full h-full border-l border-gray-600 opacity-50"></div>
                {selectedTrack === 1 && index === 0 && (
                  <motion.span
                    className="absolute top-8 left-0.5 bg-gray-900 px-1 whitespace-nowrap p-0.5 text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    Pythonを用いて、Discord Botの開発団体で機能実装を行った経験があります。
                  </motion.span>
                )}
                {selectedTrack === 2 && index === 0 && (
                  <motion.span
                    className="absolute top-8 left-0.5 bg-gray-900 px-1 whitespace-nowrap p-0.5 text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    中学時代、Unityを触り、文化祭でゲームを展示しました。
                  </motion.span>
                )}
                {selectedTrack === 3 && index === 0 && (
                  <motion.span
                    className="absolute top-8 left-0.5 bg-gray-900 px-1 whitespace-nowrap p-0.5 text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    学生向けの課題等管理アプリの作成に使用しました。
                  </motion.span>
                )}
              </div>
            ))}
          </div>
          {!selectedTrack && (
            <div className="mt-4 text-center text-gray-400">
              選択するスキルをクリックしてください。
            </div>
          )}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Skills;
