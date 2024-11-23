/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',        // index.html を監視
    './src/**/*.{js,ts,jsx,tsx}', // src フォルダ内の JS, TS, JSX, TSX ファイルを監視
  ],
  theme: {
    extend: {animation: {
      'fade-in': 'fadeIn 1s ease-in-out'// アニメーションの追加
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },   // 初期状態
        '100%': { opacity: '1' },  // 最終状態
      }
    },
  },
  plugins: [],
}
}