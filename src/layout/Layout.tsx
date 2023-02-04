import { ReactNode } from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

interface Props {
    children: ReactNode;
}
const Layout = (props: Props) => {
  return (
    <div className="layout">
        <Header/>
        <Sidebar/>
        <main>{props.children}</main>
    </div>
  )
}

export default Layout