import GoodItem from "./GoodItem";
export default function GoodList(props){
    const {goods = []} = props;

    if(goods.length){
        return <h3>No goods</h3>
    }

    return(
        <div className="goods">{goods.map(item =>(
            <GoodItem key={item.id} {...item}/>
        ))}</div>
    )
}