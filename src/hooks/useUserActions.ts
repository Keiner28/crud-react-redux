import { User, UserId, addNewUSer, deleteUserById } from '../store/users/slice'
import { useAppDispatch } from './store'

export const useUserActions = () => {
  const dispatch = useAppDispatch()

  const addUser = ({ name, email, github }: User) => {
    dispatch(addNewUSer({ name, email, github }))
  }
  
  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id))
  }

  return { addUser, removeUser }
}
