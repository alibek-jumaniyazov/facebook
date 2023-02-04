import nas from '../Images/i-nas.svg'
import right from '../Images/right.svg'
import skidka from '../Images/ss.svg'
import doc from '../Images/doc.svg'
import card from '../Images/card_shop.svg'
import shop from '../Images/shop_blue.svg'
import Bell from '../Images/Frame3.svg'
import Tra from '../Images/tr.svg'
import bank from '../Images/bank.svg'
import noskidka from '../Images/noskidka.svg'
import game from '../Images/game.svg'
import gitar from '../Images/gitar.svg'
import kluch from '../Images/kluch.svg'
import kiyim from '../Images/kiyim.svg'
import video from '../Images/video.svg'
import yurak from '../Images/yurak.svg'
import yurak1 from '../Images/yurak1.svg'
import uy from '../Images/uy.svg'
import xayvon from '../Images/xayvon.svg'
import ketmon from '../Images/ketmon.svg'
import ruchka from '../Images/ruchka.svg'
import telefon from '../Images/telefon.svg'
import user from '../Images/user.jpg'
import games from '../Images/gamess.svg'
import { useState } from 'react'



export default function Game() {


    const [list, setList] = useState('iconnn')
    const [game, setGame] = useState('sidebar-box y none')

    function click() {
        if (game == 'sidebar-box y none') {
            setGame('sidebar-box y block')
            setList('right')
        }
        if (game == 'sidebar-box y block') {
            setGame('sidebar-box y none')
            setList('iconnn')
        }
    }

    return (
        <div className="Game">
            <div className="Users">
                <div className="user-sidebar">
                    <div className="hed-sidebar eee">
                        <div className="dd">
                            <p>Игры</p>
                            <div className="nas"><img src={nas} alt="" /></div>

                        </div>
                        <hr className='hrr g' />

                    </div>

                    <div className="search ss y">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input className='ss' type="text" placeholder='Искать в разделе игр' />
                    </div>


                    <div className="sidebar-box yy">
                        <div className="s">
                            <div className="side-iconn">
                                <img src={user} alt="" className="profil_user" />
                            </div>
                            <div className="game_user_title">
                                <p>ДЕЙСТВИЯ В ИГРАХ</p>
                                <span>Alibek</span>
                            </div>

                        </div>
                    </div>
                    <hr className='hrr  yh' />
                    <div className="sidebar-box r y">
                        <div className="s">
                            <div className="side-iconn"><img src={games} alt="" /></div>
                            <p>Играйте в игры</p>
                        </div>
                        <img src={right} className={list} alt="" onClick={() => click()} />

                    </div>
                    <div className={game}>
                        <div className="s">
                            <div className="side-icon"><img src={Bell} alt="" /></div>
                            <p>Веб-игры</p>
                        </div>
                    </div>
                    <div className="sidesbar-box e y">
                        <div className="s">
                            <div className="side-icon"><img src={doc} alt="" /></div>
                            <p>Входящие</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={card} alt="" /></div>
                            <p>Уведомления</p>
                        </div>


                    </div>
                    <hr className='hrr y' />
                    <div className="game_sidebar_info y">
                        <div className="game_sidebar_info_title">
                            <p>Мои игры</p>
                            <span>Смотреть все</span>
                        </div>
                        <p className="game_sidebar_info_text">Сохраните игру в разделе "Мои игры", чтобы создать здесь для нее быструю ссылку.</p>
                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={telefon} alt="" /></div>
                            <p>Сохранить игры</p>
                        </div>

                    </div>
                    <hr className='hrr y' />
                    <h2 className="sibar-box_title y">Категории</h2>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={Tra} alt="" /></div>
                            <p>Все игры</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={bank} alt="" /></div>
                            <p>Экшен</p>
                        </div>

                    </div>

                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={noskidka} alt="" /></div>
                            <p>Приключения</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={game} alt="" /></div>
                            <p>Аркады</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={gitar} alt="" /></div>
                            <p>Сражения</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={kluch} alt="" /></div>
                            <p>Настольные</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={skidka} alt="" /></div>
                            <p>Строительные</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={kiyim} alt="" /></div>
                            <p>Одежда</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={bank} alt="" /></div>
                            <p>Карточные</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={video} alt="" /></div>
                            <p>Казино</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={yurak} alt="" /></div>
                            <p>Дизайн</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={yurak1} alt="" /></div>
                            <p>Три в ряд</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={uy} alt="" /></div>
                            <p>Совмещение</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={xayvon} alt="" /></div>
                            <p>Товары для дома</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={skidka} alt="" /></div>
                            <p>Головоломки</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={ketmon} alt="" /></div>
                            <p>С короткими сеансами</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={skidka} alt="" /></div>
                            <p>Тесты и викторины</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={ruchka} alt="" /></div>
                            <p>Гонки</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={telefon} alt="" /></div>
                            <p>Ролевые</p>
                        </div>

                    </div>
                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={telefon} alt="" /></div>
                            <p>Раннеры</p>
                        </div>

                    </div>                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={telefon} alt="" /></div>
                            <p>Симуляторы</p>
                        </div>

                    </div>                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={telefon} alt="" /></div>
                            <p>Пасьянсы</p>
                        </div>

                    </div>                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={telefon} alt="" /></div>
                            <p>Спорт</p>
                        </div>

                    </div>                    <div className="sidebar-box y">
                        <div className="s">
                            <div className="side-icon"><img src={telefon} alt="" /></div>
                            <p>Игры в слова</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="shop_rec">
                <a href='https://www.facebook.com/gaming/play/159047249520140/?source=www_games_hub_recently_playedhttps://scontent.ftas1-2.fna.fbcdn.net/v/t39.2081-6/236572282_207092641382267_2156334783623686600_n.png?stp=c0.0.193.193a_dst-png_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=3hAhbe8TcogAX-UmReu&_nc_ht=scontent.ftas1-2.fna&oh=00_AfBySDAoT-7W_xieNhn6uI2OfC6Ye6GH82tjfpy2ZdNqfQ&oe=63E1FD88' >game</a>
            </div>
        </div>
    )
}