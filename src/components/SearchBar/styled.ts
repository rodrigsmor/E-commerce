import styled from "styled-components";

export const SearchContainer = styled.div`
    width: fit-content;
    height: fit-content;

    @media screen and (max-width: 840px) {
        top: 0;
        left: 0;
        opacity: 0;
        z-index: -1;
        width: 100%;
        height: 4rem;
        display: grid;
        margin-top: 0;
        background: #fff;
        position: absolute;
        place-items: center;
        transition: .5s all linear;
        border-radius: 0px 0px 25px 25px;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);

        &.show {
            opacity: 1;
            margin-top: 4rem;
        }
    }
`;

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
    justify-content: space-between;

    @media screen and (max-width: 840px) {
        width: 80%;
    }
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

    @media screen and (max-width: 840px) {
        width: 80%;
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