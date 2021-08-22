<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center header-transparent">
      <div class="container d-flex align-items-center justify-content-between">
        <div class="logo">
          <h1><a href="/index.html">Run Rabbit Run</a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="/">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#services">Services</a></li>
            <li><a class="nav-link scrollto" href="#portfolio">Portfolio</a></li>
            <li><a class="nav-link scrollto" href="#pricing">Pricing</a></li>
            <li><a class="nav-link scrollto" href="#team">Team</a></li>
            <li class="dropdown">
              <a href="#">
                <span>Drop Down</span>
                <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li class="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->
    <!-- <div id="nav"> -->
    <!-- <ul>
      |
      <router-link to="/welcome">Welcome</router-link>
      | -->
    <!-- </ul> -->
    <!-- <ul v-if="isLoggedIn()"> -->
    <!-- <ul> -->
    <!-- <router-link to="/">Home</router-link>
      | -->
    <!-- </ul> -->
    <!-- <ul v-if="!isLoggedIn()"> -->
    <!-- <ul> -->
    <!-- <a class="nav-link" href="/signup">Sign-up</a>
      | -->
    <!-- </ul> -->
    <!-- <ul v-if="!isLoggedIn()"> -->
    <!-- <ul> -->
    <!-- <a class="nav-link" href="/login">Login</a>
      | -->
    <!-- </ul> -->
    <!-- <ul v-if="isLoggedIn()"> -->
    <!-- <ul> -->
    <!-- <a class="nav-link" href="/experiences">Experiences</a>
      |
      <a class="nav-link" href="/notepad">Notepad View</a>
      | -->
    <!-- </ul> -->
    <!-- <ul v-if="isLoggedIn()"> -->
    <!-- <ul> -->
    <!-- <a class="nav-link" href="/tags">Tags</a>
      |
      <a class="nav-link" href="/bucket">Bucket</a>
      | -->
    <!-- </ul> -->
    <!-- <ul v-if="isLoggedIn()"> -->
    <!-- <ul> -->
    <!-- <a class="nav-link" href="/logout">Logout</a>
      | -->
    <!-- </ul> -->
    <!-- </div> -->
    <router-view />
    <!-- ======= Footer ======= -->
    <footer id="footer">
      <div class="container">
        <h3>Run Rabbit Run</h3>
        <p>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.
        </p>
        <div class="social-links">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
        <div class="copyright">
          &copy; Copyright
          <strong><span>Selecao</span></strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/selecao-bootstrap-template/ -->
          Designed by
          <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<script>
// export default {
//   methods: {
//     isLoggedIn: function () {
//       return localStorage.getItem("jwt");
//     },
//   },
// };
</script>
