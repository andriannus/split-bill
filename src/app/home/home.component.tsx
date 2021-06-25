import { createWorker, Worker } from "tesseract.js";
import { defineComponent, onMounted, onUnmounted, reactive } from "vue";
import { useStore } from "vuex";

import Camera from "@/app/shared/assets/images/camera.png";
import Image from "@/app/shared/assets/images/image.png";
import Payment from "@/app/shared/assets/images/payment.png";

export default defineComponent({
  name: "Home",

  setup() {
    const store = useStore();

    const state = reactive({
      selectedPhoto: "",
      worker: {} as Worker,
    });

    onMounted(() => {
      initWorker();
    });

    onUnmounted(() => {
      state.worker.terminate();
    });

    function initWorker(): void {
      state.worker = createWorker();
    }

    async function recognize(): Promise<void> {
      store.commit("setLoadingStatus", true);

      try {
        await state.worker.load();
        await state.worker.loadLanguage("eng");
        await state.worker.initialize("eng");

        const data = await state.worker.recognize(state.selectedPhoto);
        console.log(data.data);
      } catch (error) {
        console.error(error);
      } finally {
        store.commit("setLoadingStatus", false);
      }
    }

    function selectPhoto(): void {
      const element = document.getElementById("FleUpload") as HTMLInputElement;

      element.value = "";
      element.click();
    }

    function onFileChange(event: Event): void {
      const selectedFile = (event.target as HTMLInputElement).files![0];
      const reader = new FileReader();

      reader.onload = () => {
        state.selectedPhoto = reader.result as string;
        recognize();
      };
      reader.readAsDataURL(selectedFile);
    }

    return (): JSX.Element => (
      <div class=" bg-white flex flex-col h-screen justify-evenly px-6 select-none">
        <div class="text-center">
          <h1 class="font-semibold mb-2 text-3xl">Split Bill</h1>

          <p class="font-light text-gray-500 text-sm">
            Got a bill to split? Take a photo of the receipt and find out how
            much everyone owes!
          </p>
        </div>

        <div class="flex justify-center">
          <img src={Payment} alt="Payment Bill Icon" width="192" />
        </div>

        <div class="flex">
          <div class="cursor-pointer flex flex-col items-center p-4 w-full">
            <img src={Camera} alt="Camera Icon" class="mb-2" width="32" />
            <p class="text-sm">Take photo</p>
          </div>

          <div
            class="cursor-pointer flex flex-col items-center p-4 w-full"
            onClick={() => selectPhoto()}
          >
            <img src={Image} alt="Image Icon" class="mb-2" width="32" />
            <p class="text-sm">Select photo</p>
          </div>

          <input
            id="FleUpload"
            accept="image/png, image/jpg, image/jpeg"
            class="hidden"
            type="file"
            onChange={(event: Event) => onFileChange(event)}
          />
        </div>
      </div>
    );
  },
});
