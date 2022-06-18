

type initialStateType={
    people:Array<any>
}

const initialState:initialStateType={
    people:[]
}

export default function reducer(state:initialStateType,action:any){
    switch (action.type) {

        case 'SET_PEOPLE':{
            return {
                ...state,
                people: [
                    ...state.people,
                    ...action.payload
                ]
            }
        }

        default:{
            return state
        }
    }
}