import axios from 'axios';

export const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL || '/api' });

export function imageUrl(path) {
  if (!path) return null;
  if (/^https?:\/\//i.test(path)) return path;
  return `${import.meta.env.VITE_STORAGE_BASE_URL || '/storage'}/${path.replace(/^\//, '')}`;
}
