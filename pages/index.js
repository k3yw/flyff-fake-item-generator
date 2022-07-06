import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [itemTitle, setItemTitle] = useState("Scroll of Example Title");
    const [itemDuration, setItemDuration] = useState("15 Min (Online)");
    const [itemDescription, setItemDescription] = useState("Allows you to fool mere mortals with fake items that gala might add in some near future.");
    const [itemModificator, setModificator] = useState("");


    const InputModifier = ({name, callback}) => {
        const [value, setValue] = useState("");
        return (
            <div>
                <span>{name}</span>
                <input type="text" value={value} onChange={(v) => {setValue(v.target.value)}}></input>
                <button onClick={() => {callback(value)}}>Apply</button>
            </div>
        )
    };

    return (
        <>
            <div className="item-container">
                <div className="item-text-container">
                    <span className="item-title">{itemTitle}</span>
                    <span className="item-duration">Duration: {itemDuration}</span>
                    <span className="item-description">Description: {itemDescription}</span>
                    <span className="item-modificator">{itemModificator}</span>
                </div>
            </div>

            <div className="fuck-my-life">
                <InputModifier name={"title"} callback={setItemTitle}/>
                <InputModifier name={"duration"} callback={setItemTitle}/>
                <InputModifier name={"description"}/>
                <InputModifier name={"modificator"}/>

                <span>(leave any line empty if you dont want it to appear)</span>
            </div>
        </>
        
    )
}
