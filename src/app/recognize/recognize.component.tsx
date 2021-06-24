import { defineComponent } from "vue";

export default defineComponent({
  name: "Recognize",

  setup() {
    return (): JSX.Element => {
      return (
        <div class="h-screen min-h-screen flex flex-col">
          <div class="flex-grow p-4">
            <p class="text-xs font-semibold">Split Bill</p>
            <h1 class="font-bold my-1 text-lg">Recognized Items</h1>

            <p class="text-xs text-gray-500">
              Make sure to check that all items were read correctly.
            </p>
          </div>

          <button class="bg-green-500 focus:outline-none flex justify-center py-3 text-sm text-white w-full">
            Next
          </button>
        </div>
      );
    };
  },
});
