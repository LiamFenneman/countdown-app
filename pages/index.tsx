import React, { useState } from 'react'
import Head from 'next/head'
import NumbersGame from '../components/Games/NumbersGame'
import LettersGame from '../components/Games/LettersGame'
import ConundrumGame from '../components/Games/ConundrumGame'
import { GameState } from '../components/Games/types'

const gameStateToLabel = (gs: GameState) => {
  switch (gs) {
    case GameState.Numbers:
      return 'Numbers Game'
    case GameState.Letters:
      return 'Letters Game'
    case GameState.Conundrum:
      return 'Conundrum'
    default:
      return ''
  }
}

const Home = () => {
  const personalURL = 'https://github.com/LiamFenneman'

  const [gameState, setGameState] = useState(GameState.Numbers)
  return (
    <>
      <Head>
        <title>Countdown &ndash; {gameStateToLabel(gameState)}</title>
      </Head>

      <div className='w-full h-screen bg-gray-900 flex flex-col text-center p-4 sm:p-8 lg:p-24 text-gray-50'>
        <h1 className='font-black text-3xl mb-8'>Countdown!</h1>
        <div className='layout w-full md:w-3/4 lg:w-1/2 h-full mx-auto text-center bg-gray-700 rounded-lg ring ring-gray-800 shadow-xl'>
          <header className='flex flex-row border-b-2 border-gray-800'>
            <button
              className='w-1/3 border-r-2 border-gray-800 hover:bg-gray-800'
              onClick={() => setGameState(0)}
            >
              Numbers
            </button>
            <button
              className='w-1/3 border-r-2 border-gray-800 hover:bg-gray-800'
              onClick={() => setGameState(1)}
            >
              Letters
            </button>
            <button
              className='w-1/3 hover:bg-gray-800'
              onClick={() => setGameState(2)}
            >
              Conundrum
            </button>
          </header>
          <main className='p-4 flex flex-col justify-around'>
            <NumbersGame gameState={gameState} />
            <LettersGame gameState={gameState} />
            <ConundrumGame gameState={gameState} />
          </main>
          <footer className='flex flex-col justify-center'>
            <p>
              Made by{' '}
              <a
                href={personalURL}
                className='font-semibold underline hover:text-gray-300'
                target='_blank'
              >
                Liam Fenneman
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Home
