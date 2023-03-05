<template>
  <form @submit.prevent="frmsubmit">
    <div class="mb-3">
      <label for="name" class="form-label">Your Name</label>
      <input type="text" class="form-control" id="name" v-model="name" minlength="4" required>
    </div>
    <div class="mb-3">
      <label for="mobile" class="form-label">Mobile</label>
      <input type="tel" class="form-control" id="mobile" v-model="mobile" pattern="[0-9]{10}" required aria-describedby="telHelp" maxlength="10">
      <small id="telHelp" class="form-text text-muted">10 digit mobile number </small>
    </div>
    <button type="submit" class="btn btn-primary">{{ btnTxt }}</button>
    <span v-if="mode == 'update'" class="ms-3"><a href="Javascript:void(0)" @click="cancel">Cancel</a></span>
    <input type="hidden" name="mode" v-model="mode">
  </form>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'FormData',
  data() {
    return {
      name: '',
      mobile: '',
      msg: '',
      mode: 'insert',
      btnTxt: 'Insert'
    }
  },
  computed: {
    ...mapState(['editUserID'])
  },
  watch: {
    editUserID(n, o) {
      if (n !== o) {
        this.edituser(n)
      }
    }
  },
  methods: {
    cancel: function () {
      this.name = ''
      this.mobile = ''
      this.btnTxt = 'Insert'
      this.mode = 'insert'
    },
    edituser: function (id) {
      let selectectUser = this.$store.getters.getUser(id);
      this.name = selectectUser.name
      this.mobile = selectectUser.mobile
      this.btnTxt = 'Update'
      this.mode = 'update'
    },

    frmsubmit: function () {
      if (this.mode === 'insert') {
        this.$store.dispatch('addUser', { 'name': this.name, 'mobile': this.mobile })
          .then(() => {
            this.name = '';
            this.mobile = ''
          });
      } else if (this.mode === 'update') {
        this.$store.dispatch('updateUser', { 'id': this.editUserID, 'name': this.name, 'mobile': this.mobile })
          .then(response => {
            if (response.done) {
              this.cancel();
            }
          });
      }
    }
  },

}
</script>
<style>
i.bi {
  cursor: pointer;
}
</style>
