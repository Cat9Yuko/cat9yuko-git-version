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
    const del = async id => {
        request.delete(id)
        load()
    }
    const add =  async todo => {
        await request.post(todo)
        load()
    }
    return {
        todos,
        del,
        load,
        add
    }
}