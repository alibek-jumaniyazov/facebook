export default function Shops({item}){
    console.log(item.name);
    return(
        <div className="Shops">
            <img src={item.img} alt="" />
            <p className="shops_sum">{item.sum}$</p>
            <p className="shops_name" >{item.name}</p>
            <span>{item.gorod}</span>
        </div>
    )
}