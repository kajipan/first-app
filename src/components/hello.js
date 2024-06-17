import react from 'react'

const Hello = () => {
    return (
        <div class name='dummyClass'>
            <h1>Hello kajis</h1>
        </div>
    )
    return React.createElement(
        'div',
        null,
        React.createElement('h1',null,'Hello kajis')
    )
}

export default Hello