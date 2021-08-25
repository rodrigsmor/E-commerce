import { Container, CategoriesBar } from './styled';
import { useState } from 'react';

export const TechnologiesCatalog: any = (props: any) => {

    return (
        <Container>
            <div className="sectionTitle">
                <h1>Aparelhos Celulares</h1>
                <span></span>
            </div>

            <div className="Technologies">
                { 
                    props.data.map((prod: any, index: any) => (
                        prod.id > 3 ||
                        <div key={prod.id} className="boxProduct">
                            <div className="productPicture">
                                <img src={prod.photo} alt={prod.alternative}/>
                            </div>

                            <div className="informations">
                                 <h4>{prod.name}</h4>
                                {/* <span>{prod.description}</span> */}
                                <h6>R${prod.price}</h6>
                                <button onClick={() => props.handleCart(index)}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    )) 
                }
            </div>
        </Container>
    );
}

export const Catalog: any = (props: any) => {
    const [category, setCategory] = useState('todos')

    return (
        <Container>
            <div className="sectionTitle">
                <h1>Principais Produtos</h1>
                <span></span>

                <CategoriesBar>
                    <button 
                        className={category === 'tecnologia' ? 'selected' : ''}
                        onClick={() => setCategory('tecnologia') }>
                            Tecnologia
                    </button>
                    <button 
                        className={category === 'moda' ? 'selected' : ''}
                        onClick={() => setCategory('moda') }>
                            Moda        
                    </button>
                    <button 
                        className={category === 'todos' ? 'selected' : ''}
                        onClick={() => setCategory('todos') }>
                            Todos
                    </button>
                    <button 
                        className={category === 'moveis' ? 'selected' : ''}
                        onClick={() => setCategory('moveis') }>
                            Móveis
                    </button>
                    <button 
                        className={category === 'eletrodomesticos' ? 'selected' : ''}
                        onClick={() => setCategory('eletrodomesticos') }>
                            Eletrodomésticos
                    </button>
                    
                </CategoriesBar>
            </div>

            <div className="Technologies">
                {
                    category === 'todos' 
                    ? 
                        props.data.map((prod: any, index: any) => (
                            <div key={prod.id} className="boxProduct">
                                <div className="productPicture">
                                    <img src={prod.photo} alt={prod.alternative} />
                                </div>

                                <div className="informations">
                                    <h4>{prod.name}</h4>
                                    <h6>R${prod.price}</h6>
                                    <button onClick={() => props.handleCart(index)}>Adicionar ao carrinho</button>
                                </div>
                            </div>
                        ))
                        : props.data.map((prod: any, index: any) => (
                            category !== prod.category ||
                                <div key={prod.id} className="boxProduct">
                                    <div className="productPicture">
                                        <img src={prod.photo} alt={prod.alternative} />
                                    </div>

                                    <div className="informations">
                                        <h4>{prod.name}</h4>
                                        <h6>R${prod.price}</h6>
                                        <button onClick={() => props.handleCart(index)} >Adicionar ao carrinho</button>
                                    </div>
                                </div>
                            )
                        )
                }
            </div>
        </Container>
    );
}