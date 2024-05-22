export interface Course {
    id: number
    title: string
    thumbnail: string
    instructor_name: string
    description?: string
    price?: number
    sale_off?: number
    rating?: number
    rating_count?: number
}

export interface CourseDetail extends Course {
    reviews: Review[]
    section_count: number
    lecture_count: number
    duration: string
    language: string
    category: string
    subcategory: string
}

export interface MyCourse extends Course {
    video_count: number
    completed_video_count: number
}

export interface Instructor {
    id: number
    name: string
    avatar: string
    expertise: string
}

export interface Slide {
    id: number
    instructor: Instructor
    background_image: string
    headline1: string
    headline2: string
    slogan: string
    sub_slogan: string
}

export interface DropdownItem {
    id: number
    title: string
    path?: {
        name: string
    }
    onClick?: () => any
}

export interface Review {
    id: number
    avatar: string
    username: string
    created_at: string
    comment: string
}

export interface Category {
    id: number
    title: string
}

export interface AuthState {
    is_authenticated: boolean
    user: {
        id: string
        name: string
        email: string
        avatar: string | null
    } | null
    access_token: string | null
}
