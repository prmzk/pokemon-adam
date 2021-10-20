import Link from 'next/link'
import { Button, SubTitle, Text, Title } from '../styles/components'
import { BgContainer, Container } from '../styles/containers'

const Home = () => {
  return (
    <BgContainer>
      <Container style={{width: '100vw', height: '100vh'}}>
        <SubTitle size={20} center mb={12} pixelated>WELCOME TO</SubTitle>
        <Title size={40} pixelated center mb={100}>POKEMON APP</Title>
        <Link href="/pokedex" passHref>
          <Button pixelated color="warm" size={28} >START</Button>
        </Link>
        {/* {pokemons?.results?.map(({name}, i) => <p key={i}>{name}</p>)}
        <button onClick={fetchMorePokemon}>Load More</button> */}
        <Text mt={12}>By Adam Primarizki</Text>
        <Text>2021. Built with NextJS</Text>
      </Container>
    </BgContainer>
  )
}

export default Home
