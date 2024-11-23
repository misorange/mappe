const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="bg-gray-800 text-white p-8">
      <div className="flex items-center">
        {/* 自画像 */}
        <div className="w-32 h-32 mr-6">
          <img
            src="img/misorange.png"
            alt="misorange"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        
        {/* 名前と所属 */}
        <div>
          <h2 className="text-3xl font-semibold mb-2">Hello, I'm misorange</h2>
          <p className="text-lg text-gray-400 mb-4">Second-year Student at Osaka Metropolitan University College of Technology</p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
