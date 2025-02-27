const ReviewsHeader = ({ avgRating, reviewCount }: { avgRating: number | null; reviewCount: number }) => {
	return (
		<div className='flex justify-start items-center gap-2  py-8 mb-2'>
			<span className='text-orange-400 text-3xl'>★</span>
			<p className='font-semibold text-2xl'>{avgRating} course rating</p>
			<span className='text-2xl text-muted-foreground'>&#8226;</span>
			<p className='font-semibold text-2xl'>{reviewCount} ratings</p>
		</div>
	)
}

export default ReviewsHeader
