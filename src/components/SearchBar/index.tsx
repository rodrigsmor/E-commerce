import { SearchBox, InputBox, SearchButton } from './styled';

const SearchBar: any = () => {
    return (
        <SearchBox>
            <InputBox type="search" aria-label="realizar uma busca pelo conteúdo do site" placeholder="digite o que deseja buscar..."/>
            <SearchButton>
                <i className='bx bx-search'></i>
            </SearchButton>
        </ SearchBox>
    );
}

export default SearchBar;