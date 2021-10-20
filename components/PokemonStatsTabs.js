import React, { useContext } from 'react'
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs'
import { useState } from 'react'
import { TabStyle } from '../styles/components'
import PokemonStatsBar from './PokemonStatsBar'
import { ColorContext } from '../pages/pokemon/[pokemon]'

function PokemonStatsTabs({data}) {
    const { color } = useContext(ColorContext)
    const [tabIndex, setTabIndex] = useState(0)
    const [maxStats] = useState(() => {
        let arr = data.stats.map(el => el.base_stat)
        return Math.max(...arr)
    })
    return (
        <Tabs defaultIndex={tabIndex} onSelect={index => setTabIndex(index)} css={TabStyle}>
            <TabList>
                <Tab style={{borderColor: color}} className={tabIndex === 0 && 'selected'}>About</Tab>
                <Tab style={{borderColor: color}} className={tabIndex === 1 && 'selected'}>Stats</Tab>
                <Tab style={{borderColor: color}} className={tabIndex === 2 && 'selected'}>Moves</Tab>
                <Tab style={{borderColor: color}} className={tabIndex === 3 && 'selected'}>Abilities</Tab>
            </TabList>
            <TabPanel className={tabIndex === 0 && 'panel-selected'}>
                <div className='stats-wrapper'>
                    <div>
                        <h2>Base Exp.</h2>
                        <p>{data.base_experience}</p>
                    </div>
                    <div>
                        <h2>Height</h2>
                        <p>{`${data.height/10} meter`}</p>
                    </div>
                    <div>
                        <h2>Weight</h2>
                        <p>{`${data.weight/10} kg`}</p>
                    </div>
                </div>
            </TabPanel>
            <TabPanel className={tabIndex === 1 && 'panel-selected'}>
                <div className='stats-wrapper'>
                    {data.stats.map((el, i) => <div key={i}>
                        <h2>{el.stat.name}</h2>
                        <PokemonStatsBar maxStats={maxStats} data={el.base_stat}/>
                    </div>)}
                </div>
            </TabPanel>
            <TabPanel className={tabIndex === 2 && 'panel-selected'}>
                <div className='moves-wrapper'>
                    {data.moves.map(({ move: { name } }, i) => <div key={i} style={{borderColor: color}}>
                        <p>{name}</p>
                    </div>)}
                </div>
            </TabPanel>
            <TabPanel className={tabIndex === 3 && 'panel-selected'}>
                <div className='moves-wrapper'>
                    {data.abilities.map(({ ability: { name } }, i) => <div key={i} style={{borderColor: color}}>
                        <p>{name}</p>
                    </div>)}
                </div>
            </TabPanel>
        </Tabs>
    )
}

export default PokemonStatsTabs
