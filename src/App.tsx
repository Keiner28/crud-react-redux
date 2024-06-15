import './App.css'
import { CreateNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUsers'
import { Toaster } from 'sonner'

function App() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-red-700'>Proyecto de React con redux</h1>
      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </div>
  )
}

export default App
