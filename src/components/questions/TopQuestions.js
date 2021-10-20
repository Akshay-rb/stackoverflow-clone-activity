import React, { useEffect, useState } from 'react'
import axios from '../../config/axios'
import QuestionsPage from './QuestionsPage'

const TopQuestions =(props)=>{
    const [questions, setQuestions] = useState([])

    useEffect(()=>{
        
        axios.get(`/2.3/users/${props.id}/questions?order=desc&sort=activity&site=stackoverflow`)
        .then(response=>{
            setQuestions(response.data.items)
            // console.log('top questions', response.data.items)
        })
        .catch(err=>console.log(err))
    },[props.id])

    return(
        <div>
            <QuestionsPage featuredQuestions={questions} id={props.id} key={props.id} />
        </div>
    )
}

export default TopQuestions