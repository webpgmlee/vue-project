
  <template>
  <header>
  <div class="collapse bg-dark" id="navbarHeader">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-md-7 py-4">
          <h4 class="text-white">About</h4>
          <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
        </div>
        <div class="col-sm-4 offset-md-1 py-4">
          <h4 class="text-white">Contact</h4>
          <ul class="list-unstyled">
            <li><a href="/signUp" class="text-white">SignUp</a></li>
            <li>
              <a href="/login" class="text-white" v-if="!$store.state.userInfo.id">LogIn</a>
              <a href="#" class="text-white" @click="logout()" v-else>LogOut</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar navbar-dark bg-dark shadow-sm">
    <div class="container">
      <a href="#" class="navbar-brand d-flex align-items-center">
        <router-link to="/"><strong>NFTMALL</strong></router-link>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>
</template>

<script>
import store from "@/scripts/store"
import router from "@/scripts/router"
export default {
    name: 'Header',
    setup() {
      const logout = () => {
        alert("로그아웃 되었습니다.");
        store.commit('setUserInfo', '');
        sessionStorage.removeItem("id");
        router.push({path: '/'});
      }

      return {
        logout
      }
    }
}
</script>

<style scoped>
 a {color: white}
</style>
