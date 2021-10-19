import axios from '../../config/axios'
import React, { useEffect, useState } from 'react'
import TopQuestions from '../questions/TopQuestions'
import TopTags from '../tags/TopTags'

const UserShow =(props)=>{
    console.log('props here ',props)
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        axios.get(`/2.3/users/${props.match.params.id}?order=desc&sort=reputation&site=stackoverflow`)
        .then(response=>{
            setUserData(response.data.items)
            console.log('userShow response - ',response.data.items)
        })
        .catch(err=>console.log(err))
    },[props.match.params.id])

    const getDate=(date)=>{
        const myDate = new Date()
        const year = myDate.getFullYear()
        const month = myDate.getMonth()
        const joinDate = myDate.getDate()
        return ` ${joinDate} - ${month} - ${year} `
    }

    return(
        <div>
            {/* <h1>{userData.disaply_name}</h1> */}
            {
                userData.map(user=>{
                    return (
                        <React.Fragment key={user.user_id}>
                            <h1>{user.display_name}</h1>
                            <img src={user.profile_image} alt="user-profile" />
                            <p>{`${user.reputation} reputation`}</p> 
                            <a href={user.link} > {user.display_name} </a>
                            <p>member since {getDate(user.creation_date)}</p>
                            <hr />
                            <TopTags id={user.user_id}/>
                            <hr />
                            <TopQuestions id={user.user_id} />
                            
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default UserShow