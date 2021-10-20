import axios from '../../config/axios'
import React, { useEffect, useState } from 'react'
import QuestionsPage from './QuestionsPage'

const QuestionsList =()=>{
    const [featuredQuestions, setFeaturedQuestions] = useState([])

    useEffect(()=>{
        axios.get('/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow')
        .then(response=>{
            setFeaturedQuestions(response.data.items)
            // console.log(response.data)
        })
        .catch(err=>console.log(err))
    },[])

    return(
        <div>
            <QuestionsPage featuredQuestions={featuredQuestions}/>
        </div>
    )
}

export default QuestionsList