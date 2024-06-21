'use client'
import { useState } from 'react'
import { HeartFilled, Heart } from './index'

export default function ShowHeartIcon() {
  const [heart, setHeart] = useState(false)

  const toggleIcon = () => {
    setHeart(!heart)
  }

  return <div onClick={toggleIcon}>{heart ? <HeartFilled /> : <Heart />}</div>
}
