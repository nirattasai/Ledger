import Vue from 'vue'
import Vuex from 'vuex'
import ledger from '@/json/ledger.json'

Vue.use(Vuex)

export default new Vuex.Store({
    // field in oop
  state: {
      data: [],
      sum: 0,
      sum_income: 0,
      sum_outcome: 0,
  },

  // return อะไรออกไป
  getters: {
    data: (state) => state.data,
    sumOutcome: (state) => state.sum_outcome,
    sumIncome: (state) => state.sum_income,
    sum : (state) => state.sum,
  },

  // private setter
  mutations: {
    fetch(state, {res}) {
        console.log(res)
        state.data = res
    },
    add(state, {payload}) {
        state.data.push(payload)
    },
    sum(state){
        console.log("sum used")
        // let sum = 0
        // let sum_in = 0
        // let sum_out = 0
        state.sum = 0
        state.sum_income = 0
        state.sum_outcome = 0
        console.log(state.data)
        state.data.forEach(element => {
            console.log(element.type,element.amount)
            if (element.type == "income"){
                state.sum += parseInt(element.amount)
                state.sum_income += parseInt(element.amount)
            }
            else {
                state.sum -= parseInt(element.amount)
                state.sum_outcome += parseInt(element.amount)
            }
        })
        // console.log(sum,sum_in,sum_out)
        // state.sum = sum
        // state.sum_income = sum_in
        // state.sum_outcome = sum_out
        console.log(state.sum,state.sum_income,state.sum_outcome)
    }
    
  },

  //public method
  actions: {
      // commit is keyword for use mutations
      fetchLedger({ commit }){
        let res = ledger
        console.log("res = ",res)
        commit('fetch', { res })
      },

      addData({ commit }, payload){
        commit('add', {payload})
      },

      sumTotal({ commit }){
          commit('sum')
      }
  },


  modules: {
  }
})
