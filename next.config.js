/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ceezer-public-assets.s3.eu-central-1.amazonaws.com',
                port: '',
                pathname: 'project_type_sample_images'
            }
        ],
        domains: ['ceezer-public-assets.s3.eu-central-1.amazonaws.com'],
    }
}

module.exports = nextConfig
