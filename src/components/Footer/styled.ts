import styled from 'styled-components';

export const Footer = styled.footer`
    width: 100%;
    height: fit-content;
    background: #cc0025;
`;

export const NewsLetter = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 5%;
    display: flex;
    max-width: 100vw;
    align-items: center;
    background: #cc0025;
    justify-content: space-between;
`;

export const InputWrapper = styled.form`
    margin: 0;
    color: #fff;
    font-size: 15px;

    label {
        margin: 0 0 0 10px;
    }

    div {
        width: 350px;
        display: flex;
        background: #fcd4d9;
        align-items: center;
        border-radius: 30px;
        padding: 2px 5px 2px 20px;
        border: 1px solid #962062;
        justify-content:space-between;

        .inputEmail {
            width: 80%;
            outline: none;
            color: #962062;
            font-size: 13px;
            border: transparent;
            background: transparent;
            font-family: Poppins, sans-serif;

            &::-webkit-input-placeholder {
                color: #962062;
            }
        }

        .inputSubmit {
            color: #fff;
            padding: 5px;
            cursor: pointer;
            margin: 0 0 0 10px;
            border-radius: 30px;
            border: transparent;
            background: #fe3465;
            transition: .5s all linear;
            font-family: Poppins, sans-serif;

            &:hover {
                background: #cc0025;
            }
        }
    }
`;

export const SocialMedias = styled.div`
    display: flex;
    grid-gap: 10%;
    align-items: center;

    i {
        color: #fff;
        font-size: 25px;
    }
`;