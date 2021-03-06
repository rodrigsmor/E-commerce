import styled from 'styled-components';

export const Footer = styled.footer`
    width: 100%;
    max-width: 100vw;
    height: fit-content;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 100vw;
    height: fit-content;
`;

export const Section1 = styled.section`
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 14%;
    max-width: 100vw;
    background: #fff;
    align-items: center;
    justify-content: space-between;
    border-top: solid 1px rgba(0, 0, 0, 0.05);
`;

export const Section2 = styled.section`
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 14%;
    background: #f67280;
    align-items: center;
    justify-content: space-between;

    li {
        list-style: none;
        display: inline-flex;
        padding: 0 0 0 15px;
        
        &:first-of-type {
            padding: 0;
        }
    
        a {
            color: #fff;
            font-size: 15px;
            font-weight: 400;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    div {
        height: 100%;
        color: #fff;
        display: flex;
        grid-gap: 50px;
        align-items: center;
    }
`;

export const SocialMedias = styled.div`
    display: flex;
    height: 100%;
    grid-gap: 15pt !important;
    align-items: center;

    i {
        color: #fff;
        font-size: 25px;
    }
`;

export const Copyrights = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    grid-gap: 15px;
    background: #fe4365;
    align-items: center;
    justify-content: center;

    h6 {
        color: #fff;
        font-size: 15px;
        font-weight: 300;
    }

    .social-medias {
        display: flex;
        grid-gap: 5px !important;

        a {
            color: #fff;
            font-size: 20px;
        }
    }
`;

export const InputWrapper = styled.form`
    margin: 0;
    display: flex;
    color: #594f4f;
    grid-gap: 15px;
    font-size: 15px;
    align-items: center;

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