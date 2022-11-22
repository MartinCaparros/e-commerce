import { StyledContainer, StyledPill } from "./styled";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "@apollo/client";
import { getDescansoSonadoItems } from "../../core/apolloServices/DescansoSoñadoItems";

const ProductSection = () => {
    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})
    const isSM = useMediaQuery({ query: '(max-width: 500px)'})

    const {loading, error, data} = useQuery(getDescansoSonadoItems);

    if (error) return console.log(error);

    return ( <>
        {loading
            ? <p>Cargando</p>
            :(<>
                {isLG &&
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
                }
                {isSM && 
                    <StyledContainer>
                        <p className="title">encontrá tu <b>descanso soñado</b></p>
                        <div className="productsHolder">
                        {
                            data.descansoSonadoItems.map(({text, pillText, image}) => {
                                return <div>
                                    <img className="img" src={image} alt={text}/>
                                    <div className="infoContainer">
                                        {pillText 
                                            ?<div>
                                                <div className="pillHolder">
                                                    <StyledPill><p>{pillText}</p></StyledPill>
                                                </div>
                                                <div className="spanHolder">
                                                    <span>{text}</span>
                                                </div>
                                            </div>
                                            : <div>
                                                <span>{text}</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            })
                        }
                        </div>
                    </StyledContainer>
                }
            </>)
        }
        
    </>);
}
 
export default ProductSection;