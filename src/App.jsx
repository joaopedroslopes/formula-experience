import Chat from "./components/Chat"
import Classificacao from "./components/Classificacao"
import Header from "./components/Header"

function App() {

  return (
	<>
		<Header />
		<div className="h-screen w-screen bg-dark-blue pt-24 pb-10 px-20">
			<div className="flex justify-between h-full">				
				<Classificacao />
				<Chat />
			</div>
		</div>
	</>
  )
}

export default App
