import { makeAutoObservable } from 'mobx';
import { base1 } from './base/base1'
import { base2 } from './base/base2'
import { base3 } from './base/base3'
import { base4 } from './base/base4'

class Store {
    constructor() {
        makeAutoObservable(this)
    }

    user = {
        name: '',
        base: '',
        score: 0,
        count: 1,
        date: '',
    }

    questionList = []

    setName(userName) {
        this.user.name = userName
    }

    setBase(userBase) {
        this.user.base = userBase
    }

    setDate() {
        this.user.date = new Date().toLocaleString()
    }

    loadData() {
        if(this.user.base != false && this.questionList.length < 1) {
            const glob = [base1, base2, base3, base4]
            this.questionList = glob[this.user.base-1].sort(function(){
                return Math.random() - 0.5;
            }).slice(0, 5)
        }
    }

    nextQuestion() {
        this.questionList.shift()
    }

    incrementCount() {
        this.user.count += 1
    }

    checkResult() {
        this.user.score += 1
    }
}

export default new Store()