import { StyledContainer } from "./styled";

const SimpleSection = () => {
    return ( 
        <StyledContainer>
            <p className="title">calm es <b>simple</b></p>
            <div className="dataDiv">
                <div className="infoDivs">
                    <p className="titleData">simple de <b>comprar</b></p>
                    <p className="description">Desarrollamos el colchón <b>mejor puntuado</b> de Argentina, para que no tengas que comparar entre miles de modelos.</p>
                </div>
                <div className="infoDivs">
                    <p className="titleData">simple de <b>probar</b></p>
                    <p className="description">Creemos que para encontrar tu <b> descanso ideal</b> necesitas más que 5 minutos en un local. Por eso tenes <b>30 noches</b> de prueba <b> ¡en tu casa! </b></p>
                </div>
                <div className="infoDivs">
                    <p className="titleData">simple de <b>devolver</b></p>
                    <p className="description">Si no lo amás, avisanos y coordinamos el retiro. Te devolvemos <b>hasta el último centavo,</b> así de simple.</p>
                </div>
            </div>
        </StyledContainer> 
    );  
}
 
export default SimpleSection;