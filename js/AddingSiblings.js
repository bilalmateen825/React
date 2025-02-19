/* 
    <div>
        <h1>First line</h1>
        <h1>Second line</h1>
    </div>
*/

const parent = React.createElement("h1",{}, [
    React.createElement("h1",{}, "First Line"),
    React.createElement("h1",{}, "Second Line")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);