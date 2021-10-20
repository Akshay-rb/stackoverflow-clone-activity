import axios from '../../config/axios'
import React, { useEffect, useState } from 'react'
import TopQuestions from '../questions/TopQuestions'
import TopTags from '../tags/TopTags'

// import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Image, Card, } from 'react-bootstrap'
// import moment from 'moment'

const UserShow =(props)=>{
    // console.log('props here ',props)
    // const [userData, setUserData] = useState([])
    const [user,setUser] = useState({})

    const userData ={
        username:user.display_name,
        user_id:user.user_id
    }

    useEffect(()=>{
        axios.get(`/2.3/users/${props.match.params.id}?order=desc&sort=reputation&site=stackoverflow`)
        .then(response=>{
            setUser(response.data.items[0])
            // console.log('userShow response - ',response.data.items)
        })
        .catch(err=>console.log(err))
    },[props.match.params.id])

    const getDate=(date)=>{
        const myDate = new Date()
        const year = myDate.getFullYear()
        const month = myDate.getMonth()
        const joinDate = myDate.getDate()
        return ` ${joinDate}-${month}-${year} `
    }

    return(
        <div>
          <hr />
          <div style={{textAlign:'justify'}}>
              <h3 textAlign='center'>Profile</h3>
              <div >
                  <span>
                  <Image src={user.profile_image} roundedCircle width="200" height="200" />
                  </span>
                <span style={{textAlign:'left'}}>
                <Card style={{ width: '25rem', backgroundColor:'#2d2d2d', color:'white' }} border='none' >
                

                <Card.Body>
                <Card.Title>{userData.username}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">About</Card.Subtitle>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maxime!
                </Card.Text>
                <div> <strong> {`${user.reputation} reputation`} </strong> </div>
                <div><Card.Link variant="primary" href={user.website_url} style={{ textDecoration: 'none', color:'#3ca4ff' }}>{userData.username}</Card.Link></div>
                <div style={{textAlign:'right'}}>{user.location}</div>
                <div style={{textAlign:'right'}}>member since {getDate(user.creation_date)}</div>
                
                </Card.Body>
                </Card>
                </span>
              </div>
              
          </div>
          <hr />
            <TopTags id={user.user_id}/>
            <hr />
            <TopQuestions id={user.user_id} name={userData.username} />
        </div>
    )
}

export default UserShow