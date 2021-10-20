import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom';

import UserItem from '../users/UserItem';
import Tag from '../tags/Tag';

const QuestionStat = styled.div`
  text-align: center;
  display: inline-block;
  font-size: 1.2rem;
  color:#aaa;
  margin-top:7px;
  span{
    font-size:.7rem;
    display: block;
    font-weight: 300;
    margin-top: 4px;
  }
`;
const QuestionTitleArea = styled.div`
  padding: 0 30px;
`;
const QuestionLink = styled(Link)`
  text-decoration: none;
  color:#3ca4ff;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 5px;
`;
const StyledQuestionRow = styled.div`
  background-color: rgba(255,255,255,.05);
  padding: 15px 15px 10px;
  display: grid;
  grid-template-columns: repeat(3, 50px) 1fr;
  border-top: 1px solid #555;
`;
const WhoAndWhen = styled.div`
  /* display: inline-block; */
  color:#aaa;
  font-size: .8rem;
  float:right;
  padding: 10px 0;
`;

const UserLink =styled(Link)`
    color: #3ca4ff;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`;

// const Tag = styled.span`
//     display:inline-block;
//     margin-right:5px;
//     background-color:#3e4a52;
//     color: #9cc3db;
//     padding: 7px;
//     border-radius: 4px;
//     font-size: .9rem;
// `;

const QuestionRow =({featredQuestions})=>{
    return(
        <StyledQuestionRow>
            {
                featredQuestions.map(question=>{
                    return(
                        <React.Fragment key={question.owner.account_id}>
                            <QuestionStat>{question.score} <span>votes</span></QuestionStat>
                            <QuestionStat> {question.answer_count} <span>answers</span></QuestionStat>
                            <QuestionStat> {question.view_count} <span>views</span></QuestionStat>
                            <QuestionTitleArea>
                                <WhoAndWhen>
                                    {new Date(question.creation_date).toDateString()} 
                                    <UserLink>
                                     <UserItem key={question.owner.user_id} id={question.owner.user_id} name={question.owner.display_name} />
                                    </UserLink>
                                </WhoAndWhen>
                                <QuestionLink to={question.link}>{question.title}</QuestionLink>
                                {question.tags.map((tag, index)=> <Tag tag={tag} key={index+1}>{tag}</Tag> )}

                            </QuestionTitleArea>

                        </React.Fragment>
                    )
                })
            }
        </StyledQuestionRow>
    )
}

export default QuestionRow