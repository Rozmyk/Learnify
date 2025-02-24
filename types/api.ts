export interface CourseProps {
	title: string
	description: string
	price: number
	thumbnail: string
	created_at: string
	author_id: string
	id: string
	reviews: ReviewProps[]
	categories_id: string
	categories: CategoryProps
	profiles: ProfileDataProps
	slug: string
	discount: number | null
}
export interface CategoryProps {
	name: string
	id: string
	created_at: string
	slug: string
}
export interface ReviewProps {
	rating: number
	author_id: string
	course_id: string
	content: string
	created_at: string
}
export interface ProfileDataProps {
	id: string
	website: string | null
	description: string | null
	username: string
	created_at: string
	avatar_url: string
	email: string
	isTeacher: boolean
	lastViewedCourseId: string | null
}
export interface SingleFavCourseProps {
	id: string
	created_at: string
	user_id: string
	course_id: string
}
export interface CartItemProps {
	id?: string
	created_at?: string
	user_id?: string
	product_id: string
	updated_at?: string
	course?: CourseProps
}
export interface PromocodeProps {
	value: string
	discount: number
	created_at: string
	id: string
}
