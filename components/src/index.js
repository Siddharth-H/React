import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';


// Component Nesting 
const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                comment="Nice Article!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Sara" 
                timeAgo="Today at 1:00AM" 
                comment="Peaceful day!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
            author="Thomas" 
            timeAgo="Today at 00:45AM" 
            comment="Time to sleep!"
            avatar={faker.image.avatar()}
        />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));