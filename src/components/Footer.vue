<template>
  <div>
  <footer class="footer">
      <div class="container" style="margin-top: 20px">
        <p style="margin:7px;" class="text-muted">© 2019 Copyright: License Type: MIT</p>
          <p style="margin:7px;" class="text-muted">
          Tools:
          <a href="https://vuejs.org" style="text-decoration: none; color: #FFFFFF;">Vue.JS</a>,
          <a href="https://momentjs.com" style="text-decoration: none; color: #FFFFFF;">Moment.JS</a>, 
          <a href="https://fullcalendar.io" style="text-decoration: none; color: #FFFFFF;">Fullcalendar</a>, 
          <a href="https://getbootstrap.com" style="text-decoration: none; color: #FFFFFF;">Bootstrap 4</a>, 
          <a href="https://www.chartjs.org" style="text-decoration: none; color: #FFFFFF;">Chart.JS</a>, 
          <a href="https://fontawesome.com" style="text-decoration: none; color: #FFFFFF;">Font Awesome</a>
          </p>
          <p style="margin:7px;" class="text-muted">
          Developed in: <a href="https://codesandbox.io/" style="text-decoration: none; color: #FFFFFF;">Code Sandbox</a>
          By: <a href="https://github.com/Simbamon" style="text-decoration: none; color: #FFFFFF;"><i class="fab fa-github"> Simbamon</i> </a>
          </p>
     </div>
  </footer>
  </div>
  
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  padding-bottom: 130px;
}
.footer {
  position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
  /* Set the fixed height of the footer here */
  height: 130px;
  background-color: #212121;
  text-align: center;
}


</style>
