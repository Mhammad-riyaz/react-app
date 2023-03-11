import img from "./assets/fuji.jpg"
import icon from "./assets/location.png"
export default function Card(props){
    return (
            <div className="card">
                <div className="border"></div>
                <div className="image">
                    <img className="scene" src={props.img} alt="" />
                </div>
                <div className="container-2">
                    <div className="location">
                        <img className="icon" src={icon} alt="" />
                        <p className="country">{props.country}</p>
                        <a href={props.location} id={props.country} target="_b
                        ">View on Google Maps</a>
                    </div>
                    <h2>{props.name}</h2>
                    <p className="date">{props.date}</p>
                    <p className="descript">{props.description}</p>
                </div>
            </div>
    )
}