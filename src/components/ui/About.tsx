
// components/AboutMe.js
const AboutMe = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold text-cyan-500 mb-4">About Me</h1>
              <div className="bg-gray-900 p-6 rounded-lg">
                <p className="text-green-500 mb-4">Hello!</p>
                <p className="text-gray-400 mb-4">
                  My name is Sunil and I specialize in web development that utilizes <span className="text-cyan-500">HTML</span>, <span className="text-cyan-500">CSS</span>, <span className="text-cyan-500">JS</span>, and <span className="text-cyan-500">REACT</span> etc.
                </p>
                <p className="text-gray-400 mb-4">
                  I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
                </p>
                <p className="text-gray-400 mb-4">
                  When I'm not coding, I am <span className="text-cyan-500">writing blogs</span>, reading, or picking up some new hands-on art project like <span className="text-cyan-500">photography</span>.
                </p>
                <p className="text-gray-400">
                  I like to have my perspective and belief systems challenged so that I see the world through new eyes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="rounded-lg shadow-lg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMvQNmpgBHeZjz65IKEPyDpvQ8FCHSdhm6sn_lPonpQ&s"
              alt="Coding"
            />
          </div>
        </div>
      </div>
    )
  }
  
  export default AboutMe
  