<template>
  <nav
    class="d-none d-md-block navbar navbar-dark align-items-start sidebar sidebar-dark bg-primary p-0 col-md-3 col-lg-4 col-xl-3 min-vh-100"
  >
    <div class="container-fluid d-flex flex-column p-0">
      <a
        class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
        href="#"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fa fa-users"></i>
        </div>
        <div class="sidebar-brand-text mx-3 my-3">
          <router-link
            :to="{ name: 'ContactList' }"
            class="nav-link text-light active"
          >
            <span>Contacts</span>
          </router-link>
        </div>
      </a>
      <ul
        id="accordionSidebar"
        class="nav navbar-nav text-light align-self-start"
      >
        <li class="nav-item">
          <router-link :to="{ name: 'ContactList' }" class="nav-link">
            <i class="fas fa-user ml-3"></i>
            <span class="ml-3">Contact List</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'ContactCreate' }" class="nav-link">
            <i class="fas fa-user-plus ml-3"></i>
            <span class="ml-3">Create</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
