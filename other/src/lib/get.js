export function ajax(url, method = 'GET', body = {}) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (4 == xhr.readyState) {
        if (200 == xhr.status || 201 == xhr.status) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(xhr);
        }
      }
    }
    xhr.send(
      Object.entries(body).length > 0 ? JSON.stringify(body) : null
    );
  });
}

export function get(url) {
  return ajax(url);
}
