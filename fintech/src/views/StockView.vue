<template>
  <div id="stock-main">
    <p>스톡페이지</p>
    <div>
    <h3>게시판</h3>
    <router-link to="/board/list">게시판 목록</router-link><br>
    <router-link to="/board/write">게시글 등록</router-link>
    <router-view/>
  </div>
  </div>
</template>

<script>
export default {
  name: 'StockView',
}
</script>

<style>

</style>