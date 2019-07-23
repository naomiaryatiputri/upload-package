<template lang="pug">
div.live-pulse(:class='liveColor')
</template>
<script>
export default {
  name: 'LivePulse',
  props: {
    liveColor: String
  }
}
</script>
