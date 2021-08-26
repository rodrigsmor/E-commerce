import styled from 'styled-components';

export const SideBarContainer = styled.div`
    top: 0;
    left: -30vw;
    width: 30vw;
    height: 100vh;
    position: fixed;
    background: #fe4365;
    transition: .5s linear;

    &.active {
        left: 0;
    }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        color: #ffffff;
        padding: 0 10%;
        flex-direction: column;
        background: transparent;
    }
`;

export const TopSection = styled.section`
    width: 100%;
    height: 4rem;
    display: flex;
    border-bottom: solid 1px #fff;
    align-items: center;
    background: transparent;

    button {
        width: 30px;
        height: 25px;
        border: none;
        outline: none;
        display: flex;
        cursor: pointer;
        flex-direction: column;
        background: transparent;
        justify-content: center;

        span {
            width: 100%;
            height: 5px;
            display: block;
            background: #fff;
            position: relative;
            border-radius: 25px;

            &:nth-child(1) {
                transform: rotate(-45deg);
            }

            &:nth-child(2) {
                margin-top: -5px;
                transform: rotate(45deg);
            }
        }
    }
`;

export const NavSection = styled.nav`

`;