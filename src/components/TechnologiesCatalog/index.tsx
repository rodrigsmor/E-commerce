import { Container } from './styled';

const TechnologiesCatalog: any = (props: any) => {
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

export default TechnologiesCatalog;