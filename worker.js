export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('路径')) {
      url.hostname = 'hmseok2soergh.herokuapp.com'
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
