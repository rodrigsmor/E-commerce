import * as S from './styled';
import Logomark from '../Logomark';

const Header = (props: any) => {
    return (
        <S.Header>
            <div className="headerContainer">
                <Logomark />

                <S.UserInteractions>
                    <div className="searchBox">
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