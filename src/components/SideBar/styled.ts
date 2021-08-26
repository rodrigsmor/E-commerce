import styled from 'styled-components';

export const SideBarContainer = styled.div`
    top: 0;
    left: -30vw;
    width: 30vw;
    height: 100vh;
    position: fixed;
    background: #fe4365;
    transition: all .5s cubic-bezier(0.165, 0.84, 0.44, 1);

    &.active {
        left: 0;
        box-shadow: -1px 2px 39px 2px rgba(0,0,0,0.30);
    }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        color: #ffffff;
        flex-direction: column;
        background: transparent;
    }
`;

export const TopSection = styled.section`
    color: #fff;
    width: 100%;
    height: 4rem;
    display: flex;
    padding: 0 10%;
    align-items: center;
    background: transparent;
    border-bottom: solid 1px rgba(255, 255, 255, 0.2);
    justify-content: space-between;

    i, span {
        color: #fff !important;
    }

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