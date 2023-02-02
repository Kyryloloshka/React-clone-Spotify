import { Bars3Icon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import BaseButton from './BaseButton';

function TheHeader() {
	return (
		<header
			className="bg-zinc-800 flex-1 flex justify-between items-center py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10">
			<div className="flex items-center">
				<a href="#sidebar" className="mr-[8px] text-[#969696] p-1 -ml-1.5 inline-block lg:hidden">
					<Bars3Icon className='w-7 h-7' />
				</a>
				<a href="/" className="mr-[8px] text-[#969696] p-1 cursor-not-allowed">
					<ChevronLeftIcon className='w-6 h-6 ' />
				</a>
				<a href="/" className="ml-[8px] text-[#969696] p-1 cursor-not-allowed">
					<ChevronRightIcon className='w-6 h-6' />
				</a>
			</div>
			<div>
				<BaseButton classes='text-gray-400 hover:text-white'>Sign up</BaseButton>
				<BaseButton primary>Log in</BaseButton>
			</div>
		</header>
	)
}

export default TheHeader;
