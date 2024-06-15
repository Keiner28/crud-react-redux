import './App.css'
import { ListOfUsers } from './components/ListOfUsers'

function App() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-red-700'>Proyecto de React con redux</h1>
      <ListOfUsers />
    </div>
  )
}

export default App
