<template>
  <div class="deposit">
    <p>예금페이지</p>
    <div class="view">
      <AView class="comp" />
      <BView class="comp" />
      <CView class="comp" />
      <DView class="comp" />
      <EView class="comp" />
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

<style>
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.comp {
  background: yellow;
  width: 200px;
  border-radius: 12px;
  margin: 20px;
}
</style>
