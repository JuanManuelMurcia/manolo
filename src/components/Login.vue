<template>

  <div class="container_body">

    <div id="formulario">
      <div id="c1">
        <h4>Login</h4>
        <div id="barra"></div>
        <div id="t1">
          <h6>Sing in and explore in-buil
            apps of Drift.</h6>
        </div>
      </div>
      <div id="c2">
        <div id="conte">
          <input type="text" class="input" placeholder="Enter email">
          <input type="text" class="input" placeholder="Password">
          <div class="capas">
            <label id="l1">
              <input type="checkbox" class="filled-in" />
              <span></span>
            </label>
            <span id="l2">Keep me login on this device</span>
          </div>
          <div class="capas">

            <router-link class="waves-effect waves-light btn  orange darken-3" to="/teacher" id="boto">
              <i class="material-icons">recent_actors</i>
            </router-link>
            <router-link class="waves-effect waves-light btn  orange darken-3" to="/studets" id="boto">
              <i class="material-icons">people</i>
            </router-link>

            <span id="f2">Or</span>
            <span id="f3">Create New Account</span>

          </div>
          <div class="capas">
            <span id="g1">
              Or connect with
            </span>
          </div>

        </div>
        <footer>
          <span id="s1">can´t access your account?</span>
        </footer>
      </div>
    </div>
  </div>
</template>
<style>
@import url(/src\assets\styles\login.css);
</style>
 

