import { defineComponent } from "vue";

export default defineComponent({
  name: "MobileLayoutComponent",

  setup(_, { slots }) {
    return (): JSX.Element | null => {
      if (!slots.default) return null;
      return (
        <div class="bg-transparent m-auto max-w-screen-sm">
          {slots.default()}
        </div>
      );
    };
  },
});
