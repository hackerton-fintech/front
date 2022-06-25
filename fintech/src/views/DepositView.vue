<template>
  <div class="deposit">
    <p style="color: white">예금페이지</p>
    <div class="view">
      <AView />
      <BView />
      <CView />
      <DView />
      <EView />
    </div>
  </div>
</template>

<script>
import AView from "@/components/detail/AView.vue";
import BView from "@/components/detail/BView.vue";
import CView from "@/components/detail/CView.vue";
import DView from "@/components/detail/DView.vue";
import EView from "@/components/detail/EView.vue";
export default {
  components: { AView, BView, CView, DView, EView },
};
</script>

<style scoped>
.deposit {
  height: 306px;
  background-color: rgb(41, 137, 134);
  border: 1px solid;
}
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<style>
.content-box {
  background-color: #ffffff;
  box-shadow: 5px 8px 5px grey;
  background-size: 30px 30px;
  background: white;
  width: 200px;
  height: 50px;
  border-radius: 12px;
  margin: 20px;
}
.emoji {
  position: absolute;
  left: 120px;
  margin-right: 40px;
  width: 40px;
  background-color: rgb(224, 252, 242);
  border-radius: 20px;
  background-size: 10%;
  padding: 5px;
}

</style>
