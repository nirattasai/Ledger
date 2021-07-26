<template>
  <div>
    <h1>
      บัญชีรายรับรายจ่าย
    </h1>
    <div>
      <div class="wraper">
        <label for="name-input">ชื่อรายการ</label>
        <input type="text" id="name-input" placeholder="ชื่อรายการ" v-model="name">
      </div>
      <div class="wraper">
        <label for="type">ประเภทรายการ</label>
        <select name="type" id="type-select" v-model="selected">
          <option disabled value="">เลือกประเภทของรายการ</option>
          <option value="income">รายรับ</option>
          <option value="outcome">รายจ่าย</option>
        </select>
      </div>
      <div class="wraper">
        <label for="amount-input">จำนวน</label>
        <input type="text" id="amount-input" placeholder="จำนวนเงิน" v-model="amount">
        บาท
      </div>
      <input type="date" name="date" id="date" v-model="date" style="left: 200px">
      <button @click="OKClick">ตกลง</button>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ledgerStore from '@/store/ledger.js'
export default {
    data() {
        return {
            name: '',
            selected: '',
            date: '',
            amount: '',
        }
    },

    methods: {
        OKClick(){
            let data = {
                name: this.name,
                type: this.selected,
                date: this.date,
                amount: this.amount,
            }
            ledgerStore.dispatch('addData', data)
        }
    }
}
</script>

<style lang="scss" scoped>
  .wraper {
    height: 50px;
    text-align: left;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  label {
    text-align: left;
    display: inline-block;
    width: 200px;
  }

  input {
    display: inline-block;
    width: 200px;
  }

  button {
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    font-size: 20pt;
    font-family: 'Kanit', sans-serif;
    display: block;
    background-color: #747677;
    border: 1px solid transparent;
    color: #ffffff;
    font-weight: 100;
    -webkit-border-radius: 20px;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background-color: #ffffff;
    color: #747677;
    border-color: #747677;
  }

  
</style>
