import React from 'react'
import { GameProps, GameState } from './types'

const ConundrumGame = ({ gameState }: GameProps) => {
  if (gameState !== GameState.Conundrum) return <></>
  return <div>CONUNDRUM GAME</div>
}

export default ConundrumGame
