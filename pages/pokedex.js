import { useState } from 'react'
import PokeBall from '../components/PokeBall'
import PokemonList from '../components/PokemonList'
import { GET_POKEMONS } from '../shared/graphql'
import { Button, Pokemons, Title } from '../styles/components'
import { BgContainer, Container } from '../styles/containers'
import client from '../utils/apollo'

const Pokedex = ({ data }) => {
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
        <Container>
            <Title pixelated mt={24} mb={24} size={24} center>Pokedex</Title>
            <Pokemons>
                {pokemons?.results?.map((el, i) => <PokemonList key={i} data={el} pokedex/>)}
            </Pokemons>
            <Button disabled={loading} onClick={fetchMorePokemon} color="blue" text="white" mt={20} mb={48}>{loading ? 'Loading...' : 'Load More'}</Button>
        </Container>
        <PokeBall/>
      </BgContainer>
  )
}

export const getServerSideProps = async () => {
  const { data } = await client.query({query: GET_POKEMONS, variables: { limit: 50, offset: 0 }})

  return {
    props: { data: data.pokemons }
  }
}

export default Pokedex
