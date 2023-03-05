<template>
  <div class="container">
    <h1 class="mt-5">Express JS front</h1>
    <transition enter-active-class="animate__animated animate__backInDown"
      leave-active-class="animate__animated animate__fadeOut">
      <div class="alert alert-success" role="alert" v-if="msg">
        {{ msg }}
      </div>
    </transition>
    <FormData />
    <hr />
    <ListData />
  </div>
</template>

<script>
import { mapState ,mapMutations } from 'vuex';
import FormData from '@/components/FormData.vue'
import ListData from '@/components/ListData.vue'

export default {
  name: 'HomeView',
  components: {
    FormData,
    ListData
  },
  computed: {
    ...mapState(['msg'])
  },
  methods:{
    ...mapMutations(['SET_MSG'])
  },
  watch:{
    msg:function(n){
      if(n.length>4){
        setTimeout(() => {
          // this.$store.commit('SET_MSG', '111')
          this.SET_MSG('');
        },2000)
      }
    }
  }
}
</script>
