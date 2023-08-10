// import
import "./index.scss";

// main
export const Search = () => {

    return (
        <div className="search-container">
            <div className="search">
                <input type="text" placeholder="Who are you looking for?" />
                <button onClick={() => console.log("Hello world")}>O</button>
                <button className="change-search">+</button>
            </div>
        </div>
    );

}