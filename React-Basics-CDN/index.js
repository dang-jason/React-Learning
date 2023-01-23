function Composable(){
    return (
        <p>React is composable.</p>
    )
}
// JSX - creates things with objects, must only have one parent element in render.
const page = (
    <div>
        <nav>
            <h1>Limitless</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <h2 className="header">Hi, my name is Jason. This will be my first go at React.</h2>
        <Composable />
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
)
ReactDOM.render(
    page,
    document.querySelector('#root')
)


const header = document.createElement('h2');
header.textContent = "This is imperative implementation, React lets you make it declarative."
header.classList.add('header');
document.querySelector('#root').appendChild(header);

