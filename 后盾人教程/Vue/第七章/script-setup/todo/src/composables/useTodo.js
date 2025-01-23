import useRequest from "../composables/useRequest";
import { ref } from "vue";

const todos = ref([]);

export default async () => {
  const request = useRequest();
  todos.value = await request.get();

  return { todos };
};
