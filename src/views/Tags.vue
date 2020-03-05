<template>
  <div>
    <tags :datalist='taglist'></tags>
  </div>
</template>

<script>
import tags from '@/components/TagsModule'
export default {
  data () {
    return {
      taglist: []
    }
  },
  components: {
    tags
  },
  mounted () {
    this.$axios({
      url: `/api/v2/tags/${this.$route.params.id}?lang=zh-Hans&platform=web&device=mobile`
    }).then(res => {
      this.taglist = res.data.data.item
    })
  }
}
</script>
