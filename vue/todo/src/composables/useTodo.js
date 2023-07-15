import useRequest from "./useRequest"
import {
    ref
} from 'vue'
const todos = ref([])

export default () => {
    const request = useRequest()
    const load = async () => {
        todos.value = await request.get()
    }
    const del = (id) => {
        request.delete(id)
        load()
    }
    return {
        todos,
        del,
        load
    }
}