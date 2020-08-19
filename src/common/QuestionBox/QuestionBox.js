import React, { useRef } from 'react'
import Button from 'common/Button'
import './questionBox.css'

export default function QuestionBox({ item, index, min, max, inputBox, onNext, onPrev }) {
  const inputEl = useRef(null);

  return (
    <div className="qb457container">
      <p className="qb457question">{item.text}</p>
      <input ref={inputEl} hidden={!inputBox} placeholder={item.placeholder} required />
      <div className="qb457buttons">
        {index > min && <Button label="⬅ Back" type="info" onClick={onPrev}></Button>}
        <Button label={index === max ? "Continue" : "Next"} type="info" onClick={() => { onNext(inputEl.current.value); inputEl.current.value = '' }}></Button>
      </div>
    </div >
  )
}
