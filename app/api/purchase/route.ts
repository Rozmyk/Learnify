import { createClient } from '@/utils/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	try {
		const supabase = await createClient()
		const { userId, courseIds } = await req.json()

		if (!userId || !courseIds?.length) {
			return NextResponse.json({ error: 'Missing required data' }, { status: 400 })
		}

		const payload = courseIds.map((courseId: string) => ({
			user_id: userId,
			course_id: courseId,
		}))

		const { error } = await supabase.from('owned_courses').insert(payload)

		if (error) {
			console.error(error)
			return NextResponse.json({ error: 'Error during purchase' }, { status: 500 })
		}

		return NextResponse.json({ message: 'Purchase successful' }, { status: 200 })
	} catch (err) {
		console.error(err)
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
	}
}
