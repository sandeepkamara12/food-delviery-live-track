import Header from '../common/Header'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => {
    return (
        <main id="content" className={``}>
            <Header />
            <div className='px-3 py-4 h-[calc(100vh-100px)] overflow-auto'>
            <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default SidebarLayout
