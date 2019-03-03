<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <router-link to="/">
        <b-navbar-brand>NOTAM</b-navbar-brand>
      </router-link>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item id="sidebarCollapse"
            ><i class="fas fa-toggle-on"></i> Sidebar</b-nav-item
          >
          <b-nav-item href="#"
            ><i class="far fa-envelope"></i> E-Mail</b-nav-item
          >
          <b-nav-item href="#"
            ><i class="fas fa-briefcase"></i> ONNARA</b-nav-item
          >
          <b-nav-item href="#"><i class="fas fa-comments"></i> Chat</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              type="text"
              placeholder=""
            />
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#"
              ><i class="fas fa-cog"></i> Change Personal Info</b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><i class="fas fa-sign-out-alt"></i> Log Out</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "TopNavbar",
  mounted: function() {
    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
      });
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
