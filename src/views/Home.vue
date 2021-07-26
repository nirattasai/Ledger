<template>
  <div class="home">
    <input-form></input-form>
    <ledger-table></ledger-table>
  </div>
</template>

<script>
// @ is an alias to /src
import InputForm from '../components/InputForm.vue'
import LedgerTable from '../components/LedgerTable.vue'
export default {
  name: 'Home',
  components: {
    InputForm,
    LedgerTable
  }
}
</script>
