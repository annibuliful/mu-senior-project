<template>
  <div>
    <video
      ref="camera"
      autoplay
      width="300px"
      height="300px"
      class="mx-auto my-4"
      v-if="!isCapture"
    ></video>
    <canvas
      ref="canvas"
      width="300px"
      height="300px"
      class="mx-auto my-4 hidden"
    />

    <img
      class="w-8 block mx-auto my-4"
      :src="require('../assets/icons/switch-camera.svg')"
      @click="onSwitchCameraMode"
    />

    <div class="flex justify-evenly w-3/6 mx-auto mt-4">
      <button
        @click="onCapture"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto"
      >
        Capture
      </button>
      <button
        @click="onEnableCamera"
        class="bg-white hover:border-blue-700 text-blue-700 font-bold py-2 px-4 rounded block mx-auto"
      >
        Reset
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCapture: false,
      isFrontCamera: false
    };
  },
  mounted() {
    this.onEnableCamera(this.isFrontCamera);
  },
  beforeDestroy() {
    this.onDisableCamera();
  },
  methods: {
    onDisableCamera() {
      this.$refs.camera.srcObject
        .getVideoTracks()
        .forEach(track => track.stop());
      this.$refs.camera.pause();
      this.$refs.camera.src = "";
    },

    onSwitchCameraMode() {
      this.onDisableCamera();
      this.onEnableCamera(!this.isFrontCamera);
    },
    onEnableCamera(isFront) {
      this.isFrontCamera = isFront;
      const constraints = {
        video: true,
        facingMode: { exact: isFront ? "user" : "environment" }
      };
      this.$nextTick(() => {
        navigator.mediaDevices.getUserMedia(constraints).then(stream => {
          this.$refs.camera.srcObject = stream;
        });
      });
      this.isCapture = false;
      this.$emit("on-capture", null);
    },
    onCapture() {
      this.$nextTick(() => {
        const ctx = this.$refs.canvas.getContext("2d");
        ctx.drawImage(
          this.$refs.camera,
          0,
          0,
          this.$refs.camera.width,
          this.$refs.camera.height - 100
        );
        this.isCapture = true;
        const dataUrl = this.$refs.canvas.toDataURL();
        this.$emit("on-capture", dataUrl);

        this.$refs.camera.srcObject
          .getVideoTracks()
          .forEach(track => track.stop());
      });
    }
  }
};
</script>
