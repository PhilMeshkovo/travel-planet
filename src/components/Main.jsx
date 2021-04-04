import React, {useState} from 'react'
import {CardList} from './CardList'
import {ItalyDesc} from './ItalyDesc'
import {ThaiDesc} from './ThaiDesc'
import ImageItaly from '../images/italy.341'
import ThaiImage from '../images/thaiImage.jpg'

const PHONE_NUMBER = process.env.PHONE_NUMBER;

export function Main() {
    const [description, setDescription] = useState('main');
    console.log(`tel:  +${PHONE_NUMBER}`);
    const cards = [
        {id: 1, title: 'Italy Ferrari Tour', text: 'Awesome trip', image: ImageItaly, desc: 'italy'},
        {id: 2, title: 'Thailand', text: 'Ocean', image: ThaiImage, desc: 'thai'}
    ];

    return (<main className='container content'>
        {description === 'main' && <CardList cards={cards} setDescription={setDescription}/>}
        {description === 'italy' && <ItalyDesc setDescription={setDescription}/>}
        {description === 'thai' && <ThaiDesc setDescription={setDescription}/>}
        <a className='btn indigo accent-4 phone' href={`tel:  +${PHONE_NUMBER}`}>Позвонить <i className="material-icons ">phone</i></a>
        
    </main>)
}