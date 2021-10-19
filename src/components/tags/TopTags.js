import React, { useState,useEffect } from 'react'
import axios from '../../config/axios'

const TopTags =({id})=>{
    const [tags,setTags] = useState([])

    useEffect(()=>{
        axios.get(`/2.3/users/${id}/tags?order=desc&sort=popular&site=stackoverflow`)
            .then(response=>{
                setTags(response.data.items)
                console.log('top tags---',response.data.items)
            })
            .catch(err=>console.log(err))
    },[id])

    return(
        <div>
            <h1>Top Tags</h1>
            {/* {
                tags.map(tag=> ( 
                    
                    // <>
                    //     <td key={tag.name}>{tag.name}</td>
                    //     <span>Score - {tag.count}</span>
                    // </>    
                ))
            } */}
            <table>
                <tbody>
                    {
                        tags.map(tag=>{
                            return(
                                <tr key={tag.name}>
                                    <td>{tag.name}</td>
                                    <td> Score - {tag.count}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TopTags