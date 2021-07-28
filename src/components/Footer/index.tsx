import * as S from './styled';

const Footer = () => {
    return (
        <S.Footer>
            <S.NewsLetter>
                <S.InputWrapper>
                    <label htmlFor="newsletter">Cadastre-se em nossa Newsletter</label>
                    <div>
                        <input type="email" name="newsletter" placeholder="Digite seu melhor e-mail" className="inputEmail"/>
                        <input type="submit" value="cadastrar" className="inputSubmit"/>
                    </div>
                </S.InputWrapper>

                <S.SocialMedias> 
                    <a href="#site">
                        <i className='bx bx-globe'></i>
                    </a>
                    <a href="#linkedin"> 
                        <i className='bx bxl-linkedin-square' ></i>
                    </a>
                    <a href="#twitter"> 
                        <i className='bx bxl-twitter' ></i>
                    </a>
                    <a href="#instagram">
                        <i className='bx bxl-instagram' ></i>
                    </a>
                    <a href="#facebook"> 
                        <i className='bx bxl-facebook-circle'></i>
                    </a>
                </S.SocialMedias>
            </S.NewsLetter>
        </S.Footer>
    );
}

export default Footer;