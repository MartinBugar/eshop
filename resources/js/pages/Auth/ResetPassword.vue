<template>
    <div class="bg-app">
        <div class="container">
            <div class="row jutify-content-center login-center">
                <div class="col-md-6" style="float:none; margin:auto;">
                    <div class="card card-default cardLogin">
                        <div class="card-header"><h5>Email</h5></div>
                        <div class="card-body">

                            <form @submit.prevent="handleResetPassword">
                                <div class="form-group row">
                                    <label for="email" class="col-sm-4 col-form-label text-md-right">New
                                        Password </label>
                                    <div class="col-md-8">
                                        <input id="password" type="password" class="form-control" v-model="password"
                                               required
                                               autofocus autocomplete="off">
                                    </div>
                                </div>

                                <div class="form-group row mt-1 mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" class="btn btn-success">
                                            Reset Hesla
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ResetPassword",
    data() {
        return {
            password: '',

            data: {
                token: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },
    methods: {
        handleResetPassword() {


            this.data.token = this.$route.params.token;
            this.data.email = this.$route.query.email;
            this.data.password = this.password;
            this.data.password_confirmation = this.password;

            console.log(this.data.password)

            this.$axios.post('/reset-password', this.data)
                .then(response => {
                    if (response.data.success) {
                        // this.$router.go('/login')
                    } else {
                        this.errorMessage = response.data.message
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
    }
}
</script>

<style scoped>

</style>
