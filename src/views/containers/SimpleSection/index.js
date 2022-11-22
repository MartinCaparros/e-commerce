
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive";
import RemoveIcon from '@mui/icons-material/Remove';
import { StyledContainer, StyledDropdownToggle, StyledDropdown } from "./styled";

const SimpleSection = () => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdownB, setShowDropdownB] = useState(false);
    const [showDropdownC, setShowDropdownC] = useState(false);

    const variants = {
        open: { display:'block', opacity:1 },
        closed: { display:'none', opacity:0 } 
    }

    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})
    const isSM = useMediaQuery({ query: '(max-width: 500px)'})

    const dropMenu = (position) => {
        switch (position) {
            case '':
                setShowDropdown(!showDropdown)
                break;
            case 'B':
                setShowDropdownB(!showDropdownB)
                break;
            case 'C':
                setShowDropdownC(!showDropdownC)
                break;
            default:
                break;
        }
    }

    return <>
        {isLG && 
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
        }
        {
            isSM &&
            <StyledContainer>
                <p className="title">calm es <b>simple</b></p>
                <StyledDropdown>
                    <div className='toggleContainer' onClick={() => dropMenu('')}>
                        <StyledDropdownToggle><p>Simple de <b>comprar.</b></p></StyledDropdownToggle>
                        <div className="iconContainer">
                            {showDropdown
                                ? <RemoveIcon/>
                                : <AddIcon/>
                            }
                        </div>
                    </div>
                    <motion.div
                        animate={showDropdown ? 'open' : 'closed'}
                        transition={{delayChildren:2}}
                        variants={variants}
                    >
                        <div className='dropdownDiv'>
                            <p>Desarrollamos el colchón <strong>mejor puntuado</strong> de Argentina, para que no tengas que comparar entre miles de modelos.</p>
                        </div>
                    </motion.div>
                    <div className='toggleContainer' onClick={() => dropMenu('B')}>
                        <StyledDropdownToggle><p>Simple de <b>probar.</b></p></StyledDropdownToggle>
                        <div className="iconContainer">
                            {showDropdownB
                                ? <RemoveIcon/>
                                : <AddIcon/>
                            }
                        </div>
                    </div>
                    <motion.div
                        animate={showDropdownB ? 'open' : 'closed'}
                        variants={variants}
                    >
                        <div className='dropdownDiv'>
                            <p>Creemos que para encontrar tu <b> descanso ideal</b> necesitas más que 5 minutos en un local. Por eso tenes <b>30 noches</b> de prueba <b> ¡en tu casa! </b></p>                             
                        </div>
                    </motion.div>
                    <div className='toggleContainer' onClick={() => dropMenu('C')}>
                        <StyledDropdownToggle><p>Simple de <b>devolver.</b></p></StyledDropdownToggle>
                        <div className="iconContainer">
                            {showDropdownC
                                ? <RemoveIcon/>
                                : <AddIcon/>
                            }
                        </div>
                    </div>
                    <motion.div
                        animate={showDropdownC ? 'open' : 'closed'}
                        variants={variants}
                    >
                        <div className='dropdownDiv'>
                            <p>Si no lo amás, avisanos y coordinamos el retiro. Te devolvemos <b>hasta el último centavo, </b>así de simple.</p>
                        </div>
                    </motion.div>
                </StyledDropdown>
            </StyledContainer>
        }
    </>;  
}
 
export default SimpleSection;