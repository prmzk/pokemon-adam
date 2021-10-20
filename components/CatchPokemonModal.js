import React from 'react'
import Modal from 'react-modal'
import { Button, Flex, Form, ModalDiv, MyForm, Text } from '../styles/components'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react/cjs/react.development'

function CatchPokemonModal({modalOpen, closeModal, modalStatus, data}) {
    const router = useRouter()
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')

    const savePokemon = (e) => {
      e.preventDefault()
      // Get Pokemon from localstorage
      const myPokemon = JSON.parse(localStorage.getItem("pokemon"))

      // Check if name is empty
      setNameError('')
      if(!name) {
        setNameError('You gotta give it a name!')
        return ''
      }

      // If the user dont have any pokemon yet, save directly
      if(!myPokemon) localStorage.setItem("pokemon", JSON.stringify({
        data: [
          {
            owned: 1,
            givenName: [name],
            data: {
              id: data.id,
              name: data.name,
              dreamworld: router.query.img,
            }
          }
        ]
      }))
      else {
        // Check name availability
        let givenNameError = false
        myPokemon.data.forEach(el => {
          if(el.givenName[0]) {
            el.givenName.forEach(elGiven => {
              if(elGiven === name) givenNameError = true
            })
          }
        })
        if(givenNameError) {
          setNameError('You already call one of your pokemon with that name! Choose another!')
          return ''
        }

        // Save new pokemon
        let found = myPokemon.data.map((el) => el.data.name).indexOf(data.name)
        if(found >= 0) {
          myPokemon.data[found]["owned"]++
          myPokemon.data[found]["givenName"].push(name)
        } else {
          myPokemon.data.push({
            owned: 1,
            givenName: [name],
            data: {
              id: data.id,
              name: data.name,
              dreamworld: router.query.img
            }
          })
        }
        localStorage.setItem("pokemon", JSON.stringify(myPokemon))
      }

      setName('')
      closeModal()
    }

    return (
        <Modal
        isOpen={modalOpen}
        onRequestClose={() => modalStatus === 'catching' ? null : closeModal()}
        style={
          {overlay: {position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIindex: 101}}
        }
        overlayClassName="modal-overlay"
        className="modal-pokemon"
        contentLabel="Modal Sharing"
      >
        <Flex dir="column" ai="center">
          {modalStatus === 'catching' && <>
            <Image src="/images/catch.gif" height={300} width={300}/>
            <Text mt={20} size={28} center color='white'>YOU THROW A POKEBALL AT EM!</Text>
          </>}
          {modalStatus === 'success' && <ModalDiv>
            <Flex ai="center" style={{marginBottom: 20}}>
                <h2 className='success'>Success!</h2>
                <Image src="/images/poggies.webp" width={28} height={28}/>
            </Flex>
            <Image src={router.query.img} width={120} height={120} placeholder="blur" blurDataURL/>
            <Text size={20} mt={32}>{`You caught ${data.name}!`}</Text>
            <Text size={14} mt={8} center>After you give it a name and click OK, you can see it on your owned pokemon!</Text>
            <form onSubmit={savePokemon} style={{width: '100%', display: 'flex', flexDirection:'column', alignItems:'center'}}>
              <MyForm value={name} onChange={(e) => setName(e.target.value)}/>
              {nameError && <Text color='red' center>{nameError}</Text>}
              <Flex ai="center" style={{marginTop: 24}}>
                  <Button color="green" text="white" style={{marginRight: 12}} type="submit">OK</Button>
                  <Button color='red' onClick={closeModal}>Release</Button>
              </Flex>
            </form>
          </ModalDiv>}
          {modalStatus === 'fail' && <ModalDiv>
            <Flex ai="center" style={{marginBottom: 20}}>
                <h2 className='fail'>Fail!</h2>
            </Flex>
            <Image src="/images/feelsbadman.webp" width={120} height={120} placeholder="blur" blurDataURL/>
            <Text size={20} mt={32} mb={32}>{`You failed, try again!`}</Text>
            <Button color='red' onClick={closeModal}>OK</Button>
          </ModalDiv>}
        </Flex>
      </Modal>
    )
}

export default CatchPokemonModal
