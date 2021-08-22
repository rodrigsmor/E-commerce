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