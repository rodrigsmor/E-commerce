import React, { useState, useEffect } from 'react';
import { Container } from './styled';
import api from '../../services/api';
import Header from '../../components/Header/index';

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
  useEffect(() => {
    api.get('').then(
      response => {
        setData(response.data);
      }
    )
  }, []);

  return (
    <>
      <Header/>
      <Container>
        <div>
          { data.map(prod => (
            <div key={prod.id}>
              <img src={prod.photo} alt={prod.alternative}/>
              <h4>{prod.name}</h4>
              <span>{prod.description}</span>
              <h6>{prod.price}</h6>
            </div>
          )) }
        </div>
      </Container>
    </>
  );
}

export default Home;