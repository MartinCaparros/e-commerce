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
    CardContainer
}
from '../views';
import 'bootstrap/dist/css/bootstrap.css';
import { theme } from '../styled/index'; 

function App() {
    return (
        <>
            <div style={{position:'sticky', zIndex:'99'}}>
                <HomeLogo/>
                <Banner 
                    height={'30px'}
                    width={'100%'}
                    backgroundColor={'black'}
                    textAlign={'center'}
                    color={'#fff'}
                    fontWeight={700}
                    fontSize={'13px'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    text={'🔥 10% OFF EXTRA 🔥 pagando por transferencia con el cupón "CALMFERENCIA"'}
                />
                <NavigationBar/>
                <Banner 
                    height={'40px'}
                    width={'100%'}
                    backgroundColor={props => theme.violetCalm}
                    textAlign={'center'}
                    color={'#fff'}
                    fontWeight={700}
                    fontSize={'1rem'}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    text={'El colchón de tus sueños viene con almohadas de 🎁 REGALO 🎁 ¡No te lo pierdas! Ver colchones 🤩'}
                />
            </div>
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
            </main>
            <Footer/>
        </>
    );
}

export default App;
