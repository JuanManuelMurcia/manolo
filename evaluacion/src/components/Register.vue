<template>
  <div class="container_body">

    <div id="formulario">
      <div id="c1">
        <h4>Sing Up</h4>
        <div id="barra"></div>
        <div id="t1">
          <h6>Sing in and explore in-buil
            apps of Drift.</h6>
        </div>
      </div>
      <div id="c2">
        <div id="conte">
          <input type="text" class="input" placeholder="User Name">
          <input type="text" class="input" placeholder="Enter email">
          <input type="text" class="input" placeholder="Password">
          <div class="capas">
            <label id="l1">
              <input type="checkbox" class="filled-in" checked="checked" />
              <span></span>
            </label>
            <span id="l2">by signing up,|accept</span>
            <span id="l3">Term & condition</span>
          </div>
          <div class="capas">
            
            <router-link class="waves-effect waves-light btn  orange darken-3" to="/login">SIGN UP</router-link>
         
            <span>Or</span>
            <span>Login</span>

          </div>
          <div class="capas"></div>

        </div>
        <footer>
          <span id="s1">can´t access your account?</span>
        </footer>
      </div>
    </div>
  </div>
</template>
<style>
@import url(/src\assets\styles\register.css);
</style>