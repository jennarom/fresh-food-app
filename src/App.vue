<template>
  <div>
    <!-- Nav bar -->
    <nav cnav class="navbar navbar-light" style="background-color: #186180; justify-content-between flex-nowrap flex-row"
    >
      <div class="container">      
        <ul>Fresh Food</ul>                        
        <ul class="navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/"
              >Registrar producto</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/view">Listado de productos</router-link>
          </li>          
          <li class="nav-item">
            <router-link class="nav-link" to="/view">Productos vencidos</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>