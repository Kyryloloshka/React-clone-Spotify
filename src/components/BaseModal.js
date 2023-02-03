import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useEffect } from "react";
import useEvent from "../hooks/useEvent";

function BaseModal({ onClose: handleClose }) {
	const ref = useRef()
	const contentRef = useRef()
	useEffect(() => {
		setTimeout(animate)
	})
	useEvent('keydown', handleEsc)

	function handleEsc({ key }) {
		if (key === 'Escape') close()
	}

	function close() {
		animate(true);
		setTimeout(handleClose, 500)
	}

	function animate(isClosing = false) {
		ref.current.classList.toggle("opacity-0", isClosing)
		contentRef.current.classList.toggle("-translate-y-10", isClosing)
	}

	return (
		<div className="fixed inset-0 bg-black/70 z-30 flex justify-center items-center opacity-0 duration-500 transition-opacity" ref={ref} role='dialog' onClick={close}>
			<div ref={contentRef} onClick={(event) => event.stopPropagation()} className="relative flex flex-col text-white bg-[#333] h-80 w-[480px] rounded-xl -translate-y-10 transition-transform duration-500">
				<button onClick={close} className="absolute right-0 p-3 text-neutral-500 transition-colors hover:text-neutral-200">
					<XMarkIcon className="h-8 w-8" />
				</button>
				<h1 className="text-2xl pt-8 pb-3 px-8 font-bold leading-relaxed border-b border-neutral-600">About recommendations</h1>
				<div className="py-6 px-8 overflow-y-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis labore eveniet numquam. Ab sunt pariatur voluptatum voluptates, totam ducimus facilis voluptas fuga architecto atque odit distinctio dignissimos. Adipisci eveniet impedit, molestiae ipsum officia et mollitia consectetur voluptatem magnam debitis commodi totam neque tenetur consequatur corporis, exercitationem quaerat soluta iusto culpa cum quae sequi maiores. Maiores repellat quod adipisci natus laboriosam sit nobis quisquam sunt pariatur dicta blanditiis dolorem rerum eius, ea, alias temporibus sapiente saepe vero debitis nihil in odit consequuntur excepturi! Hic, commodi. Quasi, natus architecto aspernatur non facilis error fugit tempora. Placeat unde hic in aut labore nobis!</div>
			</div>
		</div>
	)
}


export default BaseModal;
