import Link from 'next/link'
import { Button, SubTitle, Text, Title } from '../styles/components'
import { BgContainer, Container } from '../styles/containers'
import Head from 'next/head'

export default function Home() {
  return (
    <BgContainer>
      <Head>
        <title>POKEMON CATCH EM ALL!</title>
        <meta name="description" content="Landing page"/>
      </Head>
      <Container style={{width: '100vw', height: '100vh'}}>
        <SubTitle size={20} center mb={12} pixelated>WELCOME TO</SubTitle>
        <Title size={40} pixelated center mb={100}>POKEMON APP</Title>
        <Link href="/pokedex" passHref>
          <Button pixelated color="warm" size={28} >START</Button>
        </Link>
        <Text mt={12}>By Adam Primarizki</Text>
        <Text>2021. Built with NextJS</Text>
      </Container>
    </BgContainer>
  )
}
