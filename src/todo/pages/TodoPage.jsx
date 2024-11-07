import { TodoView } from '../view/';
import TodoLayout from '../layout/TodoLayout';

export const TodoPage = () => {
    const onClickNewTodo = () => {
        console.log('Crear nuevo To-Do'); 
    }
    return (
        <>
            <TodoLayout>
                <TodoView />

            </TodoLayout>
        </>
    );

};

export default TodoPage;
