import React, {useState} from 'react'
import {CardList} from './CardList'
import {ItalyDesc} from './ItalyDesc'
import {ThaiDesc} from './ThaiDesc'
import {DominicDesc} from './DominicDesc'
import ImageItaly from '../images/italy.341'
import ThaiImage from '../images/thaiImage.jpg'
import DominicanaCard from '../images/dominicanaCard.jpg'

const NUMBER = process.env.REACT_APP_API_PHONE;

export function Main() {
    const [description, setDescription] = useState('main');
    const cards = [
        {id: 1, title: 'Italy Ferrari Tour', text: 'Awesome trip', image: ImageItaly, desc: 'italy'},
        {id: 2, title: 'Thailand', text: 'Ocean', image: ThaiImage, desc: 'thai'},
        {id: 3, title: 'Dominicana', text: 'Punto Cana', image: DominicanaCard, desc: 'domn'}
    ];

    return (<main className='container content'>
        {description === 'main' && <CardList cards={cards} setDescription={setDescription}/>}
        {description === 'italy' && <ItalyDesc setDescription={setDescription}/>}
        {description === 'thai' && <ThaiDesc setDescription={setDescription}/>}
        {description === 'domn' && <DominicDesc setDescription={setDescription}/>}
        <a className='grey darken-2 phone white-text' href={`tel:  +${NUMBER}`}><i className="medium material-icons">phone</i></a>
        
    </main>)
}
