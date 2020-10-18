<template>
  <tr>
    <td>
      <img
        class="rounded-circle mr-2"
        width="30"
        height="30"
        src="../assets/images/avatar.png"
      />{{ contact.name }}
    </td>
    <td>{{ contact.phone[0].number }}</td>
    <td>{{ contact.address[0].name }}</td>
    <td>{{ contact.email[0].name }}</td>
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
