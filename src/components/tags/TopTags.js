import React, { useState,useEffect } from 'react'
import styled from 'styled-components';

import axios from '../../config/axios'
import Tag from './Tag';

// import './tags.css'

// const Tag = styled.span`
//     display:inline-block;
//     margin-right:5px;
//     background-color:#3e4a52;
//     color: #9cc3db;
//     padding: 7px;
//     border-radius: 4px;
//     font-size: .9rem;
// `;

const Score = styled.div`
  /* display: inline-block; */
  color:#aaa;
  font-size: .8rem;
  float:right;
  padding: 10px 0;
`;

// const StyledQuestionRow = styled.div`
//   background-color: rgba(255,255,255,.05);
//   padding: 15px 15px 10px;
//   display: grid;
//   grid-template-columns: repeat(3, 50px) 1fr;
//   border-top: 1px solid #555;
// `;

const TopTags =({id})=>{
    const [tags,setTags] = useState([])

    useEffect(()=>{
        axios.get(`/2.3/users/${id}/tags?order=desc&sort=popular&site=stackoverflow`)
            .then(response=>{
                setTags(response.data.items)
                // console.log('top tags---',response.data.items)
            })
            .catch(err=>console.log(err))
    },[id])

    return(
        <div>
            <h1>Top Tags</h1>
            {
                tags.map(tag=>{
                    return(
                        <>
                            <Tag tag ={tag.name}/> 
                            <Score>{tag.score}</Score>
                        </>
                    )
                })
            }    

        </div>
    )
}

export default TopTags