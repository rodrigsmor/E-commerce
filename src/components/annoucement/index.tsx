import * as S from './styled';

const Annoucement = () => {
    return (
        <S.Container>
            <div className="contentBox">
                <h1>BLACK FRIDAY</h1>
                <span className="barTitle"></span>
                <h3>Os melhores preços</h3>

                <button>
                    Confira 
                    <i className="bx bx-right-arrow"></i>
                    <span></span>
                </button>
            </div>


            <div className="picture">
                <img src="./img/pictures/propaganda.png" alt="imagem de diversos aparelhos celulares da marca apple enfileirados" />
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </S.Container>
    );
}

export default Annoucement;