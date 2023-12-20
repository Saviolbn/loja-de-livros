import React from 'react'
import './MapList.css'

export const MapList = (props) => {
    const items = props.items;
    const listItems = items.map((item) =>
        <li className='catLi' key ={item.toString()}>
            {item}
        </li>
    );
    return (
        <ul className='catUl' >{listItems}</ul>
    )
}
