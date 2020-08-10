import React from 'react'
import './cardList.styles.css'
import {Card} from './card/card.component'

const CardList = (props) => {
    return <div className='card-list'>
        {props.monsters.map(mnster => (
            <Card key={mnster.id} monster={mnster} />
        ))}
    </div>
}

export default CardList