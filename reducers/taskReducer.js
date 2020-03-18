const initialState = {
    isLoading: false,
    theme: "dark",
    activeCollection: 0,
    activeTask: null,
    tasks: [
        {
            name: "Groceries",
            data: [
                {title: "Get some fish"},
                {title: "Salmon"},
                {title: "Brocoli"},
                {title: "Black pepper"}
            ]
        },
        {
            name: "Code Stuff",
            data: [
                {title: "Revision on java"},
                {title: "Finish portfolio website"},
                {title: "Push app to the app store"},
                {title: "Submit poly assignment"}
            ]
        }
    ]
}

const taskReducer = (state=initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        default: {
            return state
        }
    }
}

export default taskReducer;