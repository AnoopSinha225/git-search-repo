import React from 'react'

const Display = ({ data, repositories }) => {
    return (
        <table class="ui celled table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Avatar</th>
                    <th>Location</th>
                    <th>Bio</th>
                    <th>Repositories</th>
                </tr></thead>
            <tbody>
                <tr>
                    <td>{data.name}</td>
                    <td>{!data.avatar_url ? ('') : (
                        <img
                            className='ui small circular image'
                            src={data.avatar_url}
                            alt={data.avatar_url} />
                    )}
                    </td>
                    <td>{data.location}</td>
                    <td>{data.bio}</td>
                    <td>{repositories.map((items) => (
                        <div className='ui relaxed divided list' key={items.name}>
                            <div className='list'>
                                <i className='large github middle aligned icon' />
                                <div className='content'>
                                    <a href={items.html_url}
                                        className='header'
                                        target='_blank'>{items.name}</a>
                                </div>
                            </div>
                        </div>
                    ))}</td>
                </tr>

            </tbody>
        </table>
    )
}
export default Display