import React from 'react'
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import styles from "./Layout.module.css"
import { BrowserRouter as Router } from "react-router-dom"
class Layout extends React.Component {
    render() {
        return (
            <Router>
                <div className={styles.container}>
                    <Header/>
                            <main>{this.props.children}</main>
                    <Footer/>
                </div>
            </Router>


        )
    }
}

export default Layout