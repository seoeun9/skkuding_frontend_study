import { data } from "../data.js"
import { useClickStore } from "../store/useClick";

export default function PokemonItem(){
    const { setClicked } = useClickStore();

    function CreateCard(){
            return(
                <div className="container">
                    {data.map((item, index) => (
                        <div 
                            className="item"    
                            key={index}     
                            onClick={ () => {
                                window.localStorage.setItem("pr_item", JSON.stringify(item));
                                setClicked(true);
                            }}>                            
                            <img src={`${process.env.PUBLIC_URL}/images/${item.name}.png`} alt={item.name}></img>
                            <text>
                                <div className="h2">
                                    <b>{item.name}</b><br />
                                </div>
                            Height : {item.height} <br />
                            Weight : {item.weight} <br />
                            Types : {item.types}
                            </text>
                        </div>
                    ))};
                </div>
            );
        }
    return (
        <CreateCard />
    );
};