import React, { useState } from 'react'
import store from './store'
import {observer} from 'mobx-react-lite';

export const Start = observer(({start}) => {
    const [name, setName] = useState('')
    const [base, setBase] = useState('')
    let disable = true

    const handleUserName = (e) => {
        setName(e.target.value)
    }

    const handleUserBase = (e) => {
       setBase(e.target.value)
    }

    (name && base) ? disable = false : null

    const handleStart = (e) => {
        e.preventDefault()
        store.setName(name)
        store.setBase(base)
        store.setDate()
        start()
    }

    return(
        <div className='container'>
            <form className="form">
                <div className='form_wrapper'>
                    <label>Введите ваше ФИО</label>
                    <input
                        className='form_input'
                        type='text'
                        name='name'
                        placeholder='Например, Иванов Иван Иванович'
                        onChange={handleUserName}
                    />
                </div>
                <div className='form_wrapper'>
                    <label>Какой тест будете сдавать?</label>
                    <input
                        className='form_input'
                        type='number'
                        min='1'
                        max='4'
                        name='base'
                        placeholder='Например, 1'
                        onChange={handleUserBase}
                    />
                </div>
                <div className='form_block'>
                    <p>1. Вопросы по служебной деятельности по конвоированию</p>
                    <p>2. Меры безопасности при обращении с оружием</p>
                    <p>3. Вопросы для младших инспекторов</p>
                    <p>4. Экспресс-тестирование при подготовке караулов по конвоированию</p>
                </div>
                <button
                    className='button'
                    type='button'
                    disabled={disable}
                    onClick={handleStart}>
                    Начать тест
                </button>
            </form>
        </div>
    )
})