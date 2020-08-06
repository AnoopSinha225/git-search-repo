import React, { useState } from 'react'
import Display from './Display'

const Profile = () => {
    const [data, setData] = useState({})
    const [username, setUsername] = useState("")
    const [isDataLoad, setIsDataLoad] = useState(false)
    const [repositories, setRepositories] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const changeHandler = e => {
        setUsername(e.target.value)
    }

    const submitHandler = async e => {
        e.preventDefault();
        setIsLoading(true);
        const profile = await fetch(`https://api.github.com/users/${username}`)
        const profileJson = await profile.json()
        // console.log(profileJson)

        const repo = await fetch(profileJson.repos_url)
        const repoJson = await repo.json();
        console.log(repoJson)

        if (profileJson) {
            setData(profileJson)
            setRepositories(repoJson)
            setIsDataLoad(true)
        }
        setIsLoading(false);
    }

    return (<>
        <div className='ui search' style={{ padding: '20px' }} >
            <div className='ui icon input' style={{ width: '32%', marginRight: '16px' }}>
                <i className='search icon' />
                <input className='prompt'
                    placeholder='Search via username here...'
                    type='text'
                    value={username}
                    onChange={changeHandler} />

            </div>
            <button className="ui primary button"
                style={{ width: '156px' }}
                type="submit" onClick={submitHandler}>
                <i className="github icon" />
                        Search
                    </button>
            {isLoading && <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading...</div>
            </div>}
            {!isLoading && isDataLoad && <Display data={data} repositories={repositories} />}
        </div>
    </>)
}


export default Profile;