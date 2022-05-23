import { createContext, useState, useEffect } from 'react';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [ feedback, setFeedback ] = useState( [] );
    const [ feedbackEdit, setFeedbackEdit ] = useState( {
        item: {}, edit: false,
    } );
    const [ isLoading, setIsLoading ] = useState( true );

    useEffect( () => {
        fetchFeedbackData();
    }, [] );

    // fetch data from mock-json server db
    const fetchFeedbackData = async () => {
        const res = await fetch( `/feedback?_sort=id&_order=desc` );
        const data = await res.json();
        setFeedback( data );
        setIsLoading( false );

    };

    const deleteFeedback = async (id) => {
        if ( window.confirm( 'Are you sure you want to delete a feedback?' ) ) {
            // delete feedback
            await fetch( `/feedback/${id}`, {
                method: 'DELETE'
            } );
            setFeedback( feedback.filter( (item) => item.id !== id ) );
        }
    };

    const addFeedback = async (newFeedback) => {
        // fetch data
        const res = await fetch( '/feedback', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify( newFeedback )
        } );

        const data = await res.json();
        // add new feedback, and spread rest of them
        setFeedback( [ data, ...feedback ] );
    };

    const editFeedback = (item) => {
        setFeedbackEdit( { item, edit: true } );
    };

    const updateFeedback = async (id, updItem) => {
        // update/edit any feedback item
        const res = await fetch( `/feedback/${id}`, {
            method: 'PUT', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify( updItem )
        } );

        // data coming from the server
        const data = await res.json();

        setFeedback( feedback.map( (item) => (item.id === id ? { ...item, ...data } : item) ) );
    };

    return (<FeedbackContext.Provider
        value={{
            feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback, isLoading
        }}
    >
        {children}
    </FeedbackContext.Provider>);
};

export default FeedbackContext;
