import React from "react";
import { StyledNavbar, StyledNavLink, StyledContainer} from './styled';
import NavigationDropdown  from '../NavigationDropdown';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const NavigationBar = () => {
    return (
        <StyledNavbar>
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
                    <StyledContainer>
                        <StyledNavLink href="#home">localm</StyledNavLink>
                        <StyledNavLink href="#link">nosotrxs</StyledNavLink>
                        <StyledNavLink href="#link">blog</StyledNavLink>
                        <ShoppingBagOutlinedIcon fontSize="small" sx={{margin:'7px 40px 0px 100px', cursor:'pointer'}}/>
                    </StyledContainer>
         </StyledNavbar>
    )
};

export default NavigationBar;


