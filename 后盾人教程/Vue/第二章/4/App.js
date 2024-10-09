import Todo from "./components/Todo.js";
import db from "./data/todos.js";
export default {
  components: { Todo },
  data() {
    return {
      db,
    };
  },
};
