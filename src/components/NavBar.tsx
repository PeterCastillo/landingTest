import Logo from "../svg/Logo"
import "../style/navbar.css"
import { AiOutlineArrowRight, AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"

const elements = [
    {
        name: "Buy / Seel",
    },
    {
        name: "Grow",
    },
    {
        name: "Markets",
    },
    {
        name: "Business",
    },
    {
        name: "Support",
    },
]

const NavBar = () => {
    const [ show , setShow ] = useState(true) 
    const handleMenu = () => setShow(!show)
    return (
        <div className="navContainer">
            <div className="nav">
                <div className="nav_logo">
                    <Logo/>
                    <AiOutlineMenu className="nav_logo_menu" onClick={handleMenu}/>
                </div>
                <div className={show?"nav_menu show_menu":"nav_menu"}>
                    <div className="logo_desktop"><Logo/></div>
                    <div className="nav_menu_list">
                        <span onClick={handleMenu} className="nav_menu_list_btn"><AiOutlineArrowRight/></span>
                        {
                            elements.map((item,index) =>(
                                <span className="nav_menu_list_element" key={index}>{item.name}</span>
                            ))
                        }
                    </div>
                    <div className="nav_menu_btns">
                        <button className="nav_menu_btns_btn_signIn">Sign in</button>
                        <button className="nav_menu_btns_btn_singUp">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar