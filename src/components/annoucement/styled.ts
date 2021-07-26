import styled from 'styled-components';

export const Container = styled.section`
    color: #fff;
    width: 100%;
    padding: 0 8%;
    height: 250px;
    display: flex;
    position: relative;
    background: #fe4365;
    overflow: hidden !important;
    justify-content: space-between;
    
    .contentBox {
        width: 40%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        h1 {
            display: flex;
            font-size: 40px;
            position: relative;
            align-items: center;
            justify-content: center; 

            &::before {
                width: 503px;
                opacity: 0.3;
                display: flex;
                color: #F5DADD;
                font-size: 70px;
                position: absolute;
                text-align: center;
                content: 'BLACK FRIDAY';
            }
        }

        h3 {
            font-size: 20px;
        }

        .barTitle {
            height: 2px;
            width: 50px;
            margin: 0 0 10px;
            background: #fff;
        }

        button {
            color: #fff;
            border: none;
            display: flex;
            flex-wrap: wrap;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;
            margin: 10px 0 0;
            width: fit-content;
            align-items: center;
            background: transparent;
            font-family: Poppins, sans-serif;

            i {
                margin: 0 0 0 10px;
            }

            span {
                width: 0px;
                height: 2px;
                display: block;
                margin: 20px 0 0;
                background: #fff;
                flex-basis: 100%;
                position: absolute;
                transition: .5s linear;
            }

            &:hover span {
                width: 60px;
            }
        }
    }

    .picture {
        height: 100%;
        overflow: hidden;

        img {
            z-index: 3;
            height: 250px;
            position: relative;
        }

        span {
            z-index: 1;
            position: absolute;
            border-radius: 50%;

            &:nth-of-type(1) {
                width: 300px;
                right: 400px;
                height: 300px;
                margin: 50px 0 0;
                background: transparent;
                border: 5px solid #F5DADD;
            }

            &:nth-of-type(2) {
                width: 250px;
                height: 250px;
                right: 300px;
                margin: 10px 0 0;
                background: #f5dadd;
            }

            &:nth-of-type(3) {
                width: 400px;
                right: 0;
                height: 400px;
                margin: 80px -180px 0 0;
                border: 4px solid #f5dadd;
            }

            &:nth-of-type(4) {
                width: 300px;
                right: 0;
                height: 300px;
                margin: 100px -120px 0 0;
                background: #f5dadd;
            }
        }
    }
`;