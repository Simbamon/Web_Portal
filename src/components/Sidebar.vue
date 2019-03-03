<template>
  <div>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
    />
    <nav id="sidebar">
      <!-- SIDEBAR PROFILE SECTION -->
      <div class="sidebar-header">
        <div id="sidebarProfile">
          <img src="https://ausdroid.net/wp-content/uploads/2017/05/contacts.png" style="width:100px;height:100px;" alt="Profile Picture" />
          <h1 style="color: white">John Doe</h1>
          <h2>Schedule Department</h2>
          <h2>NOTAM Administrator</h2>
        </div>
      </div>
      <!-- SIDEBAR PROFILE SECTION -->

      <!-- NAV LIST -->

      <ul class="list-unstyled components">
        <li>
          <router-link to="/"
            ><i class="fas fa-home fa-fw"></i> HOME
          </router-link>
        </li>

        <li>
          <a
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            <i class="fas fa-plane-departure"></i> NOTAM
          </a>
          <ul class="list-unstyled" id="">
            <li>
              <router-link to="/notam"
                ><i class="fas fa-chalkboard fa-fw"></i> DASHBOARD</router-link
              >
            </li>
            <li>
              <router-link to="/notam/calendar"
                ><i class="fas fa-calendar fa-fw"></i> CALENDAR</router-link
              >
            </li>
            <li>
              <router-link to="/notam/ats"
                ><i class="fas fa-edit fa-fw"></i> FLIGHT CODE</router-link
              >
            </li>
          </ul>
        </li>

        <li>
          <router-link to="/emp"
            ><i class="fas fa-users fa-fw"></i> EMPLOYEES LIST</router-link
          >
        </li>
      </ul>
      <!-- NAV LIST -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style scoped>
a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.wrapper {
  display: flex;
  width: 100%;
  align-items: stretch;
}

#sidebarProfile {
  text-align: center;
  padding-top: 10px;
}
#sidebarProfile h1 {
  font-weight: bold;
  color: #808080;
  font-size: 17px;
  padding-top: 10px;
}
#sidebarProfile h2 {
  color: #808080;
  font-size: 11px;
}

#sidebar {
  min-width: 180px;
  max-width: 180px;
  height: 1300px;
  background: #343a40;
  color: #808080;
  transition: all 0.3s;
}

/*close the sidebar*/
#sidebar.active {
  margin-left: -200px;
}

#sidebar .sidebar-header {
  padding: 10px;
  background: #212121;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 0.9em;
  display: block;
}

#sidebar ul li a:hover {
  color: #343a40;
  background: #fff;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  background: #343a40;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #343a40;
}

ul ul i {
  padding-right: 10px;
}
</style>
