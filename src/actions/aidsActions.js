// actions/aidsActions.js
export const fetchAids = () => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:5000/aids');
            const data = await response.json();
            dispatch({
                type: 'FETCH_AIDS_SUCCESS',
                payload: data
            });
        } catch (error) {
            console.error('Error fetching aids:', error);
        }
    };
};

export const addAid = (aid) => {
    return async (dispatch) => {
        try {
            const response = await fetch('http://localhost:5000/aids', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(aid)
            });
            const data = await response.json();
            dispatch({
                type: 'ADD_AID',
                payload: data
            });
        } catch (error) {
            console.error('Error adding aid:', error);
        }
    };
};

export const deleteAid = (id) => {
    return async (dispatch) => {
        try {
            await fetch(`http://localhost:5000/aids/${id}`, {
                method: 'DELETE'
            });
            dispatch({
                type: 'DELETE_AID',
                payload: id
            });
        } catch (error) {
            console.error('Error deleting aid:', error);
        }
    };
};
