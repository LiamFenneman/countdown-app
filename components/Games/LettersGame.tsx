import React from 'react'
import { GameProps, GameState } from './types'

const LettersGame = ({ gameState }: GameProps) => {
  if (gameState !== GameState.Letters) return <></>
  return <div>LETTERS GAME</div>
}

export default LettersGame
