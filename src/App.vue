<template>
  <div>
    <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/bantikyan/icheck-bootstrap/master/icheck-bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"/>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css"/>
    <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"/>
    <link rel="stylesheet" type="text/css" href="https://code.jquery.com/jquery-3.3.1.slim.min.js"/>
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"/>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.css"/>
    <TopNavbar />
    <div class="wrapper">
      <Sidebar />
      <div class="contentsMargin"><router-view /></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TopNavbar from "./components/TopNavbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    TopNavbar,
    Sidebar,
    Footer
  }
};
</script>

<style>
.wrapper {
  display: flex;
  align-items: stretch;
}

.contentsMargin {
  min-width: 80%;
  margin: 30px auto;
  display: inline-block;
}
</style>
