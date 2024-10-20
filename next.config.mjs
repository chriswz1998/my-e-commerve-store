// next.config.mjs
export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '', // 默认情况下可以留空
        pathname: '/drrxd8q4g/**' // 可以精确匹配路径
      }
    ]
  }
}
