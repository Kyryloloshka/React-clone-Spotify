import BaseButton from "./BaseButton";
import BaseModal from "./BaseModal";

function TheModalEmbedPlaylist({ onClose: handleClose }) {
	return (
		<BaseModal classes='w-[660px] bg-neutral-900' onClose={handleClose}>
			<h1 className="text-2xl pt-8 pb-3 px-8 font-bold leading-relaxed">Embed Playlist</h1>
			<div className="py-6 px-8 text-neutral-500 text-[13px]">Lorem ipsum dolor<a href="/" className="text-white font-bold hover:underline"> sit amet</a> consectetur adipisicing elit. <a href="/" className="text-white font-bold hover:underline">Reprehenderit</a> architecto doloribus accusamus id? Laborum, at!</div>
			<div className="text-right pb-6 px-8">
				<label>
					<input type="checkbox" />
					<span>Show code</span>
				</label>
				<BaseButton accent>Copy</BaseButton>
			</div>
		</BaseModal>
	)
}


export default TheModalEmbedPlaylist;
