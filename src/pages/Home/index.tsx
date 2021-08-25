import api from '../../services/api';
import Init from '../../components/Init/index';
import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Cathegories from '../../components/Cathegories/index';
import Annoucement from '../../components/annoucement/index';
import { TechnologiesCatalog, Catalog } from '../../components/Catalog/index';

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
      <TechnologiesCatalog data={data} handleCart={handleCart} />
      <Annoucement />
      <Catalog data={data} handleCart={handleCart}/>
      <Footer />
    </>
  );
}

export default Home;