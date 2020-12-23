import React, { useState, useEffect } from 'react'
import { GameProps, GameState } from './types'
import Button from '../Button'

const NumbersGame = ({ gameState }: GameProps) => {
  const [smallCount, setSmallCount] = useState(4)

  const [targetNumber, setTargetNumber] = useState(0)
  const minTargetNnumber = 100
  const maxTargetNumber = 999

  const [numberSet, setNumberSet] = useState<number[]>([0])

  const random = (min: number, max: number) => {
    return Math.floor(Math.random() * max + min)
  }

  const getDigit = (fromNumber: number, index: number) => {
    return fromNumber.toString().substring(index, index + 1)
  }

  const getRandomSmallNumber = (exclude: number[]): number => {
    let num = random(1, 9)
    if (exclude.includes(num)) return getRandomSmallNumber(exclude)
    return num
  }

  const getRandomBigNumber = (exclude: number[]): number => {
    const options = [10, 25, 50, 75]
    let r = random(0, 4)
    if (exclude.includes(options[r])) return getRandomBigNumber(exclude)
    return options[r]
  }

  const newGame = () => {
    setTargetNumber(random(minTargetNnumber, maxTargetNumber))

    let smalls: number[] = []
    for (let i = 0; i < smallCount; i++) {
      let num = getRandomSmallNumber(smalls)
      smalls.push(num)
    }

    let bigs: number[] = []
    for (let i = 0; i < 6 - smallCount; i++) {
      let num = getRandomBigNumber(bigs)
      bigs.push(num)
    }

    let newSet = smalls.concat(bigs)

    setNumberSet(
      newSet.sort((a, b) => {
        return a - b
      })
    )
  }

  useEffect(() => {
    newGame()
  }, [])

  if (gameState !== GameState.Numbers) return <></>
  return (
    <>
      <h3 className='font-bold text-2xl font-mono'>NUMBERS GAME</h3>

      <div className='my-4 flex flex-row justify-center'>
        <NumberSegment number={getDigit(targetNumber, 0)} />
        <NumberSegment number={getDigit(targetNumber, 1)} />
        <NumberSegment number={getDigit(targetNumber, 2)} />
      </div>

      <div className='my-4 flex flex-row justify-center'>
        <NumberSegment size={3} number={numberSet[0]} />
        <NumberSegment size={3} number={numberSet[1]} />
        <NumberSegment size={3} number={numberSet[2]} />
        <NumberSegment size={3} number={numberSet[3]} />
        <NumberSegment size={3} number={numberSet[4]} />
        <NumberSegment size={3} number={numberSet[5]} />
      </div>

      <textarea className='rounded bg-gray-600 p-4' rows={4}></textarea>

      <div className='flex flex-row justify-evenly'>
        <Button onClick={newGame}>new game</Button>
        {/* <Button className='ring-red-500'>reset</Button> */}
      </div>
    </>
  )
}

type SegmentProps = {
  number: string | number
  size?: number
}

const NumberSegment = ({ number, size = 4 }: SegmentProps) => {
  return (
    <div
      className='flex flex-col justify-center font-black text-2xl bg-gray-900 mx-2 font-mono rounded ring ring-gray-800'
      style={{
        width: `${size}rem`,
        height: `${size}rem`,
      }}
    >
      {number}
    </div>
  )
}

export default NumbersGame
