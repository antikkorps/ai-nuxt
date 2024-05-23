declare module "@auth/core/types" {
    interface Session {
        user?: User
    }
    interface User {
        id: string
        firstname: string
        lastname: string
        avatar: string
        role: string
    }
}

export {}