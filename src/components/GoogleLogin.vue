<template>
  <div className="flex justify-center">
    <button
      @click="googleLogin"
      className="flex items-center w-64 justify-between md:w-96 h-12 px-6 shadow-md  text-black transition-colors duration-150  rounded-lg focus:shadow-outline bg-gray-800 dark:bg-white  hover:shadow-xl hover:bg-gray-700 dark:hover:bg-gray-200"
    >
      <img alt="Vue logo" src="../assets/googleIcon.svg" class="h-10 w-10" />
      <p
        className="self-center ml-2 text-xs md:text-2xl sm:text-2xl text-white dark:text-black"
      >
        Sign in with Google
      </p>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    googleLogin() {},
  },
};
</script>

<style></style>
