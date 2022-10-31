import { StyledContainer } from "./styled";


const AwardsBanner = () => {

    return ( 
        <StyledContainer>
            <p className="title">creamos una nueva <b>experiencia de compra</b></p>
            <div className="iconDivs">
                <div className="awardDiv">
                    <img className="img" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_450,h_150/https://calmessimple.com.ar/wp-content/uploads/2021/03/150x150_IconoFacebook.png" alt="facebook"/>
                    <p>Caso de éxito <br/> Facebook 2020</p>
                </div>
                <div className="awardDiv">
                    <img className="star" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_86,h_80/https://calmessimple.com.ar/wp-content/uploads/2022/09/estrella.png" alt="estrella"/>
                        <p>El colchón mejor <br/> puntuado</p>
                </div>
                <div className="awardDiv">
                    <img className="img" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_450,h_150/https://calmessimple.com.ar/wp-content/uploads/2021/03/lanacion.png" alt="facebook"/>
                        <p>"Una marca innovadora para el mercado<br/> argentino"</p>
                </div>
                <div className="awardDiv">
                    <img className="SBD" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_177,h_100/https://calmessimple.com.ar/wp-content/uploads/2022/09/sello-buen-disenio.png" alt="facebook"/>
                        <p>Sello Buen Diseño <br/> Argentino</p>
                </div>
                <div className="awardDiv">
                    <img className="img" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_450,h_150/https://calmessimple.com.ar/wp-content/uploads/2021/03/150x150_IconoGoogle.png" alt="facebook"/>
                        <p>Selección programa de crecimiento acelerado</p>
                </div>
            </div>
        </StyledContainer>
    );
}
 
export default AwardsBanner;