import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 60vh;
    display: flex;
    padding: 0 15%;
    margin: 4rem 0 0;
    overflow: hidden;
    background: #f67280;
    align-items: center;
    justify-content: space-between;
    font-family: Poppins, sans-serif;
`;

export const ContentWrapper = styled.div`
    width: 33vw;
    display: flex;
    grid-gap: 10px;
    height: fit-content;
    flex-direction: column;

    h1 {
        font-size: 50px;
        font-weight: 700;
        line-height: 45px;
        text-align: justify;
        font-family: Poppins, sans-serif;
    }

    h3 {
        font-weight: 500;
    }

    button {
        border: none;
        outline: none;
        display: flex;
        color: #f67280;
        cursor: pointer;
        font-size: 15px;
        font-weight: 600;
        padding: 10px 25px;
        width: fit-content;
        align-items: center;
        height: fit-content;
        background: #f7d5d8;
        transition: .5s linear;
        margin: 10px 0 0;
        font-family: Poppins, sans-serif;

        i {
            margin: 0 0 0 5px;
        }

        &:hover {
            color: #f7d5d8;
            background: #962062;
        }
    }
`;

export const Ilustration = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;

    img {
        z-index: 2;
        width: auto;
        height: 50vh;
        position: relative;
    }

    span {
        z-index: 1;
        width: 400px;
        height: 400px;
        margin: 50px 0 0 0;
        border-radius: 50%;
        position: absolute;
        background: #f7d5d8;
    }
`;