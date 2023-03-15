import { useState } from "react"
import './emojiStyles.css'

export default function EmojiSearch({onSearch}){
    const [value, setValue] = useState("")

    function handleChange(e){
        setValue(e.target.value)
        onSearch(e)
    }
    return (
        <div>
            <input className="form-control mt-3" placeholder="Search emoji..." type='text' value={value} onChange={handleChange}/>
        </div>
    )
}