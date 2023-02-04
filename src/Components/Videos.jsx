
import nas from '../Images/i-nas.svg'
import right from '../Images/right.svg'
import Userss from '../Images/Vector.svg'
import user from '../Images/user.jpg'
import user1 from '../Images/video_icon.png'
import user2 from '../Images/kino.svg'
import user3 from '../Images/save.svg'
import video1 from '../Images/video.mp4'
import user4 from '../Images/user4.svg'
import videos from '../Images/videoes.svg'
import video2 from '../Images/video2.mp4'
import video3 from '../Images/video3.mp4'
import video4 from '../Images/video4.mp4'
import { useState } from 'react'
import VideoPost from './VideoPost'
import icon16 from '../Images/Подтвержденный аккаунт.png'


export default function Video() {

    const [video, setVideo] = useState([
        {
            user:user,
            name: 'Alibek Jumniyazov',
            data: '19 декабрь 2022 г. ·',
            desc: 'Cap cutda yasalgan Bitiruv Kechasi Videosi',
            videoo: video1,
            like: 2.2,
            com: 70,
            pros: 149
        },
        {
            user:user,
            name: 'Alibek Jumniyazov',
            data: '19 декабрь 2022 г. ·',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sit.',
            videoo: video2,
            like: 2.2,
            com: 70,
            pros: 149
        },
        {
            user:'data:image/png;base64,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',
            name: 'Grillnation',
            padbis:'· Подписаться',
            data: '19 декабрь 2022 г. ·',
            desc: 'Smoked Buffalo Chicken Bites are incredible',
            videoo: video3,
            like: 2.2,
            com: 70,
            pros: 149
        },
        {
            user:'https://kursy.uz/components/com_mtree/img/listings/m/4817.jpg',
            name: 'Hong Kong uz',
            padbis:'· Подписаться',
            data: '19 декабрь 2022 г. ·',
            desc: 'Smoked Buffalo Chicken Bites are incredible',
            videoo: video4,
            like: 22.2,
            com: 700,
            pros: 1893
        }
    ])

    return (
        <>
            <div className="Users">
                <div className="user-sidebar">
                    <div className="hed-sidebar">
                        <div className="dd">
                            <p>Watch</p>
                            <div className="nas"><img src={nas} alt="" /></div>
                        </div>
                        <div className="search ss">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input className='ss' type="text" placeholder='Поиск видео' />
                        </div>
                    </div>

                    <div className="sidebar-box r">
                        <div className="s">
                            <div className="side-iconn"><img src={videos} alt="" /></div>
                            <p>Главная</p>
                        </div>
                    </div>
                    <div className="sidebar-box">
                        <div className="s">
                            <div className="side-icon"><img src={user1} alt="" /></div>
                            <p>Прямой эфир</p>
                        </div>
                    </div>
                    <div className="sidesbar-box e">
                        <div className="s">
                            <div className="side-icon"><img src={user2} alt="" /></div>
                            <p>Шоу</p>
                        </div>
                    </div>
                    <div className="sidebar-box">
                        <div className="s">
                            <div className="side-icon"><img src={user3} alt="" /></div>
                            <p>Сохраненные видео</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="VideoPost">
                {
                    video.map(item => (
                        <VideoPost item={item} />
                    ))
                }
            </div>
        </>
    )
}