/*

    <div id="Top">
        <div id="FirstLevel">
            <h1> This is First Line </h1>
            <h1> This is Second Line </h1>
        <div>
    <div>

*/

const parent = React.createElement("div",{id: 'Top'},
    React.createElement('div',{id:'FirstLevel'},
        [
            React.createElement('h1',{}, "This is First Line"),
            React.createElement('h1',{}, "This is Second Line")
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);