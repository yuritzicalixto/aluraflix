import "../css/Colaborador.css"
import x from "../img/marca-x-octagono.png"

const Colaborador =()=> {
    return <section>
        <div class="product-card">
            <img src="https://images.pexels.com/photos/210528/pexels-photo-210528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen"/>
            <div class="product-info">
              <div>
                <p>$120,00</p>
                <p>Bike</p>
              </div>
              <figure>
                <img src={x} alt="imagen"/>
              </figure>
            </div>
          </div>
    </section>
}

export default Colaborador