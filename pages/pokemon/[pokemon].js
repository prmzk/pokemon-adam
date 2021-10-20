import dynamic from "next/dynamic"
import Image from 'next/image'
import { useRouter } from 'next/router'
import { createContext, useState } from 'react'
import { GET_POKEMON_DETAIL } from '../../shared/graphql'
import { Flex, PokemonType, Text, Title } from '../../styles/components'
import { Container, PokemonDetailContainer, PokemonStatsContainer } from '../../styles/containers'
import client from '../../utils/apollo'
import Head from 'next/head'

const BackButton = dynamic(() => import("../../components/BackButton"));
const CatchPokemonModal = dynamic(() => import("../../components/CatchPokemonModal"));
const PokeBall = dynamic(() => import("../../components/PokeBall"));
const PokemonStatsTabs = dynamic(() => import("../../components/PokemonStatsTabs"));

const typeColor = {
  normal: 'black',
  fire: 'red',
  water: 'bluer',
  grass: 'green',
  electric: 'warm',
  ice: 'bluer',
  fighting: 'red',
  poison: 'bluer',
  ground: 'warm',
  flying: 'green',
  psychic: 'bluer',
  bug: 'green',
  rock: 'warm',
  ghost: 'black',
  dark: 'black',
  dragon: 'black',
  steel: 'black',
  fairy: 'red',
}

export const ColorContext = createContext({})

export default function PokemonDetail({ data }) {
  // const [pokemons, setPokemons] = useState(data)
  // const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalStatus, setModalStatus] = useState('catching')

  const closeModal = () => {
    setModalOpen(false)
    setModalStatus('catching')
  }

  const timeountPromise = () => {
   return new Promise((res, rej) => {
    setTimeout(() => {
      if(Math.random() > 0.5) {
        res(true)
      } else {
        rej(true)
      }
    }, 2000);
  })}

  const catchPokemon = async () => {
    setModalOpen(true)
    // FOR SOME ACTION PURPOSES!
    await timeountPromise()
    .then(_ => setModalStatus('success'))
    .catch(_ => setModalStatus('fail'))

  }

  const valueProvider = {
    color: typeColor[data.types[0]?.type.name]
  }

  return (
      <ColorContext.Provider value={valueProvider}>
        <Head>
          <title>{`${data.name} | POKEMON CATCH EM ALL!`}</title>
          <meta name="description" content="Pokemon detail page"/>
        </Head>
        <PokemonDetailContainer color={typeColor[data.types[0]?.type.name]}>
        <Container>
          <BackButton/>
          <Flex jc="space-between" ai="center" style={{width: '100%'}} wrap="wrap">
            <Title style={{textTransform: 'capitalize'}} size={18} mb={12} pixelated color="white">{data.name}</Title>
            <Text size={18} color="white">{`#${data.id}`}</Text>
          </Flex>
          <Flex ai="center" style={{width: '100%', marginBottom: '20px'}} wrap="wrap">
              {data.types.map((el, i) => <PokemonType key={i} color={typeColor[el.type.name]}>{el.type.name}</PokemonType>)}
          </Flex>
          <Image src={router.query.img} width={180} height={180} alt={data.name} />
          <PokemonStatsContainer>
            <Flex jc="center" ai="center" wrap="wrap">
              {data?.sprites?.front_default && <Image alt="front sprite" src={data?.sprites?.front_default} width={72} height={72}/>}
              {data?.sprites?.back_default && <Image alt="back sprite" src={data?.sprites?.back_default} width={72} height={72}/>}
              {data?.sprites?.front_female && <Image alt="front sprite female" src={data?.sprites?.front_female} width={72} height={72}/>}
              {data?.sprites?.back_female && <Image alt="back sprite female" src={data?.sprites?.back_female} width={72} height={72}/>}
            </Flex>
            <PokemonStatsTabs data={data}/>
          </PokemonStatsContainer>
        </Container>
      </PokemonDetailContainer>
      <PokeBall catchPokemon={catchPokemon}/>
      <CatchPokemonModal 
      modalOpen={modalOpen} closeModal={closeModal}
      modalStatus={modalStatus} setModalStatus={setModalStatus}
      data={data}
      />
    </ColorContext.Provider>
  )
}

export async function getServerSideProps(context) {
    const { data, error} = await client.query({ query: GET_POKEMON_DETAIL, variables: { name: context.params.pokemon } })
    
    if(!data.pokemon.id || error) {
      return {
        notFound: true
      }
    }

    return {
        props: { data: data.pokemon }
    }
}