<template>
  <router-view v-if="!loading" />
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  data: function() {
    return {
      loading: true,
    };
  },
  beforeCreate() {
    const firebaseConfig = {
      apiKey: "AIzaSyDoy-LHYBP27JqF5kvObQi1uJ7-osW-aNU",
      authDomain: "card-shifter.firebaseapp.com",
      projectId: "card-shifter",
      storageBucket: "card-shifter.appspot.com",
      messagingSenderId: "1035785136266",
      appId: "1:1035785136266:web:c55070640377eb9dc3e573",
      measurementId: "G-SLWQT77XKH",
    };

    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      this.$store.dispatch('userAuthStateChanged', user)
      this.loading = false;
    });
  },
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Mukta", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark2);
}

body {
  background-color: var(--light);
}

:root {
  --white: #fff;
  --black: #000;
  --dark: #1a191d;
  --dark2: #2a2a34;
  --dark3: #343745;
  --dark4: #484b5b;
  --dark5: #525566;
  --dark6: #75798c;
  --light4: #9b9eaf;
  --light3: #c7cbdc;
  --light2: #dde0ee;
  --light: #f2f4fc;
  --vl-blue: #68c8ff;
  --blue: #68b0ff;
  --l-blue: #88c1ff;
  --purple: #a368ff;
  --purple-rgb: 163, 104, 255;
  --l-purple: #b282ff;
  --d-purple: #6737b3;
  --d-purple-rgb: 103, 55, 179;
  --l-green: #7ae582;
  --green: #3cd846;
  --red: #ff6868;
}

.btn {
  padding: 3px 22px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
  text-decoration: none;

  &.primary {
    &.purple {
      background-color: var(--purple);
      color: var(--white);
    }
    &.purple:hover {
      background-color: var(--l-purple);
    }
    &.purple:active {
      background-color: var(--d-purple);
    }

    &.blue {
      background-color: var(--blue);
      color: var(--white);
    }
  }

  &.secondary {
    &.purple {
      color: var(--purple);
      background-color: rgba(var(--purple-rgb), 0.15);
    }
    &.purple:hover {
      background-color: rgba(var(--purple-rgb), 0.2);
    }
    &.purple:active {
      background-color: rgba(var(--d-purple-rgb), 0.2);
    }
  }

  &.medium {
    font-size: 1.25rem;
    font-weight: 500;
  }

  &.full-width {
    width: 100%;
  }
}

.input {
  width: 100%;
  border-radius: 8px;
  padding: 5px 14px;
  border: 2px solid var(--light3);
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: var(--purple);
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@font-face {
  font-family: "icomoon";
  src: url("fonts/icomoon.eot?dabmmu");
  src: url("fonts/icomoon.eot?dabmmu#iefix") format("embedded-opentype"),
    url("fonts/icomoon.ttf?dabmmu") format("truetype"),
    url("fonts/icomoon.woff?dabmmu") format("woff"),
    url("fonts/icomoon.svg?dabmmu#icomoon") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"],
[class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "icomoon" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-dots-v:before {
  content: "\e900";
}
.icon-dots-h:before {
  content: "\e901";
}
.icon-fire:before {
  content: "\e902";
}
.icon-key:before {
  content: "\e903";
}
.icon-plus:before {
  content: "\f067";
}
.icon-question:before {
  content: "\f128";
}
.icon-search:before {
  content: "\f002";
}
.icon-close:before {
  content: "\f00d";
}
.icon-remove:before {
  content: "\f00d";
}
.icon-times:before {
  content: "\f00d";
}
.icon-cog:before {
  content: "\f013";
}
.icon-gear:before {
  content: "\f013";
}
.icon-home:before {
  content: "\f015";
}
.icon-download:before {
  content: "\f019";
}
.icon-list:before {
  content: "\f03a";
}
.icon-edit:before {
  content: "\f044";
}
.icon-pencil-square-o:before {
  content: "\f044";
}
.icon-arrow-right:before {
  content: "\f061";
}
.icon-arrow-up:before {
  content: "\f062";
}
.icon-arrow-down:before {
  content: "\f063";
}
.icon-bar-chart:before {
  content: "\f080";
}
.icon-bar-chart-o:before {
  content: "\f080";
}
.icon-twitter:before {
  content: "\f099";
}
.icon-github:before {
  content: "\f09b";
}
.icon-chain:before {
  content: "\f0c1";
}
.icon-link:before {
  content: "\f0c1";
}
.icon-rotate-left:before {
  content: "\f0e2";
}
.icon-undo:before {
  content: "\f0e2";
}
.icon-angle-down:before {
  content: "\f107";
}
.icon-exclamation:before {
  content: "\f12a";
}
.icon-vk:before {
  content: "\f189";
}
.icon-graduation-cap:before {
  content: "\f19d";
}
.icon-mortar-board:before {
  content: "\f19d";
}
.icon-google:before {
  content: "\f1a0";
}
.icon-user-times:before {
  content: "\f235";
}
</style>
