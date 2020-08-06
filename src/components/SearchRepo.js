import React, { useState } from "react";
import "../App.css";

// https://api.github.com/search/repositories?q=html
function SearchRepo() {
    const [inputValue, setInputValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [repos, setRepos] = useState([])

    React.useEffect(() => {
        if (!inputValue) {
            return;
        }
        setIsLoading(true);
        fetch(`https://api.github.com/search/repositories?q=${inputValue}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setIsLoading(false);
                setRepos(data.items);
            })
            .catch(err => {
                setIsLoading(false);
                setError(true);
                console.error(err);
            });
    }, [inputValue]);

    return (<>
        <div className="ui grid">
            <div className="three wide column lefMrg" >
                <div className="ui card" >
                    <div className="image">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" />
                    </div>
                    <div className="content">
                        <a className="header">Kristy</a>
                        <div className="meta">
                            <span className="date">Joined in 2013</span>
                        </div>
                    </div>
                    <button class="ui button">
                        <i className="user icon" />Edit Profile
                    </button>
                </div>
            </div>
            <div className="thirteen wide column">
                <div style={{ padding: '30px' }}>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            setInputValue(e.target.elements.query.value);
                        }}
                    >
                        <input
                            type="text"
                            name="query"
                            className="github_search_input"
                            placeholder="Search Github Repositories"
                        />
                    </form>
                    {isLoading && <div className="ui active inverted dimmer">
                        <div className="ui text loader">Loading...</div>
                    </div>}
                    {error && (
                        <div>
                            Unexpected Error Occurred fetching data. Please try again later!
                        </div>
                    )}
                    <div className="ui relaxed divided list">
                        {repos.map(repo => {
                            return (
                                <div className="item">
                                    <i className="large github middle aligned icon"></i>
                                    <div className="content">
                                        <a className="ui medium header" href={repo.html_url} target="_blank"> {repo.name}</a>
                                        <div className="description">{repo.description}</div>
                                        <div className="description">{repo.language}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default SearchRepo;
