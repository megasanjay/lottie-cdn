<script lang="ts" setup>
definePageMeta({
  middleware: ["protected"],
});

const user = useAuthenticatedUser();

const oldPassword = ref("");
const newPassword = ref("");

useSeoMeta({
  title: "My Profile | Lottiel.ink",
});
</script>

<template>
  <main class="flex flex-col max-w-screen-xl mx-auto w-full p-8">
    <h1>My Profile</h1>

    <p class="pt-3">This is where you can manage your profile.</p>

    <n-divider />

    <div class="flex flex-col space-y-8 mb-20 mt-5">
      <n-card title="User ID" bordered>
        <p class="mb-4 text-sm">
          This is your unique user ID. You can use this to identify yourself
          when contacting us.
        </p>

        <div>
          <n-input
            v-model:value="user.userId"
            type="text"
            size="large"
            :disabled="true"
          />
        </div>

        <template #action>
          <div class="flex justify-end">
            <n-button size="large" type="primary" disabled>
              <template #icon>
                <Icon name="material-symbols:save" />
              </template>
              Save
            </n-button>
          </div>
        </template>
      </n-card>

      <n-card title="Username">
        <p class="mb-4 text-sm">
          This is the username you use to log in to your account. If you need to
          change your username, please contact us.
        </p>

        <div>
          <n-input
            v-model:value="user.username"
            type="text"
            size="large"
            :disabled="true"
          />
        </div>

        <template #action>
          <div class="flex justify-end">
            <n-button size="large" type="primary" disabled>
              <template #icon>
                <Icon name="material-symbols:save" />
              </template>
              Save
            </n-button>
          </div>
        </template>
      </n-card>

      <n-card title="Change your password">
        <p class="mb-4 text-sm">
          We recommend using a password manager to generate a strong password.
          Be sure to keep your password safe and secure.

          <br />

          <span class="text-red-500">
            There is no way to recover your password if you lose it.
          </span>
        </p>

        <div class="flex flex-col space-y-8">
          <n-input
            v-model:value="oldPassword"
            type="password"
            size="large"
            placeholder="Old Password"
          />

          <n-input
            v-model:value="newPassword"
            type="password"
            size="large"
            :disabled="true"
            placeholder="New Password"
          />
        </div>

        <template #action>
          <div class="flex justify-end">
            <n-button size="large" type="primary" disabled>
              <template #icon>
                <Icon name="material-symbols:save" />
              </template>
              Save
            </n-button>
          </div>
        </template>
      </n-card>
    </div>
  </main>
</template>
