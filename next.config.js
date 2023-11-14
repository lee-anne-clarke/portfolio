/** @type {import('next').NextConfig} */
const nextConfig = {
	// Deploy the app as a static export
	output: 'export', 

	// Because this React app is being deployed as a static export, this property is required in order to use <Image /> 
	images: { unoptimized: true } 
}

module.exports = nextConfig
