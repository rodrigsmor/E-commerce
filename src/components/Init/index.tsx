import React from 'react';
import * as S from './styled';

const Init = () => {
    return (
        <S.Container>
            <S.ContentWrapper>
                <h3>Promoções imperdíveis</h3>
                <h1>Consiga até 50% de desconto</h1>
                <button>
                    Saber mais 
                    <i className='bx bx-arrow-back bx-rotate-180'></i>
                </button>
            </S.ContentWrapper>

            <S.Ilustration>
                <img src="./img/promotion.png" alt="imagem representativa dos aparelhos que estão em promoção. Na imagem há alguns smartphones um sobre o outro, os smartphones são de cores diversas e são todos da marca Apple."/>
                <span></span>
            </S.Ilustration>
        </S.Container>
    );
}

export default Init;