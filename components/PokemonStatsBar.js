import React, { useContext, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { ColorContext } from '../pages/pokemon/[pokemon]';
import { Flex, PokemonStatsWrapper } from '../styles/components';

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
            <PokemonStatsWrapper value={value} maxStats={maxStats + 20} color={color}>
                <div/>
            </PokemonStatsWrapper>
        </Flex>
        
    )
}

export default PokemonStatsBar
