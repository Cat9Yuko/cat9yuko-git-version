<template>
    <div>
      <dv-scroll-board :config="config" class="ml-[1.5625rem] mt-[1.0625rem]" style="width: 28.1875rem;height: 8.125rem;" />
    </div>
  </template>
  <script>
    import { reactive } from '@vue/reactivity'
    import {viewsNum} from '@/api/'
  
  export default {
    setup() {
        
        const  config = reactive({
        header: [ '月份', '访问量'],
        data: [],
        headerBGC:"#083a53",
        oddRowBGC:'none',
        evenRowBGC:'none',
        rowNum:3,
        index: true,
        carousel:'single',
        indexHeader:'序号',
        columnWidth: [70,100],
        align: ['center','center','left'],
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
        
        viewsNum().then((res) => {
            let datares = []
            res.map(item => {
                datares.push([item.month,item.value])
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