<template>
    <div>
      <dv-scroll-board :config="config" class="ml-[1.5625rem] mt-[1.0625rem]" style="width: 28.1875rem;height: 210px;" />
    </div>
  </template>
  <script>
    import { reactive } from '@vue/reactivity'
    import {letter} from '@/api/'
  
  export default {
    setup() {
        
        const  config = reactive({
        header: [ '标题','时间'],
        data: [],
        headerBGC:"#083a53",
        oddRowBGC:'none',
        evenRowBGC:'none',
        rowNum:6,
        index: false,
        carousel:'single',
        indexHeader:'序号',
        columnWidth: [300,140],
        align: ['left','left'],
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
        
        letter().then((res) => {
            let datares = []
            res.map(item => {
                datares.push([item.title,item.creatTime])
            })
            this.datav(datares)
                
            })
            
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