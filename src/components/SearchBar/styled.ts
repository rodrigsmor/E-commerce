import styled from "styled-components";

export const SearchBox = styled.div`
    display: flex;
    grid-gap: 5px;
    color: #962062;
    width: fit-content;
    height: fit-content;
    align-items: center;
    border-radius: 30px;
    background:  #fcd4d9;
    padding: 2px 5px 2px 20px;
    border: 1px solid #962062;
`;

export const InputBox = styled.input`
    width: 250px;
    border: none;
    outline: none;
    color: #962062;
    font-size: 13px;
    background: transparent;
    font-family: Poppins, sans-serif;

    &::-webkit-input-placeholder {
        color: #962062;
    }

    &::-webkit-search-cancel-button {
        display: none;
    }    
`;

export const SearchButton = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    display: grid;
    cursor: pointer;
    border-radius: 50%;
    background: #fe4365;
    place-items: center;
    transition: .5s linear;

    i {
        color: #fff;
        line-height: 0;
        font-size: 20px;
        background: pink;
    }

    &:hover {
        background: #cc0025;
    }
`;