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
import user3 from '../Images/user3.svg'
import user4 from '../Images/user4.svg'
import user5 from '../Images/div.png'
import Shops from '../posts/Shops'
import { useState } from 'react'
import img1 from '../Images/ayfon1.jpg'
import img2 from '../Images/ayfon2.jpg'
import img3 from '../Images/ayfon3.jpg'
import img4 from '../Images/ayfon4.jpg'
import img5 from '../Images/ayfon5.jpg'
import img6 from '../Images/ayfon6.jpg'
import img7 from '../Images/ayfon7.jpg'
import img8 from '../Images/ayfon8.jpg'
import img9 from '../Images/ayfon9.jpg'
import img10 from '../Images/ayfon10.jpg'
import img11 from '../Images/ayfon11.jpg'
import img12 from '../Images/ayfon12.jpg'
import img13 from '../Images/ayfon13.jpg'
import img14 from '../Images/ayfon14.jpg'
import img15 from '../Images/ayfon15.jpg'
import img16 from '../Images/ayfon16.jpg'
import img17 from '../Images/ayfon17.jpg'
import img18 from '../Images/ayfon18.jpg'
import icon18 from '../Images/ii.png'
import img19 from '../Images/ayfon19.jpg'
import img20 from '../Images/ayfon20.jpg'
import img21 from '../Images/ayfon21.jpg'
import img22 from '../Images/ayfon22.jpg'
import img23 from '../Images/ayfon23.jpg'
import img24 from '../Images/ayfon24.jpg'
import img25 from '../Images/ayfon25.jpg'
import img26 from '../Images/ayfon26.jpg'
import img27 from '../Images/ayfon27.jpg'
import img28 from '../Images/ayfon28.jpg'




export default function Shop() {

    const [shops, setShops] = useState([
        {
            img: img1,
            sum: 590,
            name: 'iPhone 12 Pro 256GB',
            gorod: 'urgench',
        },
        {
            img: img2,
            sum: 160,
            name: ' iPhone X 64GB   ',
            gorod: 'urgench',
        }, {
            img: img3,
            sum: 1250,
            name: 'Iphone 14 pro max',
            gorod: 'urgench',
        }
        , {
            img: img4,
            sum: 530,
            name: 'iPhone 12 Pro 128GB  ',
            gorod: 'urgench',
        },
        {
            img: img5,
            sum: 810,
            name: 'iPhone 13pro',
            gorod: 'urgench',
        }, {
            img: img6,
            sum: 280,
            name: 'iPhone X LL/A',
            gorod: 'urgench',
        }
        , {
            img: img7,
            sum: 370,
            name: 'iPhone 11 Pro (Dual SIM) . 64gb',
            gorod: 'urgench',
        },
        {
            img: img8,
            sum: 1209,
            name: 'iPhone 14 pro ',
            gorod: 'urgench',
        }, {
            img: img9,
            sum: 570,
            name: ' iPhone XS Max 512GB',
            gorod: 'urgench',
        }
        , {
            img: img10,
            sum: 950,
            name: 'iphone 13 pro max',
            gorod: 'Namangan',
        },
        {
            img: img11,
            sum: 1400,
            name: 'Iphone Pro Max 14 ',
            gorod: 'urgench',
        }, {
            img: img12,
            sum: 530,
            name: 'IPhone 11 pro  64 gb ',
            gorod: 'urgench',
        },
        {
            img: img13,
            sum: 245,
            name: 'iPhone XS 64GB',
            gorod: 'urgench',
        },
        {
            img: img14,
            sum: 2000,
            name: ' Iphone 8 plus ',

            gorod: 'urgench',
        }, {
            img: img15,
            sum: 680,
            name: 'iPhone 12  pro max',
            gorod: 'urgench',
        },
        {
            img: img16,
            sum: 410,
            name: 'iPhone 11 Pro 64GB    ',
            gorod: 'urgench',
        },
        {
            img: img17,
            sum: 355,
            name: 'iPhone Xs Max 256gb ',

            gorod: 'urgench',
        }, {
            img: img18,
            sum: 430,
            name: 'iPhone 11 pro 64GB ',

            gorod: 'urgench',
        },
        {
            img: img19,
            sum: 480,
            name: 'iPhone 11 Pro LLA   ',
            gorod: 'urgench',
        },
        {
            img: img20,
            sum: 620,
            name: ' iPhone 12 pro max  ',

            gorod: 'urgench',
        }, {
            img: img21,
            sum: 205,
            name: 'iPhone 8 Plus 64GB   ',
            gorod: 'urgench',
        },
        {
            img: img22,
            sum: 300,
            name: 'iPhone Xr ',
            gorod: 'urgench',
        },
        {
            img: img23,
            sum: 280,
            name: 'Iphone X  64Gb   ',
            gorod: 'urgench',
        }, {
            img: img24,
            sum: 350,
            name: 'iPhone 12 Mini 128GB        ',
            gorod: 'urgench',
        },
        {
            img: img25,
            sum: 1400,
            name: 'iPhone 14 Pro Max 128GB dual  ',
            gorod: 'urgench',
        },
        {
            img: img26,
            sum: 510,
            name: 'iPhone 11 Pro 64GB     ',
            gorod: 'urgench',
        },
        {
            img: img27,
            sum: 400,
            name: 'Iphone 11 pro hotirasi 64Gb  ',
            gorod: 'urgench',
        },
        {
            img: img28,
            sum: 879,
            name: 'iPhone 13 Pro max    ',
            gorod: 'urgench',
        }

    ])

    const [input, setInput] = useState('')
    const [sum, setSum] = useState()
    const [gorod, setGorod] = useState('')
    const [img, setImg] = useState([])
    const [addpost, setAdd] = useState('none')


    function addPost() {

        setShops([
            ...shops, {
                id: shops.length +1,
                img:img,
                sum:sum,
                name: input,
                gorod: gorod,
            }
        ])
        setAdd('none')
        setInput('')
    }
    function closePost() {
        setAdd('none')
    }
    function openPost() {
        setAdd('inputBox')
    }

    return (
        <div className='Shop'>
            <div className="Users">
                <div className="user-sidebar">
                    <div className="hed-sidebar eee">
                        <div className="dd">
                            <p>Marketplace</p>
                            <div className="nas"><img src={nas} alt="" /></div>
                        </div>

                        <div className="search ss">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input className='ss' type="text" placeholder='Поиск в Marketplace' />
                        

                        </div>
                        <hr className='hrr g' />
                    </div>
                    <div className="sidebar-box r rr">
                        <div className="s">
                            <div className="side-iconn"><img src={shop} alt="" /></div>
                            <p>Просмотреть все</p>
                        </div>
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={Bell} alt="" /></div>
                            <p>Уведомления</p>
                        </div>
                    </div>
                    <div className="sidesbar-box e x">
                        <div className="s">
                            <div className="side-icon"><img src={doc} alt="" /></div>
                            <p>Входящие</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={card} alt="" /></div>
                            <p>Покупка</p>
                        </div>
                        <img src={right} alt="" />

                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={skidka} alt="" /></div>
                            <p>Продажа</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div onClick={() => openPost()} className="d x">
                        + <p>Создать новое объявление</p>
                    </div>
                    <hr className='hrr x' />
                    <div className="adres x">
                        <p>Фильтры</p>
                        <span>Ургенч · В радиусе 65 км</span>
                    </div>
                    <hr className='hrr x' />
                    <h2 className="sibar-box_title x">Категории</h2>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={Tra} alt="" /></div>
                            <p>Транспортные средства</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={bank} alt="" /></div>
                            <p>Аренда недвижимости</p>
                        </div>
                        <img src={right} alt="" />
                    </div>

                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={noskidka} alt="" /></div>
                            <p>Бесплатные предложения</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={game} alt="" /></div>
                            <p>Игрушки и игры</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={gitar} alt="" /></div>
                            <p>Музыкальные инструменты</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={kluch} alt="" /></div>
                            <p>Обустройство дома</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={skidka} alt="" /></div>
                            <p>Объявления</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={kiyim} alt="" /></div>
                            <p>Одежда</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={bank} alt="" /></div>
                            <p>Продажа недвижимости</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={video} alt="" /></div>
                            <p>Развлечения</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={yurak} alt="" /></div>
                            <p>Продажа</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={yurak1} alt="" /></div>
                            <p>Семья</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={uy} alt="" /></div>
                            <p>Спортивные товары</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={xayvon} alt="" /></div>
                            <p>Товары для дома</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={skidka} alt="" /></div>
                            <p>Товары для домашних животных</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={ketmon} alt="" /></div>
                            <p>Товары для офиса</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={skidka} alt="" /></div>
                            <p>Товары для улицы и сада</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={ruchka} alt="" /></div>
                            <p>Хобби</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                    <div className="sidebar-box x">
                        <div className="s">
                            <div className="side-icon"><img src={telefon} alt="" /></div>
                            <p>Электроника</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                </div>
            </div>
            <div className="shop_rec">
                <div className="shop_hed">
                    <h1>Выбор дня</h1>
                    <p>Urganch · 65 км</p>
                </div>
                {
                    shops.map((item, index) => (
                        <Shops key={index} item={item} />
                    ))
                }
            </div>
            <div className={`${addpost}`}>
                <div className="boxInput">
                    <img onClick={() => closePost()} src={icon18} alt="" />
                    <button onClick={() => addPost()} >Add Post</button>
                    <div className="inputsBox">
                        <input accept=".jpg, .jpeg, .png" onChange={e => setImg(e.target.value)} type="file"  />
                        <input className='inputDesc' onChange={e => setSum(e.target.value)} type="text" placeholder='Add price' />
                        <input className='inputDesc' onChange={e => setInput(e.target.value)} type="text" placeholder='Add name' />
                        <input className='inputDesc' onChange={e => setGorod(e.target.value)} type="text" placeholder='Add from' />
                    </div>
                </div>
            </div>
        </div>
    )
}