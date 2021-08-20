import * as S from './styled';
import Logomark from '../Logomark';

const Footer = () => {
    return (
        <S.Footer>
            <S.Container>
                <S.Section1>
                    <Logomark />


                    <S.InputWrapper>
                        <label htmlFor="newsletter">Cadastre-se em nossa Newsletter</label>
                        <div>
                            <input type="email" name="newsletter" placeholder="Digite seu melhor e-mail" className="inputEmail"/>
                            <input type="submit" value="cadastrar" className="inputSubmit"/>
                        </div>
                    </S.InputWrapper>
                </S.Section1>

                <S.Section2>
                    <nav>
                        <ul>
                            <li><a href="#sim">Principal</a></li>
                            <li><a href="#sim">Sobre nós</a></li>
                            <li><a href="#sim">Serviços</a></li>
                            <li><a href="#sim">Contatos</a></li>
                        </ul>
                    </nav>

                    <div className=""> 
                        <p>2021 @Direitos Autorais</p>

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
                    </div>
                </S.Section2>
            </S.Container>
        </S.Footer>
    );
}

export default Footer;