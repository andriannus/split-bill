import { computed, defineComponent } from "vue";
import { RouterView } from "vue-router";
import { useStore } from "vuex";

import { LoadingOverlay } from "@/app/shared/components/loading-overlay";
import { MobileLayout } from "@/app/shared/components/mobile-layout";

import "./app.component.scss";

export default defineComponent({
  name: "App",

  setup() {
    const store = useStore();

    const isLoading = computed(() => store.state.isLoading);

    return (): JSX.Element => (
      <>
        <MobileLayout>
          <RouterView />
        </MobileLayout>

        <LoadingOverlay v-model={isLoading.value} />
      </>
    );
  },
});
