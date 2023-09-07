<script setup lang="ts">
import { FormInst, UploadInst, UploadFileInfo } from "naive-ui";
import { Vue3Lottie } from "vue3-lottie";

definePageMeta({
  middleware: ["protected"],
});

const message = useMessage();

const formRef = ref<FormInst | null>(null);
const uploadRef = ref<UploadInst | null>(null);

const lottieData = ref({});

const showLottiePreview = ref(false);
const showLoader = ref(false);
const confirmFollowsGuidelines = ref(false);

const model = reactive({
  name: "",
  description: "",
  originalAnimationUrl: "",
});

const rules = {
  name: [{ message: "Please enter a name", required: true, trigger: "blur" }],
  description: [
    { message: "Please enter a description", required: true, trigger: "blur" },
  ],
};

const handleChange = (data: { fileList: UploadFileInfo[] }) => {
  let file: any;

  if (data.fileList.length > 0) {
    file = data.fileList[0].file as File;

    // read the file as json
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        lottieData.value = JSON.parse(e.target?.result as string);
        showLottiePreview.value = true;
      } catch (error) {
        message.error("Only JSON files are supported");
        showLottiePreview.value = false;
      }
    };

    reader.readAsText(file);
  }
};

const handleRemove = () => {
  lottieData.value = {};
  showLottiePreview.value = false;
};

const publishLottie = () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      // Check if lottie data is empty
      if (Object.keys(lottieData.value).length === 0) {
        message.error("Please upload a lottie data file");
        return;
      }

      showLoader.value = true;

      const body = {
        name: model.name,
        description: model.description,
        jsonData: JSON.stringify(lottieData.value),
        originalAnimationUrl: model.originalAnimationUrl || "",
      };

      const { data, error } = await useFetch("/api/lottie", {
        body,
        method: "POST",
      });

      if (error.value) {
        showLoader.value = false;

        console.error(error.value.data.message);

        message.error("Something went wrong. Please try again later.");

        return;

        // const errorMessage = error.value.data.message;
        // throw new Error(errorMessage);
      }

      showLoader.value = false;

      message.success("Lottie published successfully");

      const response = data.value;

      if (response && "id" in response) {
        await navigateTo(`/animation/${response.id}`);
      } else {
        message.error("Something went wrong. Please try again later.");
      }
    } else {
      console.log(errors);
      message.error("Please fill in all required fields");
    }
  });
};
</script>

<template>
  <main class="flex flex-col max-w-screen-lg mx-auto w-full p-8 h-full">
    <h1>Let's upload a new lottie!</h1>

    <p class="mt-2 text-lg">
      We need some information about your lottie animation before we can publish
      it.
    </p>

    <n-divider></n-divider>

    <n-form ref="formRef" :model="model" size="large" :rules="rules">
      <div class="flex justify-between space-x-4 w-full">
        <div class="flex-1 pr-4">
          <n-form-item label="Name" path="name">
            <n-input
              v-model:value="model.name"
              placeholder="Mr. Watermelon"
              clearable
            />
          </n-form-item>

          <n-form-item label="Description" path="description">
            <n-input
              v-model:value="model.description"
              type="textarea"
              :rows="3"
              placeholder="Lottie animation of a watermelon"
              clearable
            />
          </n-form-item>
        </div>

        <div
          class="w-[200px] h-[200px] border rounded-xl flex justify-center items-center"
        >
          <TransitionFade>
            <div v-if="showLottiePreview">
              <ClientOnly>
                <Vue3Lottie
                  :animation-data="lottieData"
                  width="200"
                  height="200"
                />
              </ClientOnly>
            </div>
            <n-empty v-else description="Lottie Preview"> </n-empty>
          </TransitionFade>
        </div>
      </div>

      <n-form-item label="Lottie data file" path="json_data" show-require-mark>
        <n-upload
          ref="uploadRef"
          :max="1"
          :default-upload="false"
          @change="handleChange"
          @remove="handleRemove"
        >
          <n-upload-dragger>
            <div class="flex flex-col space-y-3">
              <div>
                <Icon name="ph:upload-duotone" width="50" height="50" />
              </div>

              <p class="text-lg font-medium">
                Click or drag a file to this area to upload
              </p>

              <p class="text-xs font-normal">
                Do not upload files that contain sensitive information.
              </p>
            </div>
          </n-upload-dragger>
        </n-upload>
      </n-form-item>

      <n-form-item
        label="Original animation credit (optional)"
        path="originalAnimationUrl"
      >
        <div class="flex flex-col w-full">
          <n-input
            v-model:value="model.originalAnimationUrl"
            placeholder="https://lottiefiles.com/animations/duck-love-8bT6lwrKL6"
            clearable
          />

          <p class="text-xs pt-1 text-slate-500">
            If you have made modifications to this animation without being its
            original creator, we kindly request that you acknowledge the
            original creator by including a hyperlink to the source animation.
            <br />
            If you are uploading a Lottie animation from
            <NuxtLink
              href="https://lottiefiles.com/"
              class="hover:underline text-cyan-500 font-medium"
            >
              LottieFiles</NuxtLink
            >, we also request that you furnish a hyperlink to the original
            source animation.
          </p>
        </div>
      </n-form-item>

      <n-form-item :show-label="false">
        <n-space align="center">
          <n-checkbox v-model:checked="confirmFollowsGuidelines"> </n-checkbox>
          <p class="text-sm">
            I confirm that this animation adheres to the Upload Guidelines.
          </p>
        </n-space>
      </n-form-item>

      <n-divider></n-divider>

      <div class="w-full pt-5">
        <n-button
          color="black"
          size="large"
          class="w-full"
          :loading="showLoader"
          @click="publishLottie"
          :disabled="!confirmFollowsGuidelines"
        >
          <template #icon>
            <Icon name="entypo:publish" />
          </template>

          Publish
        </n-button>
      </div>
    </n-form>
  </main>
</template>
