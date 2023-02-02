import PlaylistContextMenuItem from "./PlaylistContextMenuItem";
import PlaylistContextMenuItemWithSubmenu from "./PlaylistContextMenuItemWithSubmenu";
import { useRef, forwardRef } from "react";


function PlaylistContextMenu({ classes, menuItems }, ref) {

	let closePreviousSubmenu = useRef(null);

	function closePreviousSubmenuIfOpen(closeSubmenu = null) {
		if (closePreviousSubmenu.current) closePreviousSubmenu.current();

		closePreviousSubmenu.current = closeSubmenu;
	}

	return (
		<ul className={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-3xl cursor-default whitespace-nowrap z-10 ${classes}`} ref={ref}>
			{menuItems.map(({ label, action, submenuItems, classes: menuItemClasses }) => {
				if (submenuItems) {
					return (
						<PlaylistContextMenuItemWithSubmenu onMouseEnter={closePreviousSubmenuIfOpen} key={label} submenuItems={submenuItems}>
							{label}
						</PlaylistContextMenuItemWithSubmenu>
					)
				}
				return (
					<PlaylistContextMenuItem
						key={label}
						classes={menuItemClasses}
						onMouseEnter={closePreviousSubmenuIfOpen}
						onClick={action}
					>
						{label}
					</PlaylistContextMenuItem>
				)
			})}
		</ul>
	);
}


export default forwardRef(PlaylistContextMenu);
