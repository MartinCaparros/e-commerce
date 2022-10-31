import { StyledContainer } from "./styled";

const ProductSection = () => {
    return ( 
        <StyledContainer>
            <p className="title">encontrá tu <b>descanso soñado</b></p>
            <div className="dataDiv">
                <div className="imgDiv">
                    <a href="#home">
                        <img className="img" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_686,h_478/https://calmessimple.com.ar/wp-content/uploads/2022/09/colchones.png" alt="product"/>
                    </a>
                    <p className="text">colchón calm</p>
                </div>
                <div className="imgDiv">
                    <a href="#home">
                        <img className="img" src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_686,h_478/https://calmessimple.com.ar/wp-content/uploads/2022/09/almohadas-horizontal.png" alt="product"/>
                    </a>
                    <p className="text">almohadas</p>
                </div>
            </div>
         </StyledContainer> 
    );
}
 
export default ProductSection;