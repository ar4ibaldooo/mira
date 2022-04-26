<template>
  <nav>
    <router-link to="/">Внести предложение</router-link> |
    <router-link to="/notes">Список</router-link>
  </nav>
  <router-view/>
</template>

<style>
  #app {
    font-family: 'Roboto Slab', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
  table {
    width:100%;
    font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
    font-size: 14px;
    border-collapse: collapse;
    text-align: center;
  }
  th{
    background: rgba(76, 191, 127, 0.65);
    color: #767676;
    font-weight:bolder ;
    text-shadow: 1px 1px 1px #ffffff;
    padding: 10px 20px;
  }
  th, td {
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: white;
    text-align: center;
  }
  td {
    background: #D8E6F3;
  }
  td:first-child, td:last-child{
    width: 10px;
  }
  th:first-child, td:first-child {
    padding: 10px 20px;
    text-align: left;
  }
  td:first-child {

    table-layout: auto;
  }
.attention{
  color: #c6273a;
}


</style>
