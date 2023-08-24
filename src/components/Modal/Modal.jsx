import React, { useEffect, useState } from 'react'
import User from '../User/User';
import axios from "../../utils/axios"

function Modal({ showFlag, setShowModal, postId }) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(`/post/getUserfromlikes/${postId}`)
                setUsers(res.data)
                console.log(res.data)
            } catch (e) {
                console.log("erro likes user")
            }
        }
        fetch()
    }, [])

    const closeModal = () => {
        setShowModal(false)
    }

    const modalContent = {
        background: "white",
        padding: "20px",
        borderRadius: "5px",
        width: "50%",
        height: "auto"
    };

    const overlay = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1
    };

    const btn = {
        margin: "auto"
    }
    return (
        <>
            {showFlag ? (
                <div id="overlay" style={overlay}>
                    <div id="modalContent" style={modalContent}>
                        {users.length !== 0 && users.map(user => (
                            <User key={user._id} user={user} />
                        ))}
                        {users.length === 0 && <p style={{fontWeight:"bold"}}>いいねしている人がいません</p>}
                        <button onClick={closeModal} style={btn}>Close</button>
                    </div>
                </div>
            ) : (
                <>aaaaooooo</>
            )}
        </>
    );
}

export default Modal