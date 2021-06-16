import { defineComponent } from "vue";

import Camera from "@/app/shared/assets/images/camera.png";
import Image from "@/app/shared/assets/images/image.png";
import Payment from "@/app/shared/assets/images/payment.png";

export default defineComponent({
  name: "Home",

  render: (): JSX.Element => (
    <div class=" bg-white flex flex-col h-screen justify-evenly px-6 select-none">
      <div class="text-center">
        <h1 class="font-semibold mb-2 text-3xl">Split Bill</h1>

        <p class="font-light text-gray-500 text-sm">
          Got a bill to split? Take a photo of the receipt and find out how much
          everyone owes!
        </p>
      </div>

      <div class="flex justify-center">
        <img src={Payment} alt="Payment Bill Icon" />
      </div>

      <div class="flex">
        <div class="cursor-pointer flex flex-col items-center p-4 w-full">
          <img src={Camera} alt="Camera Icon" class="mb-2" width="32" />
          <p class="text-sm">Take photo</p>
        </div>

        <div class="cursor-pointer flex flex-col items-center p-4 w-full">
          <img src={Image} alt="Image Icon" class="mb-2" width="32" />
          <p class="text-sm">Select photo</p>
        </div>
      </div>
    </div>
  ),
});
