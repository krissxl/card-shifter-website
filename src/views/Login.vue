<template>
  <div class="login">
    <NavbarVue />
    <div class="window">
      <div class="title">Sign in</div>
      <div class="error" v-if="errorMessage">{{ errorMessage }}</div>
      <form id="sign-in" @submit="login($event)">
        <div class="email input-field">
          <div class="name">Email</div>
          <input type="email" name="email" v-model="email" class="input" />
        </div>
        <div class="password input-field">
          <div class="name">Password</div>
          <input
            type="password"
            name="password"
            v-model="password"
            class="input"
          />
        </div>
        <div class="buttons">
          <div class="top">
            <button type="submit" class="btn primary purple full-width">
              Sign in
            </button>
            <router-link to="/reg" class="link"
              >I don't have an account</router-link
            >
          </div>
          <div class="or">or use</div>
          <div class="google btn secondary purple full-width">
            <i class="icon-google"></i>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../components/Navbar";
import { login } from "../api/firebase";

export default {
  components: { NavbarVue },
  data: function() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async login(event) {
      event.preventDefault();
      const res = await login(this.email, this.password);
      if (res.code) {
          this.errorMessage = res.message;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  .window {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: auto;
    width: 415px;
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    border-top: 11px solid var(--purple);
    border-bottom: 11px solid var(--purple);
    padding: 42px 39px;

    .title {
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .error {
      width: 100%;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
      border-right: 8px solid var(--red);
      border-left: 8px solid var(--red);
      margin-bottom: 15px;
      border-radius: 8px;
      padding: 3px;
    }

    .input-field {
      .name {
        color: var(--dark4);
        text-align: left;
        padding-left: 14px;
      }

      & + .input-field {
        margin-top: 11px;
      }
    }

    .buttons {
      margin-top: 25px;

      .top {
        display: flex;
        align-items: center;

        button {
          flex-basis: 50%;
          padding: 7px;
          height: 32px;
          margin-right: 15px;
        }

        .link {
          flex-basis: 50%;
          color: var(--l-purple);
        }
      }

      .or {
        margin: 8px 0;
      }

      .google {
        font-size: 1.1rem;
        height: 32px;
      }
    }
  }
}
</style>
