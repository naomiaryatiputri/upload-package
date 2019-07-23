<template lang="pug">
div.label-product-discount
  div.label-product-discount-text {{diskon}}%
  div.clearfix
    div.label-product-discount-triangle.left
    div.label-product-discount-triangle.right
</template>
<script>
export default {
  name: 'Label Discount',
  props: {
    diskon:Number
    },
}
</script>