import BaseModal from "./BaseModal";

function TheModalRecommendations({ onClose: handleClose }) {
	return (
		<BaseModal classes={'bg-[#333] h-80 w-[480px]'} onClose={handleClose}>
			<h1 className="text-2xl pt-8 pb-3 px-8 font-bold leading-relaxed border-b border-neutral-600">About recommendations</h1>
			<div className="py-6 px-8 overflow-y-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis labore eveniet numquam. Ab sunt pariatur voluptatum voluptates, totam ducimus facilis voluptas fuga architecto atque odit distinctio dignissimos. Adipisci eveniet impedit, molestiae ipsum officia et mollitia consectetur voluptatem magnam debitis commodi totam neque tenetur consequatur corporis, exercitationem quaerat soluta iusto culpa cum quae sequi maiores. Maiores repellat quod adipisci natus laboriosam sit nobis quisquam sunt pariatur dicta blanditiis dolorem rerum eius, ea, alias temporibus sapiente saepe vero debitis nihil in odit consequuntur excepturi! Hic, commodi. Quasi, natus architecto aspernatur non facilis error fugit tempora. Placeat unde hic in aut labore nobis!</div>
		</BaseModal>
	)
}


export default TheModalRecommendations;
