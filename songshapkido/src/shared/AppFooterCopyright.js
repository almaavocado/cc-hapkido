import React from 'react';

function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/almaavocado"
					target="__blank"
					className="text-secondary-dark text-sm dark:text-secondary-light font-medium uppercase hover:underline hover:text-green-800 ml-1 duration-500"
				>
					Song's Hapkido West LA, Created By Alma Alvarado
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
