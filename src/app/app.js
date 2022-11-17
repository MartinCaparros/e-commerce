import { 
    NavigationBar,
    HomeLogo,
    Banner,
    MainBanner,
    Footer,
    AwardsBanner,
    PromotionBanner,
    SimpleSection,
    ProductSection,
    MainProductBanner,
    CardContainer,
    DonationBanner,
    DataBanner,
    PaymentLayout,
    HeadBanner
}
from '../views';
import 'bootstrap/dist/css/bootstrap.css';
import { theme } from '../styled/index'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/pago'>
                    <PaymentLayout>TEST</PaymentLayout>
                </Route>
                <Route path='/'>
                    <header>
                        <HomeLogo/>
                        <HeadBanner 
                            bannerId={'clajrs2ey09tr0aizo8xiz2ei'}
                        />
                        <NavigationBar/>
                        <HeadBanner
                            bannerId={'clajrvd5s0bht0aiz7biogo88'}
                        />
                    </header>
                    <Switch>
                        <Route path='/' exact>
                            <main>
                                <MainBanner
                                    backgroundImage='https://calmessimple.com.ar/wp-content/uploads/2022/10/banner-almohadas-de-regalo2.webp'
                                    date={'hasta el 23 de octubre'}
                                    mainInfo = {{important: 'almohadas de regalo', secondary: 'comprando tu colchón'}}
                                />
                                <Banner
                                    height={'90px'}
                                    width={'100%'}
                                    backgroundColor={props => theme.strongOrangeCalm}
                                    textAlign={'center'}
                                    color={'#fff'}
                                    fontWeight={200}
                                    fontSize={'2rem'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    image={'https://calmessimple.com.ar/wp-content/uploads/2022/08/banner-beneficios-nuevo-3%402x.webp'}
                                />
                                <AwardsBanner/>
                                <PromotionBanner/>
                                <SimpleSection/>
                                <ProductSection/>
                                <MainProductBanner/>
                                <CardContainer
                                    text = {{normal:'completa tu descanso', important: 'ideal'}}
                                />
                                <DonationBanner/>
                                <DataBanner/>
                            </main>
                        </Route>
                        <Route path='/colchón'>
                            <h1>Colchones</h1>
                        </Route>
                        <Route path='/*'>404</Route>
                    </Switch>
                    <Footer/>    
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
