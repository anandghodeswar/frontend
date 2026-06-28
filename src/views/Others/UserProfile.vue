<template>
  <admin-layout>
    <PageBreadcrumb :pageTitle="currentPageTitle" />

    <div
      class="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"
    >
      <h3 class="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">Profile</h3>
      <profile-card :user="user" />
      <personal-info-card />
      <address-card />
    </div>
  </admin-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import { getProfile } from "../../services/userService";

import ProfileCard from "../../components/profile/ProfileCard.vue";
import PersonalInfoCard from "../../components/profile/PersonalInfoCard.vue";
import AddressCard from "../../components/profile/AddressCard.vue";


import AdminLayout from '../../components/layout/AdminLayout.vue'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
// import { ref } from 'vue'
// import ProfileCard from '../../components/profile/ProfileCard.vue'
// import PersonalInfoCard from '../../components/profile/PersonalInfoCard.vue'
// import AddressCard from '../../components/profile/AddressCard.vue'

const user = ref({});

const loading = ref(true);

const loadProfile = async () => {
  try {
    // const response =
    //   await getProfile();

    // user.value =
    //   response.data;

  }
  catch (error) {
    console.log(error);
  }
  finally {
    loading.value = false;
  }
};

onMounted(() => {
  loadProfile();
});

</script>
