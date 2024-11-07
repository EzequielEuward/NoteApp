import { AppBar, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NoteHeader = () => {
    const navigate = useNavigate();

    const goToTodo = () => {
        navigate('/noteApp/todo');
    };

    return (
        <>
            <AppBar position="static" color="default">
                <Tabs value={0} aria-label="Tabs de notas">
                    <Tab label="Notas" />
                    <Tab label="To-Do" onClick={goToTodo} />
                </Tabs>
            </AppBar>
        </>
    );
};
export default NoteHeader;