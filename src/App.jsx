import CentralDeControle from "./components/CentralDeControle"
import Chat from "./components/Chat"
import Classificacao from "./components/Classificacao"
import Header from "./components/Header"
import Transmissao from "./components/Transmissao"

function App() {

  return (
	<>
		<Header />
		<div className="h-screen w-screen bg-dark-blue pt-24 pb-10 px-20">
			<div className="flex justify-between h-4/6">				
				<Classificacao />
				<Transmissao />
				<Chat />
			</div>
			<div className="h-2/6 pt-7">
				<CentralDeControle />
			</div>
		</div>
	</>
  )
}

export default App
