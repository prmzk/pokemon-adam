import { useRouter } from 'next/router'
import React from 'react'
import { Button, PokeBallStyle } from '../styles/components'

// https://codepen.io/raubaca/pen/obaZmG
function PokeBall({catchPokemon}) {
    const router = useRouter()
    const toOwned = () =>  router.push('/owned')
    return (
        <div style={{position: 'fixed', 
        right: !catchPokemon && '20px', bottom: '20px', 
        left: catchPokemon && 'calc(50vw - 80px)',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'}}
        onClick={catchPokemon ? catchPokemon : toOwned}
        >
            <PokeBallStyle>
                <div className="pokeball__button"></div>
            </PokeBallStyle>
            <Button style={{marginTop: 8}}>{catchPokemon ? 'CATCH THIS POKEMON!' : 'Your Pokemon'}</Button>
        </div>
        
    )
}

export default PokeBall
