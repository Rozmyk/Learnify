export interface CourseProps {
	title: string
	description: string
	price: number
	thumbnail: string
	created_at: string
	author_id: string
	id: string
	reviews: ReviewProps[]
	avgRating: number | null
	reviewCount: number | null
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
	username: string
	created_at: string
	avatar_url: string
	email: string
	lastViewedCourseId: string | null
}
