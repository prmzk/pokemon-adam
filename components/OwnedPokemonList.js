import Image from 'next/image'
import React from 'react'
import { Button, PokemonsList, Text } from '../styles/components'

const OwnedPokemonList = ({data, name, releasePokemon}) => {

    return (
        <PokemonsList>
            <Image src={data.dreamworld} width={120} height={120} alt={data.name}/>
            <Text mt={12} mb={4}>{`#${data.id}`}</Text>
            <Text>{data.name}</Text>
            <Text mb={12} mt={12} color='red' weight="600">{name}</Text>
            <Button color="red" onClick={releasePokemon}>Release</Button>
        </PokemonsList>
    )
}

export default OwnedPokemonList
