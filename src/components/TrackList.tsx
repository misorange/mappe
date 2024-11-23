import React, { useState } from 'react';

const Skills: React.FC = () => {
  // 各トラックの設定
  const [tracks] = useState([
    { id: 1, name: 'Python', icon: '/img/python_logo.svg' },
    { id: 2, name: 'C#', icon: '/img/csharp_logo.svg' },
    { id: 3, name: 'JavaScript', icon: '/img/javascript_logo.svg' },
  ]);

  // 各トラックのボタン状態を管理（初期状態はすべて false）
  const [activeButtons, setActiveButtons] = useState(
    tracks.map(() => ({ mute: false, solo: false }))
  );

  // ボタンがクリックされたときの処理
  const toggleButton = (trackIndex: number, type: 'mute' | 'solo') => {
    setActiveButtons((prevState) =>
      prevState.map((state, index) =>
        index === trackIndex
          ? { ...state, [type]: !state[type] }
          : state
      )
    );
  };

  return (
    <div className="bg-gray-900 text-white flex">
      {/* サイドバー */}
      <div className="w-64 border-r border-gray-800">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-lg font-bold">Skills</h2>
        </div>
        {tracks.map((track, index) => (
          <div
            className="flex items-center p-2 border-b border-gray-800 h-16"
            key={track.id}
          >
            {/* アイコン */}
            <div className="w-8 text-center">
              <img
                src={track.icon}
                alt={`${track.name} icon`}
                className="w-6 h-6 mx-auto"
              />
            </div>
            {/* トラック名 */}
            <div className="flex-grow">
              <span>{track.name}</span>
            </div>
            {/* ボタン */}
            <div className="flex items-center space-x-1">
              <button
                className={`px-2 py-1 rounded ${
                  activeButtons[index].mute
                    ? 'bg-red-500 text-white'
                    : 'text-gray-400'
                }`}
                onClick={() => toggleButton(index, 'mute')}
              >
                M
              </button>
              <button
                className={`px-2 py-1 rounded ${
                  activeButtons[index].solo
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400'
                }`}
                onClick={() => toggleButton(index, 'solo')}
              >
                S
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* メインコンテンツ */}
      <div className="flex-grow p-4 flex flex-col">
        <h3 className="bg-gray-800 text-center text-xl pb-4">Details</h3>
        <div className="grid grid-cols-12 gap-0">
          {[...Array(12)].map((_, index) => (
            <div
              className="relative flex items-center justify-center h-80"
              key={index}
            >
              {/* 数字 */}
              <span className="absolute -top-4 text-xs">{index * 2 + 1}</span>
              {/* 線 */}
              <div className="absolute top-0 left-0 w-full h-full border-l border-gray-600 opacity-50"></div>
              {index === 0 && (
                <>
                  <span className="absolute top-2 left-0.5 bg-gray-900 px-1 whitespace-nowrap p-3">
                    Pythonを用いて、Discord Botの開発団体で機能実装を行った経験があります。
                  </span>
                  <span className="absolute top-16 left-0.5 bg-gray-900 px-1 whitespace-nowrap p-5">
                    中学時代、Unityを触り、文化祭でゲームを展示しました。
                  </span>
                  <span className="absolute top-38 left-0.5 bg-gray-900 px-1 whitespace-nowrap p-4">
                    学生向けの課題等管理アプリの作成に使用しました。
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
