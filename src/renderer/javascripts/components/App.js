import React, {useState} from 'react'
import {Start} from './Start';
import {Quiz} from './Quiz';
import {Finish} from './Finish';
import store from './store';
import {observer} from 'mobx-react-lite';
import {toJS} from 'mobx';

export const App = observer(() => {
    const [visibleStart, setVisibleStart] = useState(true)
    const [visibleQuiz, setVisibleQuiz] = useState(false)
    const [visibleFinish, setVisibleFinish] = useState(false)

    const handleStartQuiz = () => {
        setVisibleStart(prev => !prev)
        setVisibleQuiz(prev => !prev)
        store.loadData()
    }

    const handleFinishQuiz = () => {
        setVisibleQuiz(prev => !prev)
        setVisibleFinish(prev => !prev)
    }

    return (
        <>
            { visibleStart &&
            <Start
                start={handleStartQuiz}
            /> }

            { toJS(store.questionList).length <= 5 &&
            visibleQuiz &&
            <Quiz
                question={toJS(store.questionList)[0]}
                finish={handleFinishQuiz}
            /> }

            { visibleFinish &&
            <Finish /> }
        </>

    )
})

