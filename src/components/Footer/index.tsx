import * as S from './styled';
import Logomark from '../Logomark';

const Footer = () => {
    return (
        <S.Footer>
            <S.Container>
                <S.Section1>
                    <Logomark />

                    {/* <nav>
                        <ul>
                            <li><a href="#">Principal</a></li>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Contatos</a></li>
                        </ul>
                    </nav> */}

                    <S.InputWrapper>
                        <label htmlFor="newsletter">Cadastre-se em nossa Newsletter</label>
                        <div>
                            <input type="email" name="newsletter" placeholder="Digite seu melhor e-mail" className="inputEmail"/>
                            <input type="submit" value="cadastrar" className="inputSubmit"/>
                        </div>
                    </S.InputWrapper>
                </S.Section1>
            </S.Container>
        </S.Footer>
    );
}

export default Footer;