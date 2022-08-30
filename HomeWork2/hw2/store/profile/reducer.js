import {Provider} from "react-redux"
import './action.js';



const initialState = {
    showName: false
}

const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_MESSAGE:
            return {
                ...state,
                showName: !state.showName
            }
            default:
                return state
    }
}
    
    

export default function Profile() {
    const { showName, name } = store.getState().profile;
    const setShowName = useCallback(() => {
    dispatch(toggleShowName);
    }, [dispatch]);
    return (
        <div>
        <h4>Profile</h4>
        <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
        />
        <span>Show Name</span>
        {showName && <div>{name}</div>}
        </div>
    )
}