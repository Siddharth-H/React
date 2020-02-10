import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


// Component Nesting 
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today ar 4:45PM"/>
            <CommentDetail author="Sarah" timeAgo="Today at 2:00AM"/>
            <CommentDetail author="Ned" timeAgo="Yesterday at 5:00PM"/>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));