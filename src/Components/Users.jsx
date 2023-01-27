import nas from '../Images/i-nas.svg'
import right from '../Images/right.svg'
import Userss from '../Images/Vector.svg'
import user1 from '../Images/user1.svg'
import user2 from '../Images/user2.svg'
import user3 from '../Images/user3.svg'
import user4 from '../Images/user4.svg'
import user5 from '../Images/user5.svg'




export default function Users() {
    return (
        <div className="Users">
            <div className="user-sidebar">
                <div className="hed-sidebar">
                    <p>Друзья</p>
                    <div className="nas"><img src={nas} alt="" /></div>
                </div>
                <div className="sidebar-box r">
                    <div className="s">
                        <div className="side-iconn"><img src={Userss} alt="" /></div>
                        <p>Главная</p>
                    </div>
                </div>
                <div className="sidebar-box">
                    <div className="s">
                        <div className="side-icon"><img src={user1} alt="" /></div>
                        <p>Запросы на добавление в друзья</p>
                    </div>
                    <img src={right} alt="" />
                </div>
                <div className="sidesbar-box e">
                    <div className="s">
                        <div className="side-icon"><img src={user2} alt="" /></div>
                        <p>Рекминдации</p>
                    </div>
                    <img src={right} alt="" />
                </div>
                <div className="sidebar-box">
                    <div className="s">
                        <div className="side-icon"><img src={user3} alt="" /></div>
                        <p>Все друзья</p>
                    </div>
                    <img src={right} alt="" />

                </div>
                <div className="sidebar-box">
                    <div className="s">
                        <div className="side-icon"><img src={user4} alt="" /></div>
                        <p>Дни рождения</p>
                    </div>
                </div>
                <div className="sidebar-box">
                    <div className="s">
                        <div className="side-icon"><img src={user5} alt="" /></div>
                        <p>Собственные списки</p>
                    </div>
                    <img src={right} alt="" />
                </div>
            </div>
        </div>
    )
}