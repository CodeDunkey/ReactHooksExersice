import './Page.scss'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Footer } from './Footer/Footer'
export const Page = () => {

    return(
        <div className='Page'>
             <Header />
            <Main />
            <Footer />         
        </div>
    )
}