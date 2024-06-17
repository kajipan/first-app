import React from 'react'

const Hello = () => {
    return (
        <div className='dummyClass'>
            <h1>Hello kaji</h1>
        </div>
    )
    return React.createElement(
        'div',
        null,
        {id: 'hello',className: 'dummyClass'},
        React.createElement('h1',null,'Hello kaji')
    )
}

export default Hello