<template>
  <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
    <div class="flex items-center justify-between pb-6">
      <div>
        <h2 class="font-semibold text-gray-700">User Accounts</h2>
        <span class="text-xs text-gray-500">View accounts of registered users</span>
      </div>
      <div class="flex items-center justify-between">
        <div class="ml-10 space-x-8 lg:ml-40">
          <button @click="openModal"
            class="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
            </svg>
            Tambah
          </button>
        </div>
      </div>
    </div>
    <div class="overflow-y-hidden rounded-lg border">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
              <th class="px-5 py-3">ID</th>
              <th class="px-5 py-3">Full Name</th>
              <th class="px-5 py-3">User Role</th>
              <th class="px-5 py-3">Created at</th>
              <th class="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody class="text-gray-500">
            <tr>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">3</p>
              </td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div class="flex items-center">

                  <div class="ml-3">
                    <p class="whitespace-no-wrap">Besique Monroe</p>
                  </div>
                </div>
              </td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">Administrator</p>
              </td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">Sep 28, 2022</p>
              </td>

              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Active</span>
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">7</p>
              </td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div class="flex items-center">

                  <div class="ml-3">
                    <p class="whitespace-no-wrap">James Cavier</p>
                  </div>
                </div>
              </td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">Author</p>
              </td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">Sep 28, 2022</p>
              </td>

              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Active</span>
              </td>
            </tr>
            <tr>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">12</p>
              </td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <div class="flex items-center">

                  <div class="ml-3">
                    <p class="whitespace-no-wrap">Elvis Son</p>
                  </div>
                </div>
              </td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">Editor</p>
              </td>
              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <p class="whitespace-no-wrap">Sep 28, 2022</p>
              </td>

              <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                <span
                  class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Suspended</span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
        <span class="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
        <div class="mt-2 inline-flex sm:mt-0">
          <button
            class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
          <button
            class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div v-if="modalOpen" class="fixed top-0 left-0 w-full h-full bg-gray-900/20 flex items-center justify-center">
    <div class="m-2 inline-flex rounded-xl bg-gray-100 sm:p-2">
      <div class="flex flex-col rounded-lg bg-white sm:w-96">
        <div class="flex w-full justify-between self-start px-8 py-4">
          <h2 class="text-lg font-medium text-gray-700">Tambah Musik</h2>
          <svg @click="closeModal" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer text-gray-400"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <hr />

        <form class="p-4 md:p-5">
  <div class="grid gap-4 mb-4 grid-cols-2">
    <div class="col-span-2">
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
      <input type="text" name="name" id="name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="Type product name" required="">
    </div>
   
    <div class="col-span-2 sm:col-span-1 w-full">
      <label for="category"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
      <select id="category"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-full">
        <option selected="">Select category</option>
        <option value="TV">TV/Monitors</option>
        <option value="PC">PC</option>
        <option value="GA">Gaming/Console</option>
        <option value="PH">Phones</option>
      </select>
    </div>
    <div class="col-span-2">
      <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product
        Description</label>
      <textarea id="description" rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write product description here"></textarea>
    </div>
  </div>
  <button class="my-2 rounded-md bg-blue-600 py-2 font-medium text-white w-full"> Share</button>
</form>





      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: false
    };
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    }
  }
}
</script>
