<template>
  <div>
      <table>
          <thead>
              <tr>
                  <td>วันที่</td>
                  <td>ชื่อรายการ</td>
                  <td>รายรับ</td>
                  <td>รายจ่าย</td>
                  <td>หมายเหตุ</td>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(list,index) in data" :key="index">
                  <td>{{list.date}}</td>
                  <td>{{list.name}}</td>
                  <td v-if="list.type === 'income'">{{list.amount}}</td>
                  <td v-else>-</td>
                  <td v-if="list.type === 'outcome'">{{list.amount}}</td>
                  <td v-else>-</td>
              </tr>
              <tr></tr>
          </tbody>
      </table>
      <div>
          สรุป รายรับ : {{sumIncome}} บาท | รายจ่าย : {{sumOutcome}} บาท | คงเหลือ : {{sum}} บาท
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ledgerStore from '@/store/ledger.js'

export default {
    data() {
        return {
            data: [],
            sum: null,
            sumOutcome: null,
            sumIncome: null
        }
    },

    created() {
        this.fetchData()
        this.sumary()
    },

    beforeUpdate() {
        this.sumary()
    },

    methods: {
        async fetchData(){
            await ledgerStore.dispatch("fetchLedger")
            this.data = ledgerStore.getters.data
        },

        async sumary(){
            await ledgerStore.dispatch("sumTotal")
            this.sum = ledgerStore.getters.sum
            this.sumOutcome = ledgerStore.getters.sumOutcome
            this.sumIncome = ledgerStore.getters.sumIncome
            console.log("check rerender",this.sum,this.sumOutcome,this.sumIncome)
        }
    }
}
</script>

<style lang="scss" scope>
    td {
        width: 200px;
    }
    tr {
        height: 50px;
    }
    table {
        margin-left: auto;
        margin-right: auto;
    }
</style>
