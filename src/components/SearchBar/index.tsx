import { SearchBox, InputBox, SearchButton, SearchContainer } from './styled';

const SearchBar: any = (props: any) => {
    return (
        <SearchContainer className={props.showSearchbar === false ? '' : 'show'}>
            <SearchBox>
                <InputBox type="search" aria-label="realizar uma busca pelo conteúdo do site" placeholder="digite o que deseja buscar..."/>
                <SearchButton>
                    <i className='bx bx-search'></i>
                </SearchButton>
            </ SearchBox>
        </ SearchContainer>
    );
}

export default SearchBar;