// components/MainContent.js
const MainContent = () => {
    return (
      <div className="text-white max-w-3xl mx-auto md:mx-0">
        <h1 className="text-6xl font-bold mb-4">Hey</h1>
        <h1 className="text-6xl font-bold mb-4">I’m <span className="text-cyan-500">sunil</span>,</h1>
        <h1 className="text-6xl font-bold mb-4">Full-Stack Developer</h1>
        <p className="text-gray-400 mt-6">I help businesses grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done,</p>
        <button className="mt-6 bg-transparent border-2 border-cyan-500 text-cyan-500 px-6 py-3 rounded-full hover:bg-cyan-500 hover:text-gray-800 transition duration-300">
          Let’s Talk
          <svg className="h-6 w-6 inline ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 10.882l7.997-4.998A2 2 0 0016.005 4H3.995a2 2 0 00-1.992 1.884z" />
            <path d="M18 8.118l-8 5-8-5V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </button>
        <div className="mt-10 flex space-x-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">4</span>
            <span className="text-gray-400">Programming Languages</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">6</span>
            <span className="text-gray-400">Development Tools</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">8</span>
            <span className="text-gray-400">Years of Experience</span>
          </div>
        </div>
      </div>
    )
  }
  
  export default MainContent
  