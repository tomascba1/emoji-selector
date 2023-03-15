import { forwardRef, useEffect, useRef, useState } from "react";
import { data } from './data'
import EmojiButton from "./emojiButton";
import EmojiSearch from "./emojiSearch";
import './emojiStyles.css'

export function EmojiPicker(props, refInput){
    
    const [isOpen, setIsOpen] = useState(false)
    const [emojis, setEmojis] = useState(data)
    const containerRef = useRef(null)

    useEffect(()=>{
        window.addEventListener('click', e => {
            if(!containerRef.current.contains(e.target)){
                setIsOpen(false)
                setEmojis(data)
            }
        })
    },[])

    function handleClick(){
        setIsOpen(!isOpen)
    }

    function handleSearch(e){
        const query = e.target.value.toLowerCase()
        console.log(query)
        if(!!query){
            const search = data.filter((emoji) =>{
                return (emoji.name.toLowerCase().includes(query) || emoji.keywords.toLowerCase().includes(query))
            })
            setEmojis(search)
        } else {
            setEmojis(data)
        }
    }

    function handleOnClickEmoji(emoji){
        const cursorPos = refInput.current.selectionStart;
        const text = refInput.current.value
        const prev = text.slice(0, cursorPos)
        const next = text.slice(cursorPos)

        refInput.current.value = prev + emoji.symbol + next
        refInput.current.selectionStart = cursorPos + emoji.symbol.length
        refInput.current.selectionEnd = cursorPos + emoji.symbol.length
        refInput.current.focus()
    }

    return (<div ref={containerRef} className="emojiSelectorContainer">
        <button className="btn btn-dark emojiSelector" onClick={handleClick}>😀</button>
        {isOpen ? <div>
            <EmojiSearch onSearch={handleSearch}/>
            <div className="emojiContainer mt-2">
                {emojis.map((emoji) =>(
                    <EmojiButton key={emoji.symbol} emoji={emoji} onClick={handleOnClickEmoji} />
                ))}
            </div>
        </div> : ""}
    </div>
)}


export default forwardRef(EmojiPicker)
