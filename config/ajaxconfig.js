export const getRequest = Object.freeze({
  "async": true,
  "crossDomain": true,
  "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "61d254f5ccd0211b32089499",
    "cache-control": "no-cache"
  }
})

export const postRequest = (data={ }) => { 
  return {
    "async": true,
    "crossDomain": true,
    "url": "https://newdatabase1-1d27.restdb.io/rest/logininformation",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "61d254f5ccd0211b32089499",
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(data)
  }; 
};

export const DeleteRequest = (key) => {
  return { 
      "async": true,
      "crossDomain": true,
      "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${key}`,
      "method": "DELETE",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "61d254f5ccd0211b32089499",
        "cache-control": "no-cache"
      },
      "processData": false
  }; 
} 

export const PutRequestConfig = (key, data={ }) => {
  return { 
    "async": true,
    "crossDomain": true,
    "url": `https://newdatabase1-1d27.restdb.io/rest/logininformation/${key}`,  //Take in the key from the function parameters
    "method": "PUT",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "61d254f5ccd0211b32089499",
      "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(data)  //Take in data from the second parameter 
  }; 
} 

export const GetRequestIPAddress = Object.freeze({
    "async": true, 
    "crossDomain": true, 
    "url": "https://api.ipify.org/?format=json", 
    "method": "GET", 
    "headers": {
      "content-type": "application/json", 
      "cache-control": "no-cache" 
    }, 
    "processData": false, 
}) 