import React from 'react';
import * as S from './styled';

const Header = (props: any) => {
    return (
        <S.Header>
            <div className="headerContainer">
                <S.Logomark>
                    <i className='bx bxs-shopping-bags'></i>
                    <h1>Market<span>Lify</span></h1>
                </S.Logomark>

                <S.UserInteractions>
                    <div className="">
                        <input type="search" aria-label="realizar uma busca pelo conteúdo do site" placeholder="digite o que deseja buscar..."/>
                        <i className='bx bx-search'></i>
                    </div>
                    <div className="cartBox">
                        <i className='bx bx-cart'></i>
                        <span className={props.quantidade === 0 ? 'notDisplay' : ''}>
                            <p>
                                {props.quantidade}
                            </p>
                        </span>
                    </div>
                    <i className='bx bx-user'></i>
                </S.UserInteractions>
            </div>
        </S.Header>
    );
}

export default Header;