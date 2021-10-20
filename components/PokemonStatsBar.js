import React, { useContext } from 'react'
import { useEffect, useState } from 'react/cjs/react.development'
import { Flex, PokemonStatsWrapper } from '../styles/components';
import CountUp from 'react-countup';
import { ColorContext } from '../pages/pokemon/[pokemon]';

function PokemonStatsBar({data, maxStats}) {
    const { color } = useContext(ColorContext)
    const [value, setValue] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setValue(data)
        }, 1);
    }, [])
    return (
        <Flex style={{width: '100%'}} ai={'center'}>
            <CountUp end={data} duration={1} style={{marginRight: 12, width: '60px', textAlign: 'right', fontSize: '12px', fontWeight: '500'}}/>
            <PokemonStatsWrapper value={value} maxStats={maxStats + 20}>
                <div style={{background: color}}/>
            </PokemonStatsWrapper>
        </Flex>
        
    )
}

export default PokemonStatsBar
