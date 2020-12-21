import React from 'react';
import store from './store'
import { observer } from 'mobx-react-lite';

export const Finish = observer(() => {
    let result = ''

    switch ( store.user.score ) {
        case(5):
            result = 'Отлично'
            break
        case(4):
            result = 'Хорошо'
            break
        case(3):
            result = 'Удовлетворительно'
            break
        default:
            result = 'Неудовлетворительно'
            break
    }

    const reloadPage = () => {
        document.location.reload()
    }

    return (
        <div className='finish'>
            <p>{store.user.name}, ваш результат:</p>
            <p>{store.user.score} / 5</p>
            <p>Оценка: {result}</p>
            <button
                className='button'
                onClick={reloadPage}
            >Начать заново
            </button>
        </div>
    )
})