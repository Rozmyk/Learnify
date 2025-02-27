import StarRating from '@/components/ui/starRating'
import { CourseProps } from '@/types/api'
import Image from 'next/image'
import FavButton from '@/components/FavButton/FavButton'
import { Users } from 'lucide-react'
import formatTimestamp from '@/lib/formatTimestamp'

const MiniCourseCard = ({ title, thumbnail, reviews, id, price, discount, created_at }: CourseProps) => {
	return (
		<div className='border-b border-border flex justify-between items-start w-full gap-4 p-2 '>
			<div className='w-16 h-16 min-w-16 min-h-16 relative rounded-lg overflow-hidden'>
				<Image className='object-cover' src={thumbnail} alt='course photo' fill />
			</div>
			<div className='flex justify-between items-start gap-4 0 w-full'>
				<div>
					<p className='font-semibold'>{title}</p>
					<p className='text-sm text-muted-foreground'>Last updated: {formatTimestamp(created_at)}</p>
				</div>
				<StarRating compact reviews={reviews} />
				<div className='flex justify-start items-center gap-1 text-muted-foreground'>
					<Users size={16} />
					<p className='text-sm'>12303</p>
				</div>
				<div className='flex flex-col justify-start items-start'>
					<p className='font-semibold text-sm '>{price} zł</p>
					{discount && (
						<p className=' text-xs text-muted-foreground line-through'>
							{(price * (1 - discount / 100)).toFixed(2)} zł
						</p>
					)}
				</div>
				<FavButton variant='outline' courseId={id} />
			</div>
		</div>
	)
}

export default MiniCourseCard
