import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurants } from '../../pages/Home'

type ProductState = {
  items: Restaurants['cardapio'][number][]
  isOpen: boolean
}

const initialState: ProductState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurants['cardapio'][number]>) => {
      const product = state.items.find(
        (items) => items.id === action.payload.id
      )

      if (!product) {
        state.items.push(action.payload)
      } else {
        alert('O produto já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
