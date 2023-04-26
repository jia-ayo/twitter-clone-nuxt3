<template>
  <div :class="{ dark: darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">
        <div
          class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 md:gap-5 lg:gap-9"
        >
          <!-- left  sidebar -->
          <div class="hidden md:block xs-col-span-1 xl:col-span-2 m-1">
            <div class="sticky top-0">
              <SidebarLeft />
            </div>
          </div>
          <!-- Main content -->
          <main class="col-span-10 bg-red-500 lg:col-span-7 xl:col-span-6">
            <h1>asd</h1>
          </main>
          <!-- right sidebar -->
          <div class="hidden md:block xl:col-span-4 md:col-span-3 bg-blue-500">
            <div class="sticky top-0">
              <h1>Right Sidebar</h1>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(false);
</script>
