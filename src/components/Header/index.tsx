import * as S from './styled';
import Logomark from '../Logomark';
import SearchBar from '../SearchBar';
import SideBar from '../SideBar';
import { useState } from 'react';

const Header = (props: any) => {

    const [click, setClick] = useState(false);
    const [showSearchbar, setShowSearchbar] = useState(false);

    return (
        <S.Header>
            <div className="headerContainer">
                <S.HeaderFixed>
                    <S.ToggleButton
                        onClick={() => setClick(true) }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </S.ToggleButton>
                    <Logomark />
                </S.HeaderFixed>

                <S.UserInteractions>
                    <SearchBar showSearchbar={showSearchbar} />
                    
                    <div className="cartBox">
                        <i className={showSearchbar === false ? 'bx bx-search' : 'bx bx-x'} 
                            onClick={() => showSearchbar === false ? setShowSearchbar(true) : setShowSearchbar(false)}></i>
                        <i className='bx bx-cart'></i>
                        <i className='bx bx-store'></i>
                        <i className='bx bx-heart'></i>
                        <span className={props.quantidade === 0 ? 'notDisplay' : ''}>
                            <p>
                                {props.quantidade}
                            </p>
                        </span>
                        <i className='bx bx-user'></i>
                    </div>
                </S.UserInteractions>

                <SideBar click={click} setClick={setClick}/>
            </div>
        </S.Header>
    );
}

export default Header;