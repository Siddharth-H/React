import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


// Component Nesting 
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" />
            <CommentDetail author="Sarah"/>
            <CommentDetail author="Ned" />
            <CommentDetail author="Keith"/>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));