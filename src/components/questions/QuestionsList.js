import axios from '../../config/axios'
import React, { useEffect, useState } from 'react'
import QuestionsItem from './QuestionsItem'

const QuestionsList =()=>{
    const [featuredQuestions, setFeaturedQuestions] = useState([])

    useEffect(()=>{
        axios.get('/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow')
        .then(response=>{
            setFeaturedQuestions(response.data.items)
            console.log(response.data)
        })
        .catch(err=>console.log(err))
    },[])

    return(
        <div>
            <h1>Listing featured questions </h1>
            {/* <ul>
                {
                    featuredQuestions.map(question=>( <li key={question.owner.account_id} >{question.title}</li> ))
                }
            </ul> */}
            
            <QuestionsItem featuredQuestions={featuredQuestions}/>
        </div>
    )
}

export default QuestionsList