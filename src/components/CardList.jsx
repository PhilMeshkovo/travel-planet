import {Card} from './Card'

export function CardList(props) {
    const {cards = []} = props;
    if(!cards.length) {
        return <h3>Nothing here</h3>
    }
    return <div>
        {cards.map((el) => (
            <Card key={el.id} {...el}/>
       ) )}
    </div>
}