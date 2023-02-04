import icon16 from '../Images/Подтвержденный аккаунт.png'
import icon17 from '../Images/Vector1.svg'
import icon18 from '../Images/ii.png'
import icon19 from '../Images/ii1.svg'
import icon20 from '../Images/ii2.svg'
import icon21 from '../Images/ii3.svg'
import icon22 from '../Images/Group1.svg'
import alibek from '../Images/alibek.jpg'
import user from '../Images/user.jpg'
import user2 from '../Images/user2.jpg'
import post_img from '../Images/IMAGE-2.png'
import { memo, useState } from 'react'

export default memo( function Post({ post, setPost, name, add, icon }) {


    function delet(id){
        const newData = post.filter((value) => value.id !== id)
        setPost(newData)
    }

console.log(post.id);


    return (
        <>
            <div className="posts">
                <span className='nav_title'>Рекомендация для вас</span>
                <hr />
                <div className="post_profil">
                    <div className="profill">
                        <img src={post.user_img} alt="" className="user_img" />
                        <div className="post_user_info">
                            <p>{post.name}<img src={icon16} alt="" /></p>
                            <span>{post.data}</span>
                        </div>
                    </div>
                    <div className="profil_menu">
                        <img src={icon17} alt="" />
                        <img onClick={() => delet(post.id)} src={icon18} alt="" />
                    </div>
                </div>
                <p className="desc">{post.dec}</p>
                <img className='post_img' src={post.img} alt="" />
                <div className="likes">
                    <div className="like">
                        <img src={icon22} alt="" />
                        <p>{post.like}тыс.</p>
                    </div>
                    <div className="likes_info">
                        <p>1,7 тыс. комментария</p>
                        <p>Поделились: 1 тыс.</p>
                    </div>
                </div>
                <hr />
                <div className="users_web">
                    <div onClick={add} className="user_box">
                        <img src={icon19} alt="" className={`user_icon ${icon}`} />
                        <p className={`user_title ${name}`} >Нравится</p>
                    </div>
                    <div className="user_box">
                        <img src={icon20} alt="" className="user_icon" />
                        <p className="user_title">Комментировать</p>
                    </div>
                    <div className="user_box">
                        <img src={icon21} alt="" className="user_icon" />
                        <p className="user_title">Поделиться</p>
                    </div>
                </div>
            </div>
        </>
    )
})