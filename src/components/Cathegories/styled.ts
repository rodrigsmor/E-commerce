import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 40vh;
    display: flex;
    grid-gap: 20px;
    align-items: center;
    justify-content: center;

    .boxCathegories {
        width: 280px;
        height: 200px;
        display: grid;
        cursor: pointer;
        place-items: center;
        box-shadow: 0px 0px 26px 2px rgba(0,0,0,0.3);
        background: url('../img/pictures/moveis.jpg');
        background-size: cover;

        h3 {
            color: #fff;
            padding: 10px 40px;
            background: #fe4365;
        }

        &:nth-of-type(2) {
            background: url('../img/pictures/moda.jpg');
            background-size: cover;
        }

        &:nth-of-type(3) {
            background: url('../img/pictures/eletronicos.jpg');
            background-size: cover;
        }
    }
`;