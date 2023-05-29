interface UserType {
    _id: string
    name: string
    email: string
    phone: number
    role: "ADMIN" | "USER"
    isActive: boolean
    token: string
}

interface AdminType {
    _id: string
    name: string
}

interface BlogType {
    _id: string
    userId: string
    heading: string
    subject: string
    blog: string
    status: string
}
