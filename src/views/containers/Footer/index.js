import { StyledContainer } from "./styled";
import FooterColumn from "../FooterColumn";
import Newsletter from "../Newsletter";
import { useMediaQuery } from "react-responsive";

const Footer = (items) => {

    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})
    const isSM = useMediaQuery({ query: '(max-width: 500px)'})
    
    return ( 
        <StyledContainer>
            { isLG && <>
                <FooterColumn
                    title={'productos'}
                    items={[
                        {header: 'COLCHONES', links:[{text:'colchón calm', href:'#'}, {text:'colchón bb', href:'#'}]},
                        {header:'BASES', links:[{text:'base de cama calm', href:'#'}]},
                        {header:'ALMOHADAS', links:[
                                {text:'alta almohada', href:'#'},
                                {text:'almohada doble sensación', href:'#'},
                                {text:'almohada infinita', href:'#'},
                                {text:'almohada inteligente', href:'#'}                    
                        ]}
                    ]}
                />
                <FooterColumn
                    items={[
                        {header: 'ROPA DE CAMA', links:[
                            {text:'edredón abrazo', href:'#'},
                            {text:'funda tusor 4 estaciones', href:'#'},
                            {text:'sábanas algodon & frescura', href:'#'},
                            {text:'sábanas suavidad', href:'#'}
                        ]},
                        {header:'ACCESORIOS', links:[{text:'colchón para perros', href:'#'}, {text:'protector impermeable de colchón', href:'#'}]},
                        {header:'FERIA CALM', links:[
                                {text:'colchón feria', href:'#'},                
                        ]}
                    ]}
                />
                <FooterColumn
                    title={'nosotros'}
                    items={[
                        {links:[
                            {text:'¿qué es calm?', href:'#'},
                            {text:'preguntas frecuentes', href:'#'},
                            {text:'opiniones', href:'#'},
                            {text:'blog', href:'#'},                    
                            {text:'sumate', href:'#'},                    
                            {text:'compromiso', href:'#'},                    
                            {text:'donde encontrarnos', href:'#'}                    
                        ]}
                    ]}
                />
                <FooterColumn
                    title={'contacto'}
                    items={[
                        {links:[
                            {text:'tel: +5491151714371', href:'#'},
                            {text:'hola@calmessimple.com.ar', href:'#'},
                            {text:'arrepentimiento de compra', href:'#'},
                            {text:'godoy cruz 1737, caba', href:'#'}                    
                        ]}
                    ]}
                />
                <Newsletter/>
            </>}
            { isSM && <>
                <div className="twoColumns">
                    <FooterColumn
                        title={'productos'}
                        items={[
                            {header: 'COLCHONES', links:[{text:'colchón calm', href:'#'}, {text:'colchón bb', href:'#'}]},
                            {header:'BASES', links:[{text:'base de cama calm', href:'#'}]},
                            {header:'ALMOHADAS', links:[
                                    {text:'alta almohada', href:'#'},
                                    {text:'almohada doble sensación', href:'#'},
                                    {text:'almohada infinita', href:'#'},
                                    {text:'almohada inteligente', href:'#'}                    
                            ]}
                        ]}
                    />
                    <FooterColumn
                        items={[
                            {header: 'ROPA DE CAMA', links:[
                                {text:'edredón abrazo', href:'#'},
                                {text:'funda tusor 4 estaciones', href:'#'},
                                {text:'sábanas algodon & frescura', href:'#'},
                                {text:'sábanas suavidad', href:'#'}
                            ]},
                            {header:'ACCESORIOS', links:[{text:'colchón para perros', href:'#'}, {text:'protector impermeable de colchón', href:'#'}]},
                            {header:'FERIA CALM', links:[
                                    {text:'colchón feria', href:'#'},                
                            ]}
                        ]}
                    />
                </div>
                <div className="twoColumns">
                    <FooterColumn
                        title={'nosotros'}
                        items={[
                            {links:[
                                {text:'¿qué es calm?', href:'#'},
                                {text:'preguntas frecuentes', href:'#'},
                                {text:'opiniones', href:'#'},
                                {text:'blog', href:'#'},                    
                                {text:'sumate', href:'#'},                    
                                {text:'compromiso', href:'#'},                    
                                {text:'donde encontrarnos', href:'#'}                    
                            ]}
                        ]}
                    />
                    <FooterColumn
                        title={'contacto'}
                        items={[
                            {links:[
                                {text:'tel: +5491151714371', href:'#'},
                                {text:'hola@calmessimple.com.ar', href:'#'},
                                {text:'arrepentimiento de compra', href:'#'},
                                {text:'godoy cruz 1737, caba', href:'#'}                    
                            ]}
                        ]}
                    />
                </div>
                <Newsletter/>
            </>}
        </StyledContainer> 
    );
}
 
export default Footer;