import dynamic from "next/dynamic"
import { useState } from 'react'
import { GET_POKEMONS } from '../shared/graphql'
import { Button, Pokemons, Title } from '../styles/components'
import { BgContainer, Container } from '../styles/containers'
import client from '../utils/apollo'
import Head from 'next/head'

const PokeBall = dynamic(() => import("../components/PokeBall"));
const PokemonList = dynamic(() => import("../components/PokemonList"));

export default function Pokedex({ data }) {
  const [pokemons, setPokemons] = useState(data)
  const [loading, setLoading] = useState(false)

  const fetchMorePokemon = async () => {
    setLoading(true)
    const morePokemons = await client.query({query: GET_POKEMONS, variables: { limit: 30, offset: pokemons.results.length + 30 }})
    setLoading(false)
    setPokemons(prev => {
      return {
        ...prev,
        results: [...prev.results, ...morePokemons.data.pokemons.results]
      }
    })
  }

  return (
      <BgContainer>
        <Head>
          <title>Pokedex | POKEMON CATCH EM ALL!</title>
          <meta name="description" content="Pokedex or list of pokemons"/>
        </Head>
        <Container style={{paddingBottom: 80}}>
            <Title pixelated mt={24} mb={24} size={24} center>Pokedex</Title>
            <Pokemons>
                {pokemons?.results?.map((el, i) => <PokemonList key={i} data={el} pokedex/>)}
            </Pokemons>
            <Button disabled={loading} onClick={fetchMorePokemon} color="blue" text="black" mt={20} mb={48}>{loading ? 'Loading...' : 'Load More'}</Button>
        </Container>
        <PokeBall/>
      </BgContainer>
  )
}

export async function getServerSideProps() {
  const { data } = await client.query({query: GET_POKEMONS, variables: { limit: 50, offset: 0 }})

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: data.pokemons }
  }
}
