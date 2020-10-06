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
    ></canvas>
    <button
      @click="onCapture"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto"
    >
      Capture
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCapture: false
    };
  },
  mounted() {
    const constraints = {
      video: true,
      facingMode: { exact: "environment" }
    };
    this.$nextTick(() => {
      navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        this.$refs.camera.srcObject = stream;
      });
    });
  },
  methods: {
    onCapture() {
      this.$nextTick(() => {
        const ctx = this.$refs.canvas.getContext("2d");
        ctx.drawImage(
          this.$refs.camera,
          0,
          0,
          this.$refs.canvas.width,
          this.$refs.canvas.height
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
