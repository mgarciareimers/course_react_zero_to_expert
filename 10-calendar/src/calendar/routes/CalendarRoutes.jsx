import { Navigate, Route, Routes } from 'react-router-dom';
import { CalendarPage } from '../pages';

const CalendarRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <CalendarPage /> } />
            <Route path='/*' element={ <Navigate to={ '/' } /> } />
        </Routes>
    )
}

export default CalendarRoutes;