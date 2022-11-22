import { useState } from 'react';
import NavigationDropdown  from '../NavigationDropdown';
import { StyledNavbar, StyledNavLink, StyledContainer} from './styled';
import { useMediaQuery } from 'react-responsive';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const NavigationBar = () => {
    
    const [burguerMenu, setBurguerMenu] = useState('burguer unclicked');
    const [menuClass, setMenuClass] = useState('menu hidden');
    const [isClicked, setIsClicked] = useState(false);

    const showMenu = () => {
        if (!isClicked) {
            setBurguerMenu('burguer clicked');
            setMenuClass('menu visible');
        } else {
            setBurguerMenu('burguer unclicked');
            setMenuClass('menu hidden');
        }
        setIsClicked(!isClicked);
    }

    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})
    const isSM = useMediaQuery({ query: '(max-width: 500px)'})

    return (
        <>
            {isLG && 
                <StyledNavbar>
                    <StyledNavLink to='/'>el colchón</StyledNavLink>
                    <StyledNavLink to='/'>la base</StyledNavLink>
                    <NavigationDropdown
                        name={'almohadas'}
                        images = {[
                            {src: 'https://calmessimple.com.ar/wp-content/uploads/2022/05/almohada-infinita-1.webp', text: 'almohada infinita'},
                            {src: 'https://calmessimple.com.ar/wp-content/uploads/2022/05/alta-almohada-1.webp', text: 'alta almohada'}]}
                        items={[
                            {name: 'alta almohada', pill: {enabled: true, value: 'MÁS VENDIDA'}},
                            {name: 'almohada doble sensación', pill: {enabled: false, value: 'MÁS VENDIDA'}},
                            {name: 'almohada infinita', pill: {enabled: false, value: 'MÁS VENDIDA'}},
                            {name: 'almohada inteligente', pill: {enabled: false, value: 'MÁS VENDIDA'}}
                        ]}
                        header = {'NUESTRAS ALMOHADAS'}
                    />
                    <NavigationDropdown
                        name={'ropa de cama'}
                        images = {[
                            {src: 'https://calmessimple.com.ar/wp-content/uploads/2022/05/funda-tusor-4-estaciones.webp', text: 'funda tusor de 4 estaciones'},
                            {src: 'https://calmessimple.com.ar/wp-content/uploads/2022/05/edred%C3%B3n-abrazo.webp', text: 'edredón abrazo'}
                        ]}
                        items={[
                            {name: 'edredón abrazo', pill: {enabled: true, value: 'NUEVO'}},
                            {name: 'funda tusor de 4 estaciones', pill: {enabled: true, value: 'NUEVO'}},
                            {name: 'sábanas algodón & frescura', pill: {enabled: true, value: 'NUEVO'}},
                            {name: 'sábanas suavidad', pill: {enabled: true, value: 'NUEVO'}}
                        ]}
                        header = {'NUESTRA ROPA DE CAMA'}
                    />
                    <NavigationDropdown
                        name = {'accesorios'}
                        images = {[
                            {src: 'https://calmessimple.com.ar/wp-content/uploads/2022/06/colchon-mascotas.webp', text: 'descanso para toda la familia'},
                            {src: 'https://calmessimple.com.ar/wp-content/uploads/2022/06/protector-colchon.webp', text: 'alargá la vida de tu colchón'}
                        ]}
                        items={[
                            {name: 'colchón bb', pill: {enabled: true, value: 'NUEVO'}},
                            {name: 'colchón para perros', pill: {enabled: true, value: 'NUEVO'}},
                            {name: 'protector impermeable de colchón', pill: {enabled: true, value: 'NUEVO'}},
                        ]}
                        header = {'NUESTROS ACCESORIOS'}
                    />
                    <StyledContainer>
                        <StyledNavLink to='/'>localm</StyledNavLink>
                        <StyledNavLink to='/'>nosotrxs</StyledNavLink>
                        <StyledNavLink to='/'>blog</StyledNavLink>
                        <ShoppingBagOutlinedIcon fontSize="small" sx={{margin:'7px 40px 0px 100px', cursor:'pointer'}}/>
                    </StyledContainer>
                </StyledNavbar>
            }
            { isSM &&
                <StyledNavbar>
                    <div className='menuContainer'>
                        <div className='burguer-menu' onClick={showMenu}>
                            <span className={burguerMenu}></span>
                            <span className={burguerMenu}></span>
                            <span className={burguerMenu}></span>
                        </div>
                    </div>
                    <div className={menuClass}>
                        <div className='dropdown'>
                            <StyledNavLink href="#home">el colchón</StyledNavLink>
                            <StyledNavLink href="#link">la base</StyledNavLink>
                            <NavigationDropdown
                                name={'almohadas'}
                                images = {[
                                    {src: 'https://calmessimple.com.ar/wp-content/uploads/2022/05/almohada-infinita-1.webp', text: 'almohada infinita'},
                                    {src: 'https://calmessimple.com.ar/wp-content/uploads/2022/05/alta-almohada-1.webp', text: 'alta almohada'}]}
                                items={[
                                    {name: 'alta almohada', pill: {enabled: true, value: 'MÁS VENDIDA'}},
                                    {name: 'almohada doble sensación', pill: {enabled: false, value: 'MÁS VENDIDA'}},
                                    {name: 'almohada infinita', pill: {enabled: false, value: 'MÁS VENDIDA'}},
                                    {name: 'almohada inteligente', pill: {enabled: false, value: 'MÁS VENDIDA'}}
                                ]}
                                header = {'NUESTRAS ALMOHADAS'}
                            />
                            <NavigationDropdown
                                name={'ropa de cama'}
                                images = {[
                                    {src: 'https://calmessimple.com.ar/wp-content/uploads/2022/05/funda-tusor-4-estaciones.webp', text: 'funda tusor de 4 estaciones'},
                                    {src: 'https://calmessimple.com.ar/wp-content/uploads/2022/05/edred%C3%B3n-abrazo.webp', text: 'edredón abrazo'}
                                ]}
                                items={[
                                    {name: 'edredón abrazo', pill: {enabled: true, value: 'NUEVO'}},
                                    {name: 'funda tusor de 4 estaciones', pill: {enabled: true, value: 'NUEVO'}},
                                    {name: 'sábanas algodón & frescura', pill: {enabled: true, value: 'NUEVO'}},
                                    {name: 'sábanas suavidad', pill: {enabled: true, value: 'NUEVO'}}
                                ]}
                                header = {'NUESTRA ROPA DE CAMA'}
                            />
                            <NavigationDropdown
                                name = {'accesorios'}
                                images = {[
                                    {src: 'https://calmessimple.com.ar/wp-content/uploads/2022/06/colchon-mascotas.webp', text: 'descanso para toda la familia'},
                                    {src: 'https://calmessimple.com.ar/wp-content/uploads/2022/06/protector-colchon.webp', text: 'alargá la vida de tu colchón'}
                                ]}
                                items={[
                                    {name: 'colchón bb', pill: {enabled: true, value: 'NUEVO'}},
                                    {name: 'colchón para perros', pill: {enabled: true, value: 'NUEVO'}},
                                    {name: 'protector impermeable de colchón', pill: {enabled: true, value: 'NUEVO'}},
                                ]}
                                header = {'NUESTROS ACCESORIOS'}
                            />
                            <StyledNavLink href="#home">localm</StyledNavLink>
                            <StyledNavLink href="#link">nosotrxs</StyledNavLink>
                            <StyledNavLink href="#link">blog</StyledNavLink>
                        </div>
                    </div>
                    <div><StyledNavLink to='/'><img src='https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_72,h_37/https://calmessimple.com.ar/wp-content/uploads/2022/05/Logo-Mobile.png' alt='logo'></img></StyledNavLink></div>
                    <ShoppingBagOutlinedIcon fontSize="medium" sx={{margin:'7px 10px 0px auto', cursor:'pointer'}}/>
                </StyledNavbar>
            }
        </>
    )
};

export default NavigationBar;


