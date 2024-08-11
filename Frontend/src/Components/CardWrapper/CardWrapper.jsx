import Card from "../Card/Card";

export default function CardWrapper({cards = []}){
    // console.log(cards);
    return(
        <div className="flex flex-wrap gap-2">
            {cards.map((card, index)=>{
            return(
                <Card front = {card.front} back = {card.back} index={index+1} key={card.id}/>
            )
            })}
            
        </div>
    )
    
    
}