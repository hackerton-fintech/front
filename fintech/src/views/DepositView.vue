<template>
  <div class="deposit">
    <p style="color: white; padding-top: 65px">예금페이지</p>
    <div class="view">
      <div class="subtitle">
        <p>Today's Mintsights</p>
      </div>
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
export default {
  components: { AView, BView, CView, DView },
};
</script>

<style scoped>
.subtitle {
  color: white;
  font-size: 30px;
  margin-top: 10px;
}
.deposit {
  height: 306px;
  background-color: rgb(41, 137, 134);
}
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<style>
.recommend-box {
  display: flex;
}
.recommend-box * {
  flex-grow: 1;
}
.content-box {
  background-color: #ffffff;
  box-shadow: 5px 8px 5px grey;
  background-size: 30px 30px;
  background: white;
  width: 357px;
  height: 133px;
  border-radius: 12px;
  margin: 20px;
}
.emoji {
  position: absolute;
  left: 120px;
  width: 40px;
  background-color: rgb(224, 252, 242);
  border-radius: 20px;
  background-size: 10%;
  padding: 5px;
}
</style>
