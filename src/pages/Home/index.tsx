import { Container } from './styled';
import api from '../../services/api';
import Init from '../../components/Init/index';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import Cathegories from '../../components/Cathegories/index';

interface IProduct {
  id: number,
  name: string,
  photo: string,
  alternative: string,
  description: string,
  price: number
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data);
      }
    )
  }, []);

  const handleCart = (index: number) => {
    let push: any = [...cart, cart.push(data[index])];
    setCart(push);

    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore);
  }

  return (
    <>
      <Header quantidade={cart.length}/>
      <Init />
      <Cathegories />
      <Container>
        <div className="sectionTitle">
          <h1>Aparelhos Celulares</h1>
          <span></span>
        </div>
        
        <div className="Technologies">
          { 
            data.map((prod, index) => (
              <div key={prod.id} className="boxProduct">
                <div className="productPicture">
                  <img src={prod.photo} alt={prod.alternative}/>
                </div>

                <div className="informations">
                  <h4>{prod.name}</h4>
                  {/* <span>{prod.description}</span> */}
                  <h6>R${prod.price}</h6>
                  <button onClick={() => handleCart(index)}>Adicionar ao carrinho</button>
                </div>
              </div>
            )) 
          }
        </div>
      </Container>
    </>
  );
}

export default Home;