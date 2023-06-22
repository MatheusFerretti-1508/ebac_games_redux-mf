import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../App'

/*Criando estado do carrinho*/ type CarrinhoState = {
  itens: Game[]
}

/*Criando estado inicial*/ const initialState: CarrinhoState = {
  itens: []
}

/*Criando fatia do carrinho*/ const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: initialState,
  reducers: {
    /*++ no carrinho*/ adicionar: (state, action: PayloadAction<Game>) => {
      const jogo = action.payload

      if (state.itens.find((game) => game.id === jogo.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(jogo)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
