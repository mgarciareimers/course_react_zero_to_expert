import { useDispatch, useSelector } from 'react-redux';
import { onCloseDateModal, onOpenDateModal } from '../store/ui/uiSlice';

const useUiStore = () => {
    const dispatch = useDispatch();

    const { 
        isDateModalOpen
    } = useSelector(state => state.ui);

    const closeDateModal = () => {
        dispatch(onCloseDateModal());
    }

    const openDateModal = () => {
        dispatch(onOpenDateModal());
    }

    return {
        // Properties.
        isDateModalOpen,

        // Methods.
        closeDateModal,
        openDateModal,
    };
}

export default useUiStore;