<template>
  <span>{{ sysinfo }}
    <button @click="fetchData">刷新</button>
  </span>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      sysinfo: {
        memoryCapacity: 0,
        used: 0
      }
    }
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:8080/systeminfo').then(response => {
        this.sysinfo = response.data
      })
    }
  }
}
</script>
