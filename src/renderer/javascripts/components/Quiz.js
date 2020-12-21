import React, { useEffect, useState } from 'react'
import store from './store';
import {observer} from 'mobx-react-lite';
import { ipcRenderer } from 'electron'
import {toJS} from 'mobx';

export const Quiz = observer(({question, finish}) => {
    const [answer, setAnswer] = useState('')
    const [disable, setDisabled] = useState(true)
    const {title, answers, correctAnswer} = question

    const handleAnswer = (answer) => {
        setAnswer(answer)
        setDisabled(false)
    }

    const handleNext = (e) => {
        store.incrementCount()
        if(answer === correctAnswer) {
            store.checkResult()
        }
        if(store.user.count < 4) {
            store.nextQuestion()
            setDisabled(true)
        }
        if(store.user.count == 5) {
            ipcRenderer.send('asynchronous-message', toJS(store.user))
            finish()
        }
    }

    return (
        <div className='question'>
            <span className='question_title'>{title}</span>
            {answers.map(text =>
                <p
                    className= {`question_answer ${(answer === text) ? "red" : null}`}
                    key={text}
                    onClick={() => handleAnswer(text)}
                >
                    {text}
                </p>
            )}
            {(store.user.count < 4)
                ? <button
                    className='button'
                    disabled={disable}
                    onClick={() => handleNext()}
                >Следующий вопрос</button>
                : <button
                    className='button'
                    disabled={disable}
                    onClick={() => handleNext()}
                >Закончить тестирование</button>}
        </div>
    )
})