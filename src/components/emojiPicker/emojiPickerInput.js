import { useRef } from "react";
import EmojiPicker from "./emojiPicker";

export default function EmojiPickerInput() {
  const refInput = useRef(null);
  function handleClick() {
    refInput.current.focus();
  }

  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          aria-describedby="button-addon2"
          ref={refInput}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          Click Here!
        </button>
      </div>
      <EmojiPicker ref={refInput} />
    </div>
  );
}
