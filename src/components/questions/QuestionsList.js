import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserItem from '../users/UserItem'

const QuestionsList =()=>{
    const [featuredQuestions, setFeaturedQuestions] = useState([])

    useEffect(()=>{
        axios.get('https://api.stackexchange.com/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow')
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
            <table>
                <tbody>
                    {
                        featuredQuestions.map(question=>{
                            return(
                                <>
                                    <tr key={question.owner.account_id}>
                                        <td>{question.score}</td>
                                        <td>{question.answer_count}</td>
                                        <td>{question.view_count}</td>
                                        <td>{`+ ${question.bounty_amount}`}</td>
                                        <td>{question.title}</td>
                                    </tr>
                                    <tr key={question.owner.user_id}>
                                        <td>votes</td>
                                        <td>answers</td>
                                        <td>views</td>
                                        <td>{question.tags.map((tag, index)=> <button key={index+1}>{tag}</button> )}</td>
                                        <td>{new Date(question.creation_date).toDateString()}</td>
                                        {/* <td>{<Link to={`/users/${question.owner.user_id}?order=desc&sort=reputation&site=stackoverflow`} >{question.owner.display_name}</Link>}</td> */}
                                        <td><UserItem key={question.owner.user_id} id={question.owner.user_id} name={question.owner.display_name} /></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default QuestionsList