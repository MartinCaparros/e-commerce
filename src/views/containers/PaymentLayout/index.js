import { useState } from "react";
import { StyledBadge, StyledContainer } from "./styled";
import { CSSTransition } from "react-transition-group";
import { validValue, regExp, validateRequiredValues} from "../../../utils/validations";

const PaymentLayout = () => {

    const [orderInfo, setOrderInfo] = useState({
        payment_method: "",
        payment_method_title: "",
        set_paid: false,
        billing: {
          first_name: "",
          last_name: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "",
          email: '',
          phone: ""
        },
        shipping: {
          first_name: "",
          last_name: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "",
          cuit:''
        },
        line_items: []
    });
    const [showData, setShowData] = useState(false);
    const [showShipping, setShowShipping] = useState();
    const [showPayment, setShowPayment] = useState(false);

    const handleChange = (e) => {
        if (e.target.name === 'phone' && !validValue(regExp.number, e.target.value)) {
            return e.target.value = '';
        }
    }
    const handleData = (values) => {
        let errors = validateRequiredValues(values, [], values);
        console.log(errors, values);
        if (!errors) {
            console.log('sin errores')
        } else {

        }
    }

    return (
        <StyledContainer>
            <div className="leftContainer">
                <div className="paymentLogo">
                    <img src='https://calmessimple.com.ar/wp-content/uploads/2021/02/300x100_NuevoLogoHeaderWeb-e1631819255373.png' alt='calm'/>
                </div>
                <div className="formContainer">
                    <div className="form">
                        <p className="title"><StyledBadge>1</StyledBadge>Datos de contacto</p>
                        <div className="inputContainer">
                            <div className="singleInputContainer">
                                <label>Correo electrónico*</label>
                                <input 
                                    className="inputs" 
                                    style={{textTransform: 'lowercase'}}
                                    name='email'
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="singleInputContainer">
                                <label>Teléfono*</label>
                                <input 
                                    className="inputs"
                                    name= 'phone'
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="inputContainer">
                            <div className="singleInputContainer">
                                <label>Nombre*</label>
                                <input 
                                    className="inputs"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="singleInputContainer">
                                <label>Apellido*</label>
                                <input 
                                    className="inputs"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="inputContainer">
                            <div className="oneInput">
                                <label>DNI*</label>
                                <input 
                                    className="inputs"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <input type='checkbox'/>
                            <label>Quiero factura A</label>
                        </div>
                        <div>
                            <input type='checkbox'/>
                            <label>Quiero recibir novedades!</label>
                        </div>
                        <div className="buttonContainer">
                            <button
                                onClick={() => handleData({
                                    name: orderInfo.shipping.first_name,
                                    last_name:orderInfo.shipping.last_name,
                                    phone:orderInfo.shipping.phone,
                                    identification: orderInfo.shipping.cuit,
                                    email: orderInfo.shipping.email
                                })}
                            >
                                Continuar a Información de envío
                            </button>
                        </div>
                    </div>
                </div>
                <div className="formContainer">
                    <form className="form">
                        <p className="title"><StyledBadge>2</StyledBadge>Información de envío</p>
                        <CSSTransition 
                            in={showShipping}
                            timeout={300}
                            unmountOnExit
                            onEnter={() => {setShowData(false)}}
                            onExited={() => true}
                        >
                            <div className="inputContainer">
                                <div className="singleInputContainer">
                                    <label>Dirección (calle y altura) *</label>
                                    <input className="inputs"/>
                                </div>
                                <div className="singleInputContainer">
                                    <label>Piso, Departamento, Timbre</label>
                                    <input className="inputs"/>
                                </div>
                            </div>
                            <div className="inputContainer">
                                <div className="singleInputContainer">
                                    <label>Localidad*</label>
                                    <input className="inputs"/>
                                </div>
                                <div className="singleInputContainer">
                                    <label>Provincia*</label>
                                    <select className="inputs"/>
                                </div>
                            </div>
                            <div className="inputContainer">
                                <div className="singleInputContainer">
                                    <div className="zipCodeContainer">
                                        <label>Codigo Postal*</label>
                                        <div className="linkContainer">
                                            <a href="https://www.oca.com.ar/Busquedas/CodigosPostales" target='_blank' rel='noreferrer'> No sé mi codigo postal</a>
                                        </div>
                                    </div>
                                    <input className="inputs"/>
                                </div>
                                <div className="singleInputContainer">
                                    <label>Nombre de quien recibe el pedido:</label>
                                    <select className="inputs"/>
                                </div>
                            </div>
                            <div className="inputContainer">
                                <div className="singleInputContainer">
                                    <label>Elegí la forma de envío</label>
                                    <select className="inputs"></select>
                                </div>
                            </div>
                            <div>
                                <input type='checkbox'/>
                                <label>Quiero recibir novedades!</label>
                            </div>
                            <div className="buttonContainer">
                                <button>Continuar a Información de envío</button>
                            </div>
                        </CSSTransition>
                    </form>
                </div>
                <div className="formContainer">
                    <form className="form">
                        <p className="title"><StyledBadge>3</StyledBadge>Forma de Pago</p>
                        <CSSTransition 
                            className="formContainer"
                            in={showPayment}
                            timeout={300}
                            unmountOnExit
                            onEnter={() => {setShowData(false)}}
                            onExited={() => true}
                        >
                        <div className="inputContainer">
                            <div className="singleInputContainer">
                                <label>Correo electrónico *</label>
                                <input className="inputs"/>
                            </div>
                            <div className="singleInputContainer">
                                <label>Teléfono *</label>
                                <input className="inputs"/>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <div className="singleInputContainer">
                                <label>Nombre *</label>
                                <input className="inputs"/>
                            </div>
                            <div className="singleInputContainer">
                                <label>Apellido*</label>
                                <input className="inputs"/>
                            </div>
                        </div>
                        <div className="inputContainer">
                            <div className="oneInput">
                                <label>DNI*</label>
                                <input className="inputs"/>
                            </div>
                        </div>
                        <div >
                            <input type='checkbox'/>
                            <label>Quiero factura A</label>
                        </div>
                        <div>
                            <input type='checkbox'/>
                            <label>Quiero recibir novedades!</label>
                        </div>
                        <div className="buttonContainer">
                            <button>Continuar a Información de envío</button>
                        </div>
                        </CSSTransition>
                    </form>
                </div>
            </div>
            <div style={{backgroundColor:'#EAEAEA', width:'40%'}}>cart data</div>
        </StyledContainer> 
    );
}
 
export default PaymentLayout;