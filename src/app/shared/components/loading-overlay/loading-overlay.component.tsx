import { defineComponent, Teleport } from "vue";

import "./loading-overlay.component.scss";

export default defineComponent({
  name: "LoadingOverlay",

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    return (): JSX.Element => (
      <Teleport to="body">
        {props.modelValue && (
          <div class="LoadingOverlay">
            <div class="LoadingOverlay-spinner">
              {Array.from({ length: 12 }).map(() => {
                return <div></div>;
              })}
            </div>

            <p>Reading items...</p>
            <p>Please wait.</p>
          </div>
        )}
      </Teleport>
    );
  },
});
