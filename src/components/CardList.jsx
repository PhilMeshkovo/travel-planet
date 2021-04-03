import {Card} from './Card'

export function CardList(props) {
    const {cards = [], setDescription = Function.prototype} = props;
    if(!cards.length) {
        return <h3>Nothing here</h3>
    }
    return <div className='cards'>
        {cards.map((el) => (
            <Card key={el.id} setDescription={setDescription} {...el}/>
       ) )}
    </div>
}