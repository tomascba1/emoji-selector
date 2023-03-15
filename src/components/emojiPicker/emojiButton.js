export default function EmojiButton({emoji, onClick}){

    function handleClick(){
        onClick(emoji)
    }


    return <button className="btn btn-light m-1" onClick={handleClick}>{emoji.symbol}</button>
}