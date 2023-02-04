import icon17 from '../Images/Vector1.svg'
import icon18 from '../Images/ii.png'
import icon22 from '../Images/Group1.svg'
import React from 'react'
import '../Style/videos.css'
import user from '../Images/user.jpg'

export default function VideoPost({ item }) {
    return (
        <div className="postss">
            <div className="post_profil">
                <div className="profill">
                    <img src={item.user} alt="" className="user_img" />
                    <div className="post_user_info">
                        <div className="sss">
                            <p>{item.name} </p>
                             <p className='padbis' style={{color: '#216FDB'}} >{item.padbis}</p>

                        </div>
                        
                        <span>{item.data}</span>
                    </div>
                </div>
                <div className="profil_menu">
                    <img src={icon17} alt="" />
                    <img src={icon18} alt="" />
                </div>
            </div>
            <p className="desc">{item.desc}</p>
           <video controls src={item.videoo} className='post_video' ></video>
            <div className="likes">
                <div className="like">
                    <img src={icon22} alt="" />
                    <p>{item.like}тыс.</p>
                </div>
                <div className="likes_info">
                    <p>1,7 тыс. комментария</p>
                    <p>Поделились: 1 тыс.</p>
                </div>
            </div>
            <hr />
        </div>
    )
}