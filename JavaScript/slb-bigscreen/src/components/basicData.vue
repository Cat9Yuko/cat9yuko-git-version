<template>
    <div>
        {{ jbqk.siteNum }}
    </div>
</template>

<script>
    import {jbqk} from '@/api/'
    
    export default {
        data() {
            return {
                jbqk: {}
            }
        },
        mounted() {
            jbqk().then(res => {
                this.jbqk = res
                console.log(res);
            }) 
        }
    }
</script>

<style lang="scss" scoped>

</style>