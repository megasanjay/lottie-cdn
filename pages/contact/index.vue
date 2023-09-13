<script setup>
/**
 * TODO: Add contact form
 */
</script>

<template>
  <main
    class="flex flex-col max-w-screen-lg mx-auto w-full p-8 h-full mb-20 mt-10"
  >
    <h1>Contact Us!</h1>

    <p class="mt-2 text-lg">
      Got a technical issue? Found something that goes against the rules? Let us
      know.
    </p>

    <n-divider />

    <form action="#" class="space-y-8">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium">
          Your email
        </label>

        <input
          type="email"
          id="email"
          class="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="hello@lottiel.ink"
          required
        />
      </div>

      <div>
        <label for="subject" class="block mb-2 text-sm font-medium">
          Subject
        </label>

        <input
          type="text"
          id="subject"
          class="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="Let us know how we can help you"
          required
        />
      </div>

      <div class="sm:col-span-2">
        <label for="message" class="block mb-2 text-sm font-medium">
          Your message
        </label>

        <textarea
          id="message"
          rows="6"
          class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>

      <button
        type="submit"
        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
      >
        Send message
      </button>
    </form>
  </main>
</template>
