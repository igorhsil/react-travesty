import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../contex/FeedbackContext';
import Loader from '../components/shared/Loader';


export default function FeedbackList() {
    const { feedback, isLoading } = useContext( FeedbackContext );

    if ( !isLoading && (!feedback || feedback.length === 0) ) {
        return <h1>No feedback data.. </h1>;
    }
    return isLoading ? <Loader/> : (
        <div className="feedback-list">
            {feedback.map( (f) => (
                <FeedbackItem key={f.id} item={f} />
            ) )}
        </div>
    );
}
