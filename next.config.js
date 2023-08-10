/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: { unoptimized: true } // Because this React app is being deployed as a static export (see line 3), this property is required in order to use <Image /> 
}

module.exports = nextConfig
