<template>
  <div id="content-wrapper" class="d-flex flex-column flex-grow-1">
    <div class="content">
      <nav
        class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top"
      >
        <div class="container-fluid">
          <form
            action=""
            class="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
          >
            <div class="input-group">
              <input
                class="bg-light form-control border-0 small"
                type="text"
                placeholder="Search for..."
              />
              <div class="input-group-append">
                <button class="btn btn-primary py-0" type="button">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="d-sm-flex justify-content-between align-items-center mb-4">
          <h3 class="text-dark mb-0">Contact List</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactList",
};
</script>
