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
} | {
    type: 'DELETE_USER',
    id: number
} | {
    type: 'UPDATE_USER',
    data:User
}
const UserContext = createContext<{ user: User | null; dispatch: React.Dispatch<Action> }>({ user: null, dispatch: () => null });
const userReducer = (state: User | null, action: Action): User | null => {
    switch (action.type) {
        case 'ADD_USER':            
            return { ...action.data };
        case 'UPDATE_USER':
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
    const [user, dispatch] = useReducer(userReducer, null);
    return (
        <UserContext value={{ user, dispatch }}>
            {children}
        </UserContext>
    );
};
export { UserProvider, UserContext };