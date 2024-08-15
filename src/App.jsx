import "./App.css";

function App() {
  return (
    <>
      <div className="bg-slate-800 flex items-center justify-center h-screen">
        <div className="container px-4">
          <h1 className="text-zinc-50 text-4xl text-center">
            Links para Redes sociais
          </h1>
          <div className="mt-8">
            <div className="md:max-w-2xl md:mx-auto text-center border border-2 shadow p-4 rounded-full mb-6 hover:bg-green-600 hover:border-green-900 hover:scale-110 transition-all">
              <a
                href="https://www.instagram.com/cortesdelives4/"
                target="_blank"
                className="text-zinc-50 text-lg md:text-2xl h-full h-full block"
              >
                Instagram
              </a>
            </div>

            <div className="md:max-w-2xl md:mx-auto text-center border border-2 shadow p-4 rounded-full mb-6 hover:bg-green-600 hover:border-green-900 hover:scale-110 transition-all">
              <a
                href="https://www.tiktok.com/@vncs001"
                target="_blank"
                className="text-zinc-50 text-lg md:text-2xl h-full h-full block"
              >
                TikTok
              </a>
            </div>

            <div className="md:max-w-2xl md:mx-auto text-center border border-2 shadow p-4 rounded-full mb-6 hover:bg-green-600 hover:border-green-900 hover:scale-110 transition-all">
              <a
                href="https://kiwify.app/rXADQnr?afid=igu2Oace"
                target="_blank"
                className="text-zinc-50 text-lg md:text-2xl h-full h-full block"
              >
                Comece a ganhar dinheiro com cortes
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
