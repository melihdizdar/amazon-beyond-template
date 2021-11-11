import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listPersonalContents } from '../actions/aboutPersonalActions';
import { listTextContents } from '../actions/aboutTextActions';
import PersonalContent from '../components/About/PersonalContent';
import '../components/About/styles.css';
import TextCartContent from '../components/About/TextCartContent';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function AboutScreen() {
    const AboutPersonalContentList = useSelector((state) => state.AboutPersonalContentList);
    const {loading:loadingPersonalContents,error:errorPersonalContents,personalContents} = AboutPersonalContentList;
    const dispatch = useDispatch();
    const AboutTextContentList = useSelector((state) => state.AboutTextContentList);
    const {loading:loadingTextContent,error:errorTextContent,textContents} = AboutTextContentList;

    useEffect(() =>{
        //dispatch(listProducts());
        dispatch(listPersonalContents());
        dispatch(listTextContents());
      }, [dispatch]);
    return (
        <div className="about">
            {loadingPersonalContents ? ( <LoadingBox></LoadingBox>) : errorPersonalContents ? (<MessageBox variant="danger">{errorPersonalContents}</MessageBox>) : (
            <>
                {personalContents.length === 0 && <MessageBox>No About Personal Content Found</MessageBox>}
                {personalContents.map((personalContent) => ( <PersonalContent key={personalContent._id} personalContent={personalContent}/> ))} 
            </>
            )}
            {loadingTextContent ? ( <LoadingBox></LoadingBox>) : errorTextContent ? (<MessageBox variant="danger">{errorTextContent}</MessageBox>) : (
            <>
                {textContents.length === 0 && <MessageBox>No About Text Found</MessageBox>}
                <div className="textCartContent">
                    {textContents.map((textCard) => ( <TextCartContent key={textCard._id} textCard={textCard}/> ))}
                </div>  
            </>
            )}
        </div>
    )
}
