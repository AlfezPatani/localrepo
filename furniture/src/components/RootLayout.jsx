import { Header,Footer} from './index'
import {Outlet} from 'react-router-dom'

function RootLayout(){
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/></>
    )
}

export default RootLayout