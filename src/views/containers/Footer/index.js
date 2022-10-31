import { StyledContainer } from "./styled";
import FooterColumn from "../FooterColumn";
import Newsletter from "../Newsletter";

const Footer = (items) => {
    return ( 
        <StyledContainer>
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
        </StyledContainer> 
    );
}
 
export default Footer;