import React from 'react'
import ReactDOM from 'react-dom/client'
const parent = React.createElement(
    "div",
    { id: "parent" }, 
    [
        React.createElement("div", { id: "child1", key:'1'}, [
            React.createElement("h1", { key: '1' }, "Child 1"),
            React.createElement("h1", { key: '2' }, "Child 2"),
        ]),
        React.createElement("div", { id: "child2",key:'2' }, [
            React.createElement("h1", { key: '1' }, "Child 1"),
            React.createElement("h1", { key: '2' }, "Child 2"),
        ])
    ]
);

ReactDOM.createRoot(document.getElementById('root')).render(parent)