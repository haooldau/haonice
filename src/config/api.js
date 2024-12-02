// API基础URL配置
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api'  // 在生产环境中使用相对路径
  : 'http://localhost:3000/api'; // 在开发环境中使用本地地址

export default API_BASE_URL; 