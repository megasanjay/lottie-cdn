<script lang="ts" setup>
const user = useUser();

const message = useMessage();

if (user.value) {
  await navigateTo("/"); // redirect to profile page
}

const errorMessage = ref<string | null>(null);

const username = ref("");
const password = ref("");

const loading = ref(false);

const signIn = async () => {
  loading.value = true;

  try {
    await $fetch("/api/login", {
      body: {
        username: username.value,
        password: password.value,
      },
      method: "POST",
      redirect: "manual",
    });
    await navigateTo("/"); // profile page
  } catch (e) {
    const { data: error } = e as {
      data: {
        message: string;
      };
    };

    message.error(error.message);
  }

  loading.value = false;
};
</script>

<template>
  <main class="flex h-full flex-row flex-wrap items-center justify-center">
    <div class="h-[calc(100vh-50px)] w-1/2 bg-slate-900">
      <ClientOnly>
        <Vue3Lottie
          animation-link="https://lottie.host/75efd83c-9b76-4e72-9fac-15c7846efd43/3UEBNggUWU.json"
          width="50%"
        />
      </ClientOnly>
    </div>

    <div class="flex w-1/2 flex-col items-center h-full justify-center">
      <div
        class="mt-4 w-full max-w-lg space-y-6 rounded-lg bg-white px-4 py-6 sm:px-8 sm:py-8"
      >
        <div class="">
          <h1 class="mb-3 text-left text-2xl font-bold sm:text-4xl">
            Welcome back!
          </h1>

          <p>Sign in to your account to continue using our services.</p>
        </div>

        <n-divider />

        <div class="flex w-full flex-col">
          <span class="mb-1 text-left text-sm text-slate-600"> Username </span>

          <n-input
            v-model:value="username"
            type="text"
            size="large"
            placeholder="lucia"
          />
        </div>

        <div class="flex flex-col">
          <span class="mb-1 text-left text-sm text-slate-600"> Password </span>

          <n-input
            v-model:value="password"
            type="password"
            show-password-on="mousedown"
            size="large"
            placeholder=""
          />
        </div>

        <n-button
          strong
          secondary
          type="primary"
          size="large"
          :loading="loading"
          :disabled="!username || !password"
          class="w-full"
          @click="signIn"
        >
          <template #icon>
            <Icon name="ph:sign-in-bold" />
          </template>
          Sign In
        </n-button>

        <n-divider class="text-slate-400"> </n-divider>

        <div class="flex justify-center text-sm">
          Don't have an account?
          <nuxt-link
            class="ml-1 w-fit text-blue-600 transition-all hover:text-blue-400"
            to="/auth/signup"
          >
            Sign Up
          </nuxt-link>
        </div>

        <n-divider class="text-slate-400 hidden"> </n-divider>

        <p class="mx-auto w-9/12 text-center text-sm hidden">
          By signing in, you agree to our
          <nuxt-link
            class="text-blue-600 transition-all hover:text-blue-400"
            to="/terms"
          >
            Terms of Service
          </nuxt-link>
          and
          <nuxt-link
            class="text-blue-600 transition-all hover:text-blue-400"
            to="/privacy"
          >
            Privacy Policy</nuxt-link
          >.
        </p>
      </div>
    </div>
  </main>
</template>
