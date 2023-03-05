<template>
    <table class="table table-striped-columns mt-3">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Updated</th>
                <th scope="col">Created</th>
                <th scope="col" colspan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td>{{ user.mobile }}</td>
                <td>{{ user.updated | moment("DD/MM/YYYY , h:mm:ss a") }}</td>
                <td>{{ user.created | moment("DD/MM/YYYY , h:mm:ss a") }}</td>
                <td><i @click="SET_EDIT_USER(user.id)" class="bi bi-pencil-square"></i></td>
                <td><i @click="deluser(user.id)" class="bi bi-trash3-fill"></i></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
export default {
    methods: {
        // store.commit('SET_EDIT_USER', id)
        ...mapMutations(['SET_EDIT_USER']),
        deluser: function (id) {
            this.$store.dispatch('deleteUser', id)
                .then(response => {
                    if (response.data.affectedRows == 1) {
                        this.msg = 'Data is deleted.'
                    }
                })
                .catch(error => {
                    console.error('deluser response', error);
                });
        },
    },
    created() {
        this.$store.dispatch('fetchUsers');
    },
    computed: {
        ...mapState(['users'])
    }
}
</script>
