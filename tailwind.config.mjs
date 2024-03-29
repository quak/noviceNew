/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx}'],
	theme: {
		fontFamily: {
			sans: ['bebasNeuePro', 'sans-serif'],
			serif: ['Lora', 'serif'],
			titillium: ['Titillium', 'sans-serif'],
		},
		letterSpacing: {
			widedate: '6px',
			widels: '2px',
			widerls: '4px'
		},
		extend: {
			aspectRatio: {
				'189': '18 / 9',
			},
			margin: {
				'18': '4.5rem',
			},
			colors: {
				'sneg-white': '#ffffff',
				'sele-ivory': '#f2ece8',
				'klopinj-blue': '#007a91',
				'papez-purple': '#72103c',
				'karavansko-grey': '#566d77',
				'gmajnsko-brown': '#bc842b',
				'partizan-red': '#f71e25',
				
				'vrbsko-blue':'#bccad5',
				'iskanje-grey':'#d9d9d9',
				'iskanje-tags-grey':'#f2f2f2',	
				'iskanje-pes':'#F2ECE9',
				'iskanje-dark-pes':'#9C8585',
				'jepa-grey': '#A99292',
				'kosuta-grey': '#F5F5EE',
				

				'undef-grey': '#989b9c', /**/

				'undef-khaki': '#7a6e41', /*osebe-dogodkti tekst*/
				'undef-lightgrey': '#c9cacc', /*osebe-dogodkti */
				'undef-lightgrey2': '#939598', /*sekcija mnenja*/ 
				'tag-grey':'#D7D9C8' /*bg za tags...*/ 
				
				},
			maxWidth: {
			    'nov-width': '1140px',
			},
			scale: {
				'101': '1.01',
				'103': '1.03',
			},
			transitionDuration: {
				'4000': '4000ms',
			}
		
		},
	},
	plugins: [
		
	],
}
