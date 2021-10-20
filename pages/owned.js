import dynamic from "next/dynamic"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import { Pokemons, Text, Title } from '../styles/components'
import { BgContainer, Container } from '../styles/containers'
import Head from 'next/head'
const OwnedPokemonList = dynamic(() => import("../components/OwnedPokemonList"));

export default function Owned() {
  const [pokemons, setPokemons] = useState([])

  const releasePokemon = (givenName) => {
    let _pokemons = [...pokemons]
    let empty = -1
    _pokemons.forEach((el, i) => {
      let index = el.givenName.indexOf(givenName)
      if(index >= 0) {
        el.givenName.splice(index, 1)
        if(el.owned === 1) {
          empty = i
        }
        el.owned--
      }
    })
    if(empty >= 0) {
      _pokemons.splice(empty, 1)
    }
    setPokemons(_pokemons)
    localStorage.setItem("pokemon", JSON.stringify({data: _pokemons}))
  }

  useEffect(() => {
    if(window) {
      const myPokemon = JSON.parse(localStorage.getItem("pokemon"))
      if(myPokemon) setPokemons(myPokemon.data)
    }
  }, [])
  

  return (
      <BgContainer>
        <Head>
          <title>Your Pokemon | POKEMON CATCH EM ALL!</title>
          <meta name="description" content="Pokemon owned by user"/>
        </Head>
        <Container style={{padding: '40px 16px', minHeight: '100vh', justifyContent: 'flex-start'}}>
            <BackButton/>
            <Title pixelated mt={24} mb={24} size={24} center>Your Pokemon</Title>
            {pokemons?.length === 0 ? <>
              {/* EMPTY STATA */}
              <Image src="/images/ash.webp" width={140} height={322} alt="ash"/>
              <Text size={28} center mt={20}>You dont have any pokemon! Start exploring the world!</Text>
            </> : 
            <Pokemons>
                {pokemons?.map((el, i) => 
                  el.givenName.map(((givenName, j) => <OwnedPokemonList releasePokemon={() => releasePokemon(givenName)} key={String(i)+String(j)} data={el.data} name={givenName}/>))
                )}
            </Pokemons>}
        </Container>
      </BgContainer>
  )
}