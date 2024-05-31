// components/Sidebar.js
const Sidebar = () => {
    return (
      <div className="flex flex-col items-center space-y-4 fixed top-1/4 left-0 p-4 bg-gray-800 rounded-r-lg">
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4a3 3 0 016 0h3a2 2 0 012 2v11a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h2zm2-1a2 2 0 114 0H7zm7 4H6v2h8V7zm0 3H6v2h8v-2zm-4 3H6v2h4v-2z" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3a1 1 0 011 1v12a1 1 0 01-2 0V4a1 1 0 011-1zM5 9a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm10 0a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1z" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2-1v10h12V4H4z" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H3zm0 2h14v10H3V5zm3 2a1 1 0 100 2 1 1 0 000-2z" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-full">
          <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 3a1 1 0 000 2h12a1 1 0 100-2H4zM3 7a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V7zm0 4a1 1 0 011-1h12a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm1 5a1 1 0 000 2h12a1 1 0 100-2H4z" />
          </svg>
        </button>
      </div>
    )
  }
  
  export default Sidebar
  