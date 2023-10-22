'use client'
import { useState } from 'react'

export function Heart() {
  return (
    <svg
      width='26'
      height='20'
      viewBox='0 0 26 20'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
    </svg>
  )
}

export function HeartFilled() {
  return (
    <svg
      width='26'
      height='20'
      viewBox='0 0 26 20'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      {' '}
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>{' '}
      <path
        d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z'
        strokeWidth='0'
        fill='currentColor'
      ></path>{' '}
    </svg>
  )
}

export function HelpCircle() {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0'></path>
      <path d='M12 16v.01'></path>
      <path d='M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'></path>
    </svg>
  )
}

export function ShowHeartIcon() {
  const [heart, setHeart] = useState(false)

  return (
    <div
      onClick={() => {
        setHeart(!heart)
      }}
    >
      {heart ? <HeartFilled /> : <Heart />}
    </div>
  )
}
