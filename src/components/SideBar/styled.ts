import styled from 'styled-components';

export const SideBarContainer = styled.header`
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
        padding: 0 10px;
        flex-direction: column;
        background: transparent;
    }
`;

export const TopSection = styled.section`
    color: #fff;
    width: 100%;
    height: 4rem;
    display: flex;
    padding: 0 5%;
    align-items: center;
    background: transparent;
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
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
    color: #fff;
    padding: 5%;

    ul {
        li {
            cursor: pointer;
            list-style: none;
            width: fit-content;
            position: relative;
            padding: 15px 0 15px 15px;

            &::after {
                content: "";
                width: 0px;
                height: 1px;
                display: block;
                background: #fff;
                position: absolute;
                transition: .5s linear;
            }

            &:hover {
                &::after {
                    width: 100%;
                }
            }
        }
    }
`;

export const BottomSection = styled.footer`
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4rem;
    display: flex;
    padding: 0 10%;
    color: #fe4365;
    font-weight: bold;
    position: absolute;
    align-items: center;
    background: #ffffff;

    p {
        cursor: pointer;
        width: fit-content;

        i {
            opacity: 1;
            color: #fe4365;
            margin: 0 0 0 10px;
            transition: .5s linear;
        }

        &::after {
            content: "";
            width: 0px;
            height: 1px;
            display: block;
            position: absolute;
            background: #fe4365;
            transition: .5s linear;
        }

        &:hover {
            &::after {
                width: 200px;
            }

            i {
                opacity: 0;
                margin: 0 0 0 calc(10px + 30px);
            }
        }
    }
`;