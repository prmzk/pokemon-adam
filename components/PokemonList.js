import React from 'react'
import Image from 'next/image'
import { Button, PokemonsList, Text } from '../styles/components'
import { useState } from 'react'
import Link from 'next/link'
import { useEffect } from 'react/cjs/react.development'

const PokemonList = ({data}) => {
    const [hovered, setHovered] = useState(false)
    const [owned, setOwned] = useState(0)

    useEffect(() => {
        if(window) {
            const myPokemon = JSON.parse(localStorage.getItem("pokemon"))
            let _owned = 0
            myPokemon?.data?.forEach(el => {
                if(el.data.name === data.name) _owned = el.owned
            })

            setOwned(_owned)
        }
    }, [])

    return (
        <Link href={`/pokemon/${data.name}?img=${data.dreamworld}`} passHref>
            <PokemonsList onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <Image src={hovered ? data.dreamworld : data.artwork} width={120} height={120} placeholder="blur" blurDataURL/>
                <Text mt={12} mb={4}>{`#${data.id}`}</Text>
                <Text>{data.name}</Text>
                <Text mt={12}>{`Total owned: ${owned}`}</Text>
            </PokemonsList>
        </Link>
    )
}

export default PokemonList
