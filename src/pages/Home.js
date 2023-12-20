import React from 'react'
import { MapList } from '../Components/MapList'
import './Home.css'

export const Home = () => {
    const items =["livro1","livro2","livro3","livro4","livro5","livro6"]
    return (
        <div>
            <ul className='genreUl'>
                <li className='genreLi'>
                <MapList items = {items}></MapList>
                </li>
                <li className='genreLi'>
                <MapList items = {items}></MapList>
                </li>
                <li className='genreLi'>
                <MapList items = {items}></MapList>
                </li>
                <li className='genreLi'>
                <MapList items = {items}></MapList>
                </li>
                <li className='genreLi'>
                <MapList items = {items}></MapList>
                </li>
            </ul>
        </div>
        
    )
}
