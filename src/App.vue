<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'Blog' }">Blogs</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Contact' }">Contact</router-link>
  </nav>


  <router-view/>

    <!-- footer -->
    <div class="container-fluid bg-white mt-5 shadow">
        <div class="row">
            <div class="col-lg-4 p-4">
                <h3 class="h-font fw-bold fs-3 mb-2">Abdo</h3>
                <p>
                    Hello, i'm Abdo:)
                    I'm a full stack web developer. <br>
                    Extremely motivated to constantly develop my skills and grow professionally.
                    I am confident in my ability to come up with interesting ideas in the field of web development.
                </p>
            </div>
            <div class="col-lg-4 p-4 links">
                <h5 class="mb-3 h-font">Links</h5>
                  <router-link :to="{ name: 'home' }">Home</router-link> | <br>
                  <router-link :to="{ name: 'Blog' }">Blogs</router-link> <br>
                  <router-link :to="{ name: 'About' }">About</router-link><br>
                  <router-link :to="{ name: 'Contact' }">Contact</router-link>
            </div>
            <div class="col-lg-4 p-4">
                <h5 class="mb-3 h-font">Follow me</h5>
                <div class="links">         
                  <span class="badge bg-light text-dark fs-6 mt-1 p-2">
                    <a href="https://github.com/Abdo20bourzikat">
                    <i class="bi bi-github me-1"></i>Github
                  </a>
                  </span>
                  <br>
                  
                  <span class="badge bg-light text-dark fs-6 mt-1 p-2">
                    <a href="https://www.linkedin.com/in/abderrahmane-bourzikat-648104249?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BGAlY%2BGo%2BSH2Ni3KrURHqIA%3D%3D">
                    <i class="bi bi-linkedin me-1"></i>Linkedin
                  </a>
                  </span><br>
                  <span class="badge bg-light text-dark fs-6 mt-1 p-2">
                    <a href="https://profile.indeed.com/?hl=en_MA&co=MA&from=gnav-passport--passport-webapp&_ga=2.161646584.574569220.1671630347-708396068.1660642372">
                    <i class="bi bi-linkedin me-1"></i>Indeed
                    </a>
                  </span><br>
                
                  <span class="badge bg-light text-dark fs-6 mt-1 p-2">
                    <a href="https://instagram.com/abdobourzikat">
                      <i class="bi bi-instagram me-1"></i>Instagram
                    </a>
                  </span>
                </div>
            </div>
        </div>
    </div>
    <h6 class="signature">Develped and designed by Abdo &copy;</h6>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
nav {
  text-align: center;
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
.links a {
  display: inline-block;
  margin-bottom: 5px;
  color: var(--gray);
  text-decoration: none;
}
.links a:hover {
  padding-left: 3px;
  transform: scale(1.03);
  transition: all 0.3s;
}
nav a.router-link-exact-active {
  color: white;
  background: var(--green);
}
</style>
