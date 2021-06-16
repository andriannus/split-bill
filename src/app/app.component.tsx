import { defineComponent } from "vue";
import { RouterView } from "vue-router";

import { MobileLayout } from "@/app/shared/components/mobile-layout";

import "./app.component.scss";

export default defineComponent({
  name: "App",

  setup() {
    return (): JSX.Element => (
      <MobileLayout>
        <RouterView />
      </MobileLayout>
    );
  },
});
