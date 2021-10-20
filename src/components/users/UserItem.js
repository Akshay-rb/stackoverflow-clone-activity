import React from 'react'
import {Link} from 'react-router-dom'

const UserItem=(props)=>{
    // console.log('in user item component')
    return(
        <div>
            <Link to={`/users/${props.id}?order=desc&sort=reputation&site=stackoverflow`} >{props.name}</Link>

        </div>
    )
}

export default UserItem