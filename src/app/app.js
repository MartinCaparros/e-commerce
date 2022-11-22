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
import { useMediaQuery } from 'react-responsive';
import { getProductCards } from '../views/core/apolloServices/ProductCards'
import { getNewProductCards } from '../views/core/apolloServices/NewProductCards'

function App() {
    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})

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
                                    bannerId={'clall9rmivloy0akaseim342o'}
                                />
                                <Banner
                                    height={ isLG ? '90px' : '70px'}
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
                                <MainProductBanner
                                    bannerId='clams2rpoaltn0akauya9mps2'
                                />
                                <CardContainer
                                    text= {{normal:'completa tu descanso', important: 'ideal'}}
                                    query= {getProductCards}
                                />
                                <DonationBanner/>
                                <CardContainer
                                    text={{normal:'nuevos', important:'lanzamientos'}}
                                    query = {getNewProductCards}
                                />
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
