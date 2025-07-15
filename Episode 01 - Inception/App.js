// const heading = React.createElement("h1", { id: "heading" }, "Jai Shree Ram");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



{
    /* <div id="parent">
      <div id="child">
          <h1>Child 1</h1>
          <h1>Child 2</h1>
      </div>
  </div> */
}

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {key:'1'}, "Child 1"),
//     React.createElement("h1", {key:'2'}, "Child 1"),
//   ])
// );

// ReactDOM.createRoot(document.getElementById('root')).render(parent)




/* <div id="parent">
  <div id="child 1">
      <h1>Child 1</h1>
      <h1>Child 2</h1>
  </div>
  <div id="child 2">
      <h1>Child 1</h1>
      <h1>Child 2</h1>
  </div>
</div> */

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