'use client'

import { Divider } from '@nextui-org/react'
import RecHero from '../components/Recursos/RecHero'
import RecPadlet from '../components/Recursos/RecPadlet'
import RecDiario from '../components/Recursos/RecDiario'
import RecPadletVideo from '../components/Recursos/RecPadletVideo'
import AtiUnindoFerramentas from '../components/Recursos/AtiUnindoFerramentas'


function Recursos() {
  return (
    <>
        
        <RecHero />
        <RecPadlet />
        <Divider className='max-w-5xl mx-auto my-4 bg-primary'/>
        <RecDiario />
        <RecPadletVideo />
        <Divider className='max-w-5xl mx-auto my-4'/>
        <AtiUnindoFerramentas />
    </>
    
  )
}

export default Recursos