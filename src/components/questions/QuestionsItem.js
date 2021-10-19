import React from 'react'
import UserItem from '../users/UserItem'

const QuestionsItem =({featuredQuestions})=>{
    return(
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
    )
}

export default QuestionsItem