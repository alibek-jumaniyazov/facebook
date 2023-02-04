import Logo from '../Images/Logo.svg'
import Bell from '../Images/Frame3.svg'
import Chat from '../Images/Frame2.svg'
import Menu from '../Images/Frame1.svg'
import Home from '../Images/div.svg'
import Users from '../Images/Vector (2).svg'
import users from '../Images/Vector.svg'
import home from '../Images/VectorH.svg'
import Videos from '../Images/Vector (3).svg'
import videos from '../Images/videoes.svg'
import Shop from '../Images/Vector (4).svg'
import shop from '../Images/shop_blue.svg'
import Games from '../Images/Games.svg'
import games from '../Images/gamess.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import user from '../Images/user.jpg'




export default function Header() {

    const [left, setLeft] = useState(830)
    const [h, seth] = useState(Home)
    const [u, setU] = useState(Users)
    const [v, setV] = useState(Videos)
    const [sh, setSh] = useState(Shop)
    const [g, setg] = useState(Games)


   function Logoo(){
        setLeft(830)
        setU(Users)
        seth(Home)
        setV(Videos)
        setSh(Shop)
        setg(Games)
    }


    function Homee(){
        setLeft(830)
        setU(Users)
        seth(Home)
        setV(Videos)
        setSh(shop)
        setSh(Shop)
        setg(Games)


    }

    function Userss(){
        setLeft(966)
        setU(users)
        seth(home)
        setV(Videos)
        setSh(Shop)
        setg(Games)


    }


    function Videoess(){
        setLeft(1102)
        setV(videos)
        setU(Users)
        seth(home)
        setSh(Shop)
        setg(Games)

    }


    function Shopp(){
        setLeft(1238)
        setU(Users)
        seth(home)
        setV(Videos)
        setSh(shop)
        setg(Games)


    }


    function Gamess(){
        setLeft(1374)
        setU(Users)
        seth(home)
        setV(Videos)
        setSh(Shop)

        setg(games)

    }

    return (
        <div className="Header">
            <div className="search-bar">
             <Link to={'/'} >  <img src={Logo} onClick={Logoo} alt="" className="Logo" /></Link>
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder='Поиск на Facebook' />
                </div>
            </div>
            <div className="header-icons">
                <div className="box" onClick={Homee}>
                    <Link to={'/'}> <img src={h} alt="" className="icon" /></Link>
                    <div className="hr" style={{ left: left }}></div>
                </div>
                <div className="box" onClick={Userss}>
                    <Link to={'/users'}> <img src={u} alt="" className="icon" /></Link>
                </div>
                <div className="box" onClick={Videoess}>
                    <Link to={'/videos'}> <img src={v} alt="" className="icon" /></Link>
                </div>
                <div className="box" onClick={Shopp}>
                    <Link to={'/shop'}> <img src={sh} alt="" className="icon" /></Link>
                </div>
                <div className="box" onClick={Gamess}>
                    <Link to={'/game'}> <img src={g} alt="" className="icon" /></Link>

                </div>


            </div>
            <div className="Profil">
                <div className="profil_icons">
                    <div className="boxx">
                        <img src={Menu} alt="" className="profil_icon" />
                    </div>
                    <div className="boxx">
                        <img src={Chat} alt="" className="profil_icon" />
                    </div>
                    <div className="boxx">
                        <img src={Bell} alt="" className="profil_icon" />
                    </div>
                    <img src={user} alt="" className="profil_user" />
                </div>
            </div>
        </div>
    )
}