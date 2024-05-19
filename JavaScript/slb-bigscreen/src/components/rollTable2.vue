<template>
    <div>
      <dv-scroll-board :config="config" class="ml-[1.5625rem] mt-[1.0625rem]" style="width: 28.1875rem;height: 160px;" />
    </div>
  </template>
  <script>
    import { reactive } from '@vue/reactivity'
    import {articles} from '@/api/'
  
  export default {
    setup() {
        
        const  config = reactive({
        header: [ '标题', '访问量','创建时间'],
        data: [],
        headerBGC:"#083a53",
        oddRowBGC:'none',
        evenRowBGC:'none',
        rowNum:4,
        index: false,
        carousel:'single',
        indexHeader:'序号',
        columnWidth: [250,80],
        align: ['left','center','left'],
    }
    )


    function datav(res) {
            res.map(item => {
                this.config.data.push(item)
            })
        }

        return{
            config,datav
        }
    },
    
    mounted() {
        
        articles().then((res) => {
            let datares = []
            res.map(item => {
                datares.push([item.title,item.readingNum,item.creatTime])
            })
            this.datav(datares)
                
            })
            
    },
    methods: {
        
    }
  }
  
  </script>

<style lang="scss">
.dv-scroll-board .header {
    color: #85b0c1;
}
    .dv-scroll-board .rows .row-item {
        border-bottom: 1px solid #163d54;
    }
</style>