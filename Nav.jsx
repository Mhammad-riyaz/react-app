import img from "./assets/globe.png"
export default function Nav(){

    return(
        <div className="nav">
            <img className="globe" src={img} alt="" />
             <p>my travel journal.</p>
        </div>
    )
}