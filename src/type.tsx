import { createContext, ReactNode, useReducer } from "react"
export type User = {
    id: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    pasword?: string,
    adress?: string,
    phone?: string
}
export type Action = {
    type: 'ADD_USER',
    data:User
     //Omit<User, 'id'>
} | {
    type: 'DELETE_USER',
    id: number
} | {
    type: 'UPDATE_USER',
    data:User
     //Partial<User> & { id: number }
}
// שינוי כאן: הגדרת הקונטקסט כ-UserContext
const UserContext = createContext<{ user: User | null; dispatch: React.Dispatch<Action> }>({ user: null, dispatch: () => null })
// פונקציית ה-reducer
const userReducer = (state: User | null, action: Action): User | null => {
    console.log("enter userReducer");
    console.log(action);
    switch (action.type) {
        case 'ADD_USER':
            return { ...action.data }; // Set a unique id if needed
            // , id: state?.id || Date.now()
        case 'UPDATE_USER':
            console.log("in the upda:");
            console.log(action.data);
            return {
                ...state,
                ...action.data
            };
        case 'DELETE_USER':
            return null;
        default:
            return state;
    }
};
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // const initialUser: User = {
    //     id: 1, // או כל מזהה אחר שתרצה
    //     firstName: "Rivky",
    //     lastName: "Besdin",
    //     email: "example@example.com",
    //     pasword: "123456",
    //     adress: "123 Main St",
    //     phone: "123-456-7890"
    // };
    const [user, dispatch] = useReducer(userReducer, null); // אתחול עם המשתמש הראשון
    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};
export { UserProvider, UserContext };


// const UserContext = createContext<[User, Action]>([
//     {id:0, firstName: "", lastName: "", email: "", pasword: "", adress: "", phone: ""}, 
//     { type: 'DELETE_USER', id: 0 }
//   ])
// const UserContext = createContext<{
//     user: User | null;
//     dispatch: React.Dispatch<Action>;
// }>({ user: null, dispatch: () => null });
// export default (state: User, action: Action): User | null => {
//     switch (action.type) {
//         // case 'ADD_USER':
//         //     return [...state, { ...action.data, id: identity++ }]
//         case 'UPDATE_USER':
//              if (state) {
//                 return { ...state, ...action.data }; // מעדכן את המשתמש הקיים
//             }
//             return state;
//         case 'DELETE_USER':
//             return null;
//         default:
//             return state;
//     }
// }
// export default (state: User[], action: Action): User[] => {
//     switch (action.type) {
//         case 'ADD_USER':
//             return [...state, { ...action.data, id: identity++ }]
//         case 'UPDATE_USER':
//             return state.map(user => 
//                 user.id === action.data.id ? { ...user, ...action.data } : user );
//         case 'DELETE_USER':
//             return [...state.filter(p => p.id !== action.id)]
//         default:
//             return state;
//     }
// }
// // קומפוננטת ה-Provider
// const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [user, dispatch] = useReducer(userReducer, null);

//     return (
//         <UserContext.Provider value={{ user, dispatch }}>
//             {children}
//         </UserContext.Provider>
//     );
// };