
import './Card.css'

function Card(props) {

  return (
    <>
    <div className="Card">
      <img class="truck" src={props.image}/>
      <h3>{props.name}</h3>
      <h4>{props.cuisine}</h4>
      <a href="https://thebirrialandia.com/menu/">
        <button>View Menu</button>
      </a>
      </div>
    </>
  )
}

export default Card
