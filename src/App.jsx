import './App.css'
import CardComponent from './components/cardComponents';
import HeaderComponents from './components/headerComponents';
function App() {

  return (
    <>
      <HeaderComponents />
    
      <CardComponent />
      <h1 className="flex justify-center items-center mt-10 text-3xl font-bold underline text-red-700">
        Hello world! Ahmed
      </h1>
      <h2 className='flex justify-center items-center mt-10 text-2xl text-blue-400 '>
        hello React App
      </h2>
    </>
  )
}

export default App
