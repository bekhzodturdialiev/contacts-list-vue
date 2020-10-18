r<template>
  <tr>
    <td>
      <router-link
        class="text-muted text-decoration-none"
        :to="{ name: 'ContactShow', params: { id: contact.id } }"
      >
        <img
          class="rounded-circle mr-2"
          width="30"
          height="30"
          src="../assets/images/avatar.png"
      /></router-link>
      <router-link
        class="text-muted text-decoration-none"
        :to="{ name: 'ContactShow', params: { id: contact.id } }"
      >
        {{ contact.name }}</router-link
      >
    </td>
    <td>
      <router-link
        class="text-muted text-decoration-none"
        :to="{ name: 'ContactShow', params: { id: contact.id } }"
        >{{ contact.phone[0].number }}</router-link
      >
    </td>
    <td>
      <router-link
        class="text-muted text-decoration-none"
        :to="{ name: 'ContactShow', params: { id: contact.id } }"
        >{{ contact.address[0].name }}</router-link
      >
    </td>
    <td>
      <router-link
        class="text-muted text-decoration-none"
        :to="{ name: 'ContactShow', params: { id: contact.id } }"
        >{{ contact.email[0].name }}</router-link
      >
    </td>
  </tr>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
};
</script>
