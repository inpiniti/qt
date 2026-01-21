
# Tutorial: Tic-Tac-Toe

Zustand를 사용하여 틱택토(Tic-Tac-Toe) 게임 만들기.

## Store 생성

```jsx
import { create } from 'zustand'

const useGameStore = create((set) => ({
  board: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  makeMove: (index) => set((state) => {
    if (state.board[index] || state.winner) return state
    
    const newBoard = [...state.board]
    newBoard[index] = state.xIsNext ? 'X' : 'O'
    
    // 승자 확인 로직 (생략)
    const winner = calculateWinner(newBoard)
    
    return {
      board: newBoard,
      xIsNext: !state.xIsNext,
      winner
    }
  }),
  reset: () => set({
    board: Array(9).fill(null),
    xIsNext: true,
    winner: null
  })
}))
```

## 컴포넌트

```jsx
function Square({ index }) {
  const value = useGameStore((state) => state.board[index])
  const makeMove = useGameStore((state) => state.makeMove)
  
  return <button onClick={() => makeMove(index)}>{value}</button>
}

function Game() {
  const winner = useGameStore((state) => state.winner)
  const reset = useGameStore((state) => state.reset)
  
  return (
    <>
      <div className="board">
        {/* 9 Squares */}
      </div>
      {winner && <p>Winner: {winner}</p>}
      <button onClick={reset}>Reset</button>
    </>
  )
}
```
