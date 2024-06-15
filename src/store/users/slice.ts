import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const DEFAUlT_STATE = [
  {
    id: '1',
    name: 'Javier',
    email: 'javier@gmail.com',
    github: 'javier'
  },
  {
    id: '2',
    name: 'Juan',
    email: 'juan@gmail.com',
    github: 'juan'
  },
  {
    id: '3',
    name: 'Pedro',
    email: 'pedro@gmail.com',
    github: 'pedro'
  },
  {
    id: '4',
    name: 'Josee',
    email: 'jose@gmail.com',
    github: 'jose'
  }
]

export type UserId = string

export interface User {
  name: string
  email: string
  github: string
}

export interface UserWithId extends User {
  id: UserId
}

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem('__redux__state__')
  return persistedState ? JSON.parse(persistedState).users : DEFAUlT_STATE
})()

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUSer: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID()
      state.push({ id, ...action.payload })
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload

      return state.filter(user => user.id !== id)
    },
    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
      if (!isUserAlreadyDefined) {
        state.push(action.payload)
      }
    }
  }
})

export default usersSlice.reducer
export const { addNewUSer, deleteUserById, rollbackUser } = usersSlice.actions
