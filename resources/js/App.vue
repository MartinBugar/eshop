<template>
    <div class="bg-app">
        <nav class="navbar navbar-expand  navbar-dark bg-dark main-nav">
            <div class="container">
                <a class="navbar-brand" href="/">eshop</a>

                <div class="navbar-nav" v-if="isLoggedIn">
                    <router-link to="/aboutus" class="nav-item nav-link">O nás</router-link>
                    <router-link to="/contactus" class="nav-item nav-link contactus">Kontakt</router-link>

                    <div class="logout">
                        <div class="dropdown">
                            <button
                                class="nav-item nav-link btn btn-primary btn-sm logout-button button-radius dropdown-toggle"
                                type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                {{ this.name }}
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" role="menu">
                                <li v-for="option in userOptions" :key="option">
                                    <a class="dropdown-item dropdown-loans" @click="onClick(option)"
                                       href="javascript:void(0)">{{ option }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="navbar-nav" v-else>
                    <!--                    <router-link to="/" class="nav-item nav-link">Home</router-link>-->

                    <router-link to="/aboutus" class="nav-item nav-link">O nás</router-link>
                    <router-link to="/contactus" class="nav-item nav-link contactus">Kontakt</router-link>

                    <router-link to="/login" class="nav-item nav-link btn btn-primary button-radius">Prihlásenie
                    </router-link>
                    <router-link to="/register" class="nav-item nav-link btn btn-primary register button-radius">
                        Registrácia
                    </router-link>
                </div>
            </div>

        </nav>


        <router-view></router-view>


<!--        <footer class="text-center text-white footer">-->
<!--            &lt;!&ndash; Grid container &ndash;&gt;-->
<!--            <div class="container p-4 pb-0">-->
<!--                &lt;!&ndash; Section: CTA &ndash;&gt;-->
<!--                <section class="">-->
<!--                    <p class="d-flex justify-content-center align-items-center">-->

<!--                    </p>-->
<!--                </section>-->
<!--                &lt;!&ndash; Section: CTA &ndash;&gt;-->
<!--            </div>-->
<!--            &lt;!&ndash; Grid container &ndash;&gt;-->

<!--            &lt;!&ndash; Copyright &ndash;&gt;-->
<!--            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">-->
<!--                © 2023 Copyright:-->
<!--                <a class="text-white" href="https://mojefinancie.eu">mojefinancie.eu</a>-->
<!--            </div>-->
<!--            &lt;!&ndash; Copyright &ndash;&gt;-->
<!--        </footer>-->


    </div>
</template>
<script>


export default {
    name: "App",
    components: {},
    data() {
        return {
            name: '',
            isLoggedIn: false,
            isLoggedInAsAdmin: false,
            userOptions: ['Profil', 'Odhlasiť'],
            value: '',

        }
    },
    beforeCreate() {

    },
    created() {
        if (window.Laravel.isLoggedin && window.Laravel.user.role === 'martyxAdminMojeFinancie123' && window.Laravel.user.email === 'martin1.bugar@gmail.com') {
            this.isLoggedInAsAdmin = true
            this.name = window.Laravel.user.name;
        }
        if (window.Laravel.isLoggedin) {
            this.isLoggedIn = true
            this.name = window.Laravel.user.name;
        }
    },
    methods: {

        isSideBarVisible() {

            if (this.isLoggedIn) {
                return true;
            } else {
                return false;
            }
        },
        onClick(option) {
            if (option === 'Odhlasiť') {
                this.logout();
            }

            if (option === "Profil") {
                window.location.href = "/userprofile";
            }
        },

        logout() {
            // e.preventDefault()
            this.$axios.get('/sanctum/csrf-cookie').then(response => {
                this.$axios.post('/api/logout')
                    .then(response => {
                        if (response.data.success) {
                            window.location.href = "/"
                        } else {
                            console.log(response);
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            })
        }
    },
}
</script>

<style scoped>

.contactus {
    margin-right: 30px;
}

.bg-app {
    padding-top: 6vh;
    width: 100%;
    height: 100vh;
}

.logout {
    padding-left: 50px;
}

.register {
    margin-left: 15px;
}

.button-radius {
    border-radius: 18px;
    margin-top: 2px;
    padding: 5px;
    /*padding-top: 5px;*/
}

.main-nav {
    min-height: 60px;
    max-height: 60px;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
}

footer {
    background-color: #0a4275;
    position: relative;
    bottom: 0;
    left: 0;
    z-index: 2;
}


</style>
