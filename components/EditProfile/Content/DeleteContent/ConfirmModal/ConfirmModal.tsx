'use client'
import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
const ConfirmModal = ({ children }: { children: ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false)
	const deleteUser = async () => {
		const supabase = await createClient()
		const {
			data: { user },
			error: authError,
		} = await supabase.auth.getUser()
		if (user) {
			const id = user.id
			const response = await fetch('/api/delete-user', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ id }),
			})
			const data = await response.json()
		}
	}

	return (
		<Dialog.Root open={isOpen}>
			<Dialog.Trigger
				onClick={() => {
					setIsOpen(true)
				}}
				asChild>
				{children}
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className='bg-black/50 fixed inset-0' />
				<Dialog.Content className='bg-background border border-border rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-lg w-96'>
					<Dialog.Title className='text-lg font-bold'>Delete account</Dialog.Title>
					<Dialog.Description className='text-sm text-muted-foreground mt-2'>
						Are you sure you want to delete your account? This action cannot be undone.
					</Dialog.Description>

					<div className='mt-4 flex justify-end gap-2'>
						<Dialog.Close asChild>
							<Button
								onClick={() => {
									setIsOpen(false)
								}}>
								Close
							</Button>
						</Dialog.Close>
						<Dialog.Close asChild>
							<Button onClick={deleteUser}>Confirm</Button>
						</Dialog.Close>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}

export default ConfirmModal
