import React from 'react'

const Footer = (props) => {
    const filterBtns = [{
        title: "All",
        isActived: true,
        onclick: () => { },
        link: '/'
    }, {
        title: "Actived",
        isActived: false,
        onclick: () => { },
        link: '/active'
    }, {
        title: "Completed",
        isActived: false,
        onclick: () => { },
        link: '/complete'
    }]

    return (

        <footer className="footer">
            <span className="todo-count">
                <strong>2</strong>
                <span> </span>
                <span>items</span>
                <span> left</span>
            </span>
            <ul className="filters">
                {filterBtns.map(btn => (<FilterBtn {...btn} />))}
            </ul>
            <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

const FilterBtn = (props) => {
    const { title, onClick, link, isActived } = props
    return (
        <>
            <li key={title}>
                <a
                    href={link}
                    className={`${isActived ? 'selected' : ''}`}
                    onClick={onClick}
                >
                    {title}
                </a>
            </li>
        </>
    )
}

export default Footer
