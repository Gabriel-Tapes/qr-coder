import React, { useContext } from 'react'
import { ShowingContext } from '..'
import { Functions } from './Functions'
import { Header } from './Header'
import './styles/Menu.css'

export const Menu = () => {
  const { showing } = useContext(ShowingContext)

  return (
    <div className={`menu${showing === 'menu' ? ' show' : ''}`}>
      <Header />
      <Functions />
    </div>
  )
}
