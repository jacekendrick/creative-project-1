<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark menuposition">
      <div>
        <a class="navbar-brand" href="/" id="logo">HomeBase</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/problem">Problem</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/solution">Solution</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signup">Sign Up</router-link>
            </li>
        </ul>
      </div>
    </nav>
    <router-view id="view"/>
    <div class='footer'> 
        <div>
            <i class="fab fa-github fa-2x"></i>
            <a href="https://github.com/jacekendrick/creative-project-1" target="_blank" class="footer-text">GitHub Repo</a>
        </div>
        <div>
            <p class="footer-text">© Chandler Rogers & Jace Kendrick 2020</p>
        </div>
    </div>
  </div>
</template>

<style>

#app {
  background-color: white;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  color: rgba(255,255,255,.5);
}

#logo {
  color: white !important;
}

#nav a.router-link-exact-active {
  color: white;
}

#nav li {
  padding: 8px;
}


/* Original CSS file starts here */
.pagestyle2 {
    background-color: #56a3a6;
}

/* TODO - not working yet but want to get 'HomeBase' on the left and other menu items on the right */
.menuposition {
    display: flex;
    justify-content: space-between !important;
}

.section-header {
    font-size: 38pt;
    font-weight: bold;
    color: #36454f;
    text-emphasis: wrap;
}

.section-header2 {
    color: white;
}

.section-sub-header {
    font-size: 20pt;
    font-weight: bold;
    color: #56a3a6;
    line-height: 1.5;
}

.section-container {
    padding: 30px;
}

.section-sub-container {
    padding-left: 30px;
    padding-right: 30px;
}

.footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
}

.problem-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.problem-sub-header {
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    text-emphasis: wrap;
}

.problem-quotes {
    margin-bottom: 52px;
}

.footer {
    display: flex;
    border-top: 1px solid #36454f;
    background-color: #084c61;
    margin-top: auto;
    padding: 10px;
    padding-bottom: 0px;
    justify-content: space-between;
    color: white;
    height: 60px;
}

.footericon {
    height: 100px;
}

.footer-text {
    color: white;
    padding-left: 10px;
    padding-right: 10px;
}

a:hover{
    text-decoration: none;
    color: #56a3a6 !important;
}

p {
    line-height: 1.75;
}

.mockimg {
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    border-radius: 20%;
}

.signup-header {
    font-size: 38px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}

.signup-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 45px;
}

.signup-input button {
    background-color: #084c61;
    height: 50px;
    padding: 5px;
    margin: auto;
    text-align: center;
    font-size: 15px;
    width: 70px;
    border-radius: 10px;
    margin-left: 10px;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    
}

.signup-input input {
    font-size: 20px;
    padding: 10px;
    border-color: #36454f;
    border-width: 0.5px;
    border-radius: 10px;
    width: 250px;
    outline: none;
}

.signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
}

.release-date {
    margin-top: 100px;
}

button:hover {
    color: #56a3a6;
}

.landingimg {
    max-height: 100%;
    max-width: 100%;
}

input:focus {
    border-color: #56a3a6;
    border-width: 2px;
    border-style: solid;
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
    
    .desktop-view {
        margin-left: 200px;
        margin-right: 200px;
    }

    .desktop-view-l {
        margin-left: 200px;
    }

    .desktop-view-r {
        margin-right: 200px;
    }

    .dt-section { 
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .dt-section-sub-container {
        padding-left: 30px;
        padding-right: 30px;
    }

    .dt-landingimg {
        height: 700px;
    }
}
</style>
