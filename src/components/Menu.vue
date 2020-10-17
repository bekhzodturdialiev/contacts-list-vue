<template>
  <nav
    class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-primary p-0"
  >
    <div class="container-fluid d-flex flex-column p-0">
      <a
        class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
        href="#"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fa fa-users"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
          <span>Contacts</span>
        </div>
      </a>
      <ul
        id="accordionSidebar"
        class="nav navbar-nav text-light align-self-start"
      >
        <li class="nav-item">
          <a href="#" class="nav-link active">
            <i class="fas fa-user ml-3"></i>
            <span class="ml-3">Contact List</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fas fa-user-plus ml-3"></i>
            <span class="ml-3">Create</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fas fa-user-edit ml-3"></i>
            <span class="ml-3">Edit</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="fas fa-user-minus ml-3"></i>
            <span class="ml-3">Delete</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
@media (min-width: 768px) {
  @media (min-width: 768px) {
    .sidebar {
      width: 14rem !important;
    }
  }
}
.sidebar {
  width: 6.5rem;
  min-height: 100vh;
}
</style>
