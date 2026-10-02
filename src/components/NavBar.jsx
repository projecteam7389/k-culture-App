import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("한국의 맛, 멋, 문화를 만나보세요.")
    function showMessage(type) {
        if (type === '맛') setMessage("한국의 맛있는 음식을 만나보세요.")
        if (type === '멋') setMessage("한국의 아름다운 멋을 느껴보세요.")
        if (type === '문화') setMessage("한국의 다채로운 문화를 즐겨보세요.")
        if (type === '여행') setMessage("새로운 한국의 여행지를 떠나보세요.")
        if (type === '전통') setMessage("오랜 시간 이어온 전통을 만나보세요.")
    }
    const menu = [
        { name: '맛', id: 1 },
        { name: '멋', id: 2 },
        { name: '문화', id: 3 },
        { name: '여행', id: 4 },
        { name: '전통', id: 5 }
    ]

    return (
        <nav className='nav'>
            <ul className="nav-list">
                {
                    menu.map((item) => (
                        <li key={item.id}>
                            <button onClick={() => {
                                showMessage(item.name)
                                navigate(`/detail/${item.id}`)
                            }}>{item.name}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <p className="nav-message">{message}</p>
        </nav >
    )
}

export default NavBar