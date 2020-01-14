import React from 'react';
import ReactDOM from 'react-dom';

const App = function(){
    return <div> Hi There!</div>;
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);