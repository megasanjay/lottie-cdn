<script setup lang="ts">
import { FormInst } from "naive-ui";

const push = usePush();

const showLoader = ref(false);

const contactFormRef = ref<FormInst | null>(null);

const contactForm = reactive({
  email: "",
  subject: "",
  message: "",
});

/**
 * TODO: add custom validation rules
 */
const rules = {
  email: {
    required: true,
    message: "Please enter your email",
    trigger: "blur",
  },
  subject: {
    required: true,
    message: "Please enter a subject",
    trigger: "blur",
  },
  message: {
    required: true,
    message: "Please enter a message",
    trigger: "blur",
  },
};

const saveMessage = (e: MouseEvent) => {
  e.preventDefault();

  contactFormRef.value?.validate(async (errors) => {
    if (!errors) {
      showLoader.value = true;

      const body = {
        email: contactForm.email.trim(),
        subject: contactForm.subject.trim(),
        message: contactForm.message.trim(),
      };

      const { data, error } = await useFetch("/api/contact", {
        body,
        method: "POST",
      });

      showLoader.value = false;

      if (error.value) {
        push.error({
          title: "Error",
          message: error.value.data.message,
        });

        return;
      }

      console.log(data.value);

      push.success({
        title: "Success",
        message: "Your message has been sent! We'll get back to you soon.",
      });
    } else {
      push.error({
        title: "Invalid Form",
        message: "Please fill in all fields",
      });
      console.log(errors);
    }
  });
};
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

    <n-form
      ref="contactFormRef"
      :model="contactForm"
      :rules="rules"
      size="large"
    >
      <n-form-item label="Your Email" path="email">
        <n-input
          v-model:value="contactForm.email"
          placeholder="hello@lottiel.ink"
        />
      </n-form-item>

      <n-form-item label="Subject" path="subject">
        <n-input v-model:value="contactForm.subject" placeholder="Hello!" />
      </n-form-item>

      <n-form-item label="Your Message" path="message">
        <n-input
          v-model:value="contactForm.message"
          type="textarea"
          placeholder="Leave a comment..."
        />
      </n-form-item>

      <n-form-item>
        <n-button @click="saveMessage" type="primary" :loading="showLoader">
          <template #icon>
            <Icon name="tabler:send" />
          </template>

          Send Message
        </n-button>
      </n-form-item>
    </n-form>
  </main>
</template>
