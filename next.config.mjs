/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['utfs.io'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'utfs.io',
          port: ''
        }
      ]
    }
  };
  
  // Use a sintaxe ES Modules para exportar a configuração
  export default nextConfig;
  