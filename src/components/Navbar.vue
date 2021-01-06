<template>
  <nav>
    <div class="logo-block">
      <div class="logo">
        <img src="../assets/logo.png" alt="logo" class="image" />
        <div class="name">Card Shifter</div>
      </div>
    </div>
    <ul class="links">
      <li>
        <router-link class="link" to="/#about"
          ><i class="icon-question"></i>
          <div class="title">About</div></router-link
        >
      </li>
      <li>
        <router-link class="link" to="/#advantages"
          ><i class="icon-fire"></i>
          <div class="title">Advantages</div></router-link
        >
      </li>
    </ul>
    <div class="actions">
      <router-link to="/log"
        ><div class="btn secondary purple sign-in">Sign in</div></router-link
      >
      <router-link to="/reg"
        ><div class="btn primary purple sign-up">Sign up</div></router-link
      >
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  height: 60px;
  background: var(--white);
  box-shadow: 0 4px 15px rgba($color: #000000, $alpha: 0.15);

  .logo-block {
    .logo {
      display: flex;
      align-items: center;
      color: var(--purple);
      font-size: 1.8rem;
      height: 60px;
      margin-left: 26px;

      img {
        height: 50px;
      }

      .name {
        margin-left: 10px;
        align-self: flex-end;
        margin-bottom: 2px;
      }
    }
  }

  .links {
    list-style: none;
    display: flex;
    height: 60px;
    align-items: center;

    li {
      .link {
        text-decoration: none;
        display: flex;
        font-weight: 500;
        color: var(--dark2);

        i {
          font-size: 1.5rem;
          margin-top: 3px;
        }

        .title {
          margin-left: 5px;
          font-size: 1.25rem;
        }

        &:hover {
            color: var(--purple)
        }
      }

      & + li {
          margin-left: 25px;
      }
    }
  }

  .actions {
    display: flex;
    height: 60px;
    margin-right: 26px;
    align-items: center;
    border-left: 1px solid var(--light2);
    
    a {
      text-decoration: none;

      & + a {
          margin-left: 17px;
      }

      &:first-child {
          margin-left: 26px;
      }
    }
  }
}
</style>
