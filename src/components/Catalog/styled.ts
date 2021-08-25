import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    margin: auto;
    display: flex;
    padding: 50px 10%;
    height: fit-content;
    flex-direction: column;

    .sectionTitle {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        margin: 0 0 30px;

        span {
            height: 3px;
            width: 100px;
            display: block;
            margin: 5px auto 0;
            background: #594f4f;
        }
    }
    
    .Technologies {
        width: 100%;
        display: flex;
        grid-gap: 30px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;

        .boxProduct {
            width: 300px;
            height: 350px;
            padding: 20px; 
            display: flex;
            font-size: 15pt;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            box-shadow: 0px 0px 25px -4px rgba(0, 0, 0, .2);

            .productPicture {
                width: 100%;
                height: 200px;
                display: flex;
                background: #f5dadd;
                align-items: center;
                justify-content: center;

                img {
                    width: auto;
                    height: 70%;
                }
            }

            .informations {
                width: 100%;
                height: 150px;
                padding: 10px 0 0;
                text-align: center;
                align-items: center;

                h6 {
                    color: #fe4365;
                }

                button {
                    border: 0;
                    color: #fff;
                    cursor: pointer;
                    font-size: 10pt;
                    margin: 10px 0 0;
                    padding: 8px 20px;
                    background: #fe4365;
                    border-radius: 10px;
                    font-family: Poppins, sans-serif;
                    transition: background .5s linear;

                    &:hover {
                        background: #ff0533;
                    }
                }
            }
        }
    }
`;

export const CategoriesBar = styled.div`
    display: flex;
    width: 50vw;
    margin: 10px 0 0;
    align-items: center;
    justify-content: space-between;

    button {
        border: none;
        outline: none;
        color: #594f4f;
        cursor: pointer;
        font-weight: 600;
        padding: 5px 20px;
        font-family: 18px;
        border-radius: 15px;
        transition: .3s linear;
        background: transparent;
        font-family: Poppins, sans-serif;

        &:nth-of-type(3) {
            font-size: 20px;
        }

        &:hover,
        &.selected {
            border-bottom: 3px solid #594f4f;
            background: rgba(245, 218, 221, 0.35);
        }
    }
`;