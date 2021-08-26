import * as S from './styled';
import Logomark from '../Logomark';

const SideBar: any = (props: any) => {

    const ListItems = [
        { id: 1, category: "Moda"},
        { id: 2, category: "Tecnologia"},
        { id: 3, category: "Domésticos"},
        { id: 4, category: "Decorações"},
        { id: 5, category: "Eletrônicos"},
        { id: 6, category: "Livros e filmes"},
        { id: 7, category: "Marcas próprias"},
        { id: 8, category: "Eletrodomésticos"},
        { id: 9, category: "CDS, DVDS e videogames"},
    ];

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
                    <ul>
                        {
                            ListItems.map((item: any) => (
                                    <li> { item.category } </li>
                                )
                            )
                        }
                    </ul>
                </S.NavSection>
            </div>
        </S.SideBarContainer>
    );
}

export default SideBar;