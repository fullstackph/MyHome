import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Seo from './Seo'

const Layout = ({children, title}:any) => {
  return (
    <>
    <Seo title={title}/>
    <Header/>
        {children}
    <Footer/>
    </>
  )
}

export default Layout