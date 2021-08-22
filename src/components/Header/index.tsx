import * as S from './styled';
import Logomark from '../Logomark';
import SearchBar from '../SearchBar';

const Header = (props: any) => {
    return (
        <S.Header>
            <div className="headerContainer">
                <Logomark />

                <S.UserInteractions>
                    <SearchBar />
                    
                    <div className="cartBox">
                        <i className='bx bx-cart'></i>
                        <i className='bx bx-heart'></i>
                        <span className={props.quantidade === 0 ? 'notDisplay' : ''}>
                            <p>
                                {props.quantidade}
                            </p>
                        </span>
                        <i className='bx bx-user'></i>
                    </div>
                </S.UserInteractions>
            </div>
        </S.Header>
    );
}

export default Header;