import Todo from './components/Todo.js'
import db from './data/db.js'
export default {
    components: {
        Todo,
        db
    },
    data() {
        return {
            db
        }
    }
}