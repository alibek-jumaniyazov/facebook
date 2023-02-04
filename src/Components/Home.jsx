import icon1 from '../Images/i1.png'
import icon2 from '../Images/kD5Sv0isIPs.png.png'
import icon3 from '../Images/i2.png'
import icon4 from '../Images/i3.png'
import icon5 from '../Images/i4.png'
import icon6 from '../Images/i5.png'
import icon7 from '../Images/i6.png'
import icon8 from '../Images/i7.png'
import icon9 from '../Images/i8.png'
import icon10 from '../Images/nbUcQfHcgBv.png.png'
import icon11 from '../Images/div1.png'
import icon12 from '../Images/i9.png'
import icon13 from '../Images/i10.png'
import icon14 from '../Images/i11.png'
import icon15 from '../Images/i.png'
import reck_img from '../Images/22.png'
import reck_img2 from '../Images/ff.png'
import group from '../Images/div22.png'
import menu from '../Images/menu.png'
import user from '../Images/user.jpg'
import addd from '../Images/div.png'
import Post from '../posts/Post'
import { useState } from 'react'
import alibek from '../Images/alibek.jpg'
import user2 from '../Images/user2.jpg'
import post_img from '../Images/IMAGE-2.png'



export default function Home() {


    const [like, setLike] = useState(19)
    const [likee, setLikee] = useState(230)
    const [name, setName] = useState('')
    const [icon, setIcon] = useState('')


    const [post, setPost] = useState([
        {
            id:1,
            name: 'Sherzod Asadov',
            data: '13 декабрь 2022 г. ·',
            dec: 'Президент Шавкат Мирзиёев коммунал хизматлар сифати, шу жумладан хонадонларда иссиқлик таъминоти билан шахсан танишиш учун Учтепа туманидаги маҳаллалардан бирига кириб, у ердаги аҳволни кўздан кечирди. Маҳалладаги вазият Президентимизнинг жиддий эътирозларига сабаб бўлди.',
            img: post_img,
            like: like,
            user_img: user2,
        },
        {
            id: 2,
            name: ' Alibek Jumniyazov',
            data: '11 декабрь 2022 г. ·',
            dec: 'Президент Шавкат Мирзиёев коммунал хизматлар сифати, шу жумладан хонадонларда иссиқлик таъминоти билан шахсан танишиш учун Учтепа туманидаги маҳаллалардан бирига кириб, у ердаги аҳволни кўздан кечирди. Маҳалладаги вазият Президентимизнинг жиддий эътирозларига сабаб бўлди.',
            img: alibek,
            like: like,
            user_img: user,
        }
    ])


    function add() {
        if (name == '') {
            setLike(like + 1)
            setName('blue')
            setIcon('bluee')
        }
        if (name == 'blue') {
            setLike(like - 1)
            setName('')
            setIcon('')
        }


    }

    return (
        <div className="Home">
            <div className="home_icons">
                <div className="icons_list">
                    <img src={user} alt="" className="user_img" />
                    <span className="icon_title">Alibek JumaniyAzov</span>
                </div>
                <div className="icons_list">
                    <img src={icon1} alt="" className="home_icon" />
                    <span className="icon_title">Поиск друзей</span>
                </div>
                <div className="icons_list">
                    <img src={icon2} alt="" className="home_icon" />
                    <span className="icon_title">Последние новости</span>
                </div>
                <div className="icons_list">
                    <img src={icon3} alt="" className="home_icon" />
                    <span className="icon_title">Группы</span>
                </div>
                <div className="icons_list">
                    <img src={icon4} alt="" className="home_icon" />
                    <span className="icon_title">Marketplace</span>
                </div>
                <div className="icons_list">
                    <img src={icon5} alt="" className="home_icon" />
                    <span className="icon_title">Watch</span>
                </div>
                <div className="icons_list">
                    <img src={icon6} alt="" className="home_icon" />
                    <span className="icon_title">Воспоминания</span>
                </div>
                <div className="icons_list">
                    <img src={icon7} alt="" className="home_icon" />
                    <span className="icon_title">Сохраненное</span>
                </div>
                <div className="icons_list">
                    <img src={icon8} alt="" className="home_icon" />
                    <span className="icon_title">Страницы</span>
                </div>
                <div className="icons_list">
                    <img src={icon9} alt="" className="home_icon" />
                    <span className="icon_title">Мероприятия</span>
                </div>
                <div className="icons_list">
                    <img src={icon10} alt="" className="home_icon" />
                    <span className="icon_title">Избранное</span>
                </div>
                <div className="icons_list">
                    <img src={icon11} alt="" className="home_icon" />
                    <span className="icon_title">Показать больше</span>
                </div>
            </div>
            <div className="home_main">
                <div className="add_story">
                    <img src={addd} alt="" className="add_icon" />
                    <div className="add_info">
                        <p>Создать историю</p>
                        <span>Поделитесь фото или напишите что-нибудь.</span>
                    </div>
                </div>
                <div className="user_add_info">
                    <div className="user_info">
                        <img src={user} alt="" className="user_img" />
                        <span>Что у вас нового, Alibek?</span>
                    </div>
                    <hr />
                    <div className="users_web">
                        <div className="user_box">
                            <img src={icon12} alt="" className="user_icon" />
                            <p className="user_title">Прямой эфир</p>
                        </div>
                        <div className="user_box">
                            <img src={icon13} alt="" className="user_icon" />
                            <p className="user_title">Фото/видео</p>
                        </div>
                        <div className="user_box">
                            <img src={icon14} alt="" className="user_icon" />
                            <p className="user_title">Чувства/действия</p>
                        </div>
                    </div>
                </div>
                <div className="add_video">
                    <div className="video_info">
                        <img src={icon15} alt="" />
                        <p>Создать комнату</p>
                    </div>
                </div>
                {
                    post.map((item) => (
                        <Post  post={item} add={add} icon={icon} />
                    ))
                }
            </div>
            <div className="home_reck">
                <h1>Реклама</h1>
                <div className="reck_info">
                    <div className="reck_box">
                        <div className="box_info">
                            <img src={reck_img} alt="" />
                            <div className="info_text">
                                <p>Получить доступ к программе👉</p>
                                <span>hurma.work</span>
                            </div>
                        </div>
                        <img src={menu} className='none' alt="" />
                    </div>

                    <div className="reck_box">
                        <div className="box_info">
                            <img src={reck_img2} alt="" />
                            <div className="info_text">
                                <p>Новый курс от Cartel Market</p>
                                <span>cartel.market</span>
                            </div>
                        </div>
                        <img src={menu} className='none' alt="" />
                    </div>
                    <hr className='hrr' />
                    <p className="group">Групповые переписки</p>
                    <div className="soz_group">
                        <img src={group} alt="" />
                        <p>Создать группу</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

