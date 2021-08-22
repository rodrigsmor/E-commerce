import styled from 'styled-components';

export const Header = styled.header`
    top: 0;
    right: 0;
    z-index: 9;
    width: 100%;
    height: 4rem;
    position: fixed;
    background: #fff;
    font-family: Poppins, sans-serif;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);

    .headerContainer {
        width: 100%;
        height: 100%;
        padding: 0 8%;
        display: flex;
        color: #962062;
        font-size: 15px;
        align-items: center;
        justify-content: space-between;
    }
`;

export const UserInteractions = styled.div`
    display: flex;
    grid-gap: 15px;
    color: #fe4365;
    font-size: 20px;
    align-items: center;

    i {
        cursor: pointer;
    }

    .cartBox {
        display: flex;
        width: fit-content;
        height: fit-content;
        align-items: center;

        span {
            color: #fff;
            width: 15px;
            height: 15px;
            display: flex;
            font-size: 10px;
            font-weight: 600;
            line-height: 15px;
            border-radius: 50%;
            position: absolute;
            align-items: center;
            background: #fe4365;
            letter-spacing: -1px;
            margin: 0 0 20px 15px;
            justify-content: center;
        
            p {
                width: fit-content;
                height: fit-content;
                margin: 0 1px 0 0;
            }
        
            &.notDisplay {
                display: none;
            }
        }
    }
`;