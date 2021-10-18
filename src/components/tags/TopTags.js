import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TopTags =(props)=>{
    const [topTags, setTopTags] = useState([])

    useEffect(()=>{
        axios.get(`https://api.stackexchange.com/2.3/users/${props.id}/tags?order=desc&sort=popular&site=stackoverflow`)
        .then(response=>{
            setTopTags(response.data.items)
            console.log('top tags ', response.data.items)
        })
        .catch(err=>console.log(err))
    })

    return(
        <div>
            top tags component
            <ul>
                {
                    topTags.map(tag=>{
                        return(
                            <li key={tag.name}><button>{tag.name} </button> - score- {tag.count} </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TopTags