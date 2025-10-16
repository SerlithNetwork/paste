export const bytebinUrl =
  import.meta.env.VITE_BYTEBIN_URL || 'https://bytebin.serlith.net/';
export const postUrl = bytebinUrl + 'post';
export const useQueryRouting = 
  import.meta.env.VITE_USE_QUERY_ROUTING === 'true';
