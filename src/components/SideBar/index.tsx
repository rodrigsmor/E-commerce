import * as S from './styled';
import Logomark from '../Logomark';

const SideBar: any = (props: any) => {
    return (
        <S.SideBarContainer 
            className={props.click === true ? 'active' : '' }>
            <div className="container">
                <S.TopSection>
                    <Logomark />

                    <button onClick={ () => props.setClick(false) }>
                        <span></span>
                        <span></span>
                    </button>
                </S.TopSection>

                <S.NavSection>

                </S.NavSection>
            </div>
        </S.SideBarContainer>
    );
}

export default SideBar;