import api from '../../services/api';
import Init from '../../components/Init/index';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { Container, CategoriesBar } from './styled';
import Cathegories from '../../components/Cathegories/index';
import Annoucement from '../../components/annoucement/index';

interface IProduct {
  id: number,
  name: string,
  photo: string,
  alternative: string,
  description: string,
  category: string,
  price: number
}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [category, setCategory] = useState('todos')

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
              prod.id > 3 ||
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

      <Annoucement />

      <Container>
        <div className="sectionTitle">
          <h1>Principais Produtos</h1>
          <span></span>

          <CategoriesBar>
            <button 
              className={category === 'tecnologia' ? 'selected' : ''}
              onClick={() => setCategory('tecnologia') }>
                Tecnologia</button>
            <button 
              className={category === 'moda' ? 'selected' : ''}
              onClick={() => setCategory('moda') }>
                Moda</button>
            <button 
              className={category === 'todos' ? 'selected' : ''}
              onClick={() => setCategory('todos') }>
                Todos</button>
            <button 
              className={category === 'moveis' ? 'selected' : ''}
              onClick={() => setCategory('moveis') }>
                Móveis</button>
            <button 
              className={category === 'eletrodomesticos' ? 'selected' : ''}
              onClick={() => setCategory('eletrodomesticos') }>
                Eletrodomésticos</button>
          </CategoriesBar>
        </div>

        <div className="Technologies">
          {
            category === 'todos' 
            ? 
              data.map((prod, index) => (
                <div key={prod.id} className="boxProduct">
                  <div className="productPicture">
                    <img src={prod.photo} alt={prod.alternative} />
                  </div>

                  <div className="informations">
                    <h4>{prod.name}</h4>
                    <h6>R${prod.price}</h6>
                    <button onClick={() => handleCart(index)}>Adicionar ao carrinho</button>
                  </div>
                </div>
              ))
              : data.map((prod, index) => (
                  category !== prod.category ||
                    <div key={prod.id} className="boxProduct">
                      <div className="productPicture">
                        <img src={prod.photo} alt={prod.alternative} />
                      </div>
                
                      <div className="informations">
                        <h4>{prod.name}</h4>
                        <h6>R${prod.price}</h6>
                        <button onClick={() => handleCart(index)} >Adicionar ao carrinho</button>
                      </div>
                    </div>
                  )
                )
          }
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Home;