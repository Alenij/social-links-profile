function App() {
  return (
    <>
      <div className="bg-[#141414] flex flex-col min-h-screen">
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-[#1f1f1f] flex flex-col items-center py-7 w-full max-w-70 justify-between rounded-lg">
            <img
              src="../assets/images\avatar-jessica.jpeg"
              alt="avatar-jessica"
              className="w-16 h-16 rounded-full"
            />
            <h1 className="text-white text-xl mt-3">Jessica Randall</h1>
            <h2 className="text-[#c5f82a] text-[11px] mt-2 font-semibold">
              London, United Kingdom
            </h2>
            <p className="text-gray-300 text-[10px] mt-3">
              "Front-end developer and avid reader"
            </p>

            <ul className="text-white mt-4">
              <li className="list">GitHub</li>
              <li className="list">Frontend Mentor</li>
              <li className="list">LinkedIn</li>
              <li className="list">GitHub</li>
              <li className="list">Instagram</li>
            </ul>
          </div>
        </div>

        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </>
  );
}

export default App;
