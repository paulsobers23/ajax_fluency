const url1 = "https://reqres.in/api/users"

function getLog(url){
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () =>{ 
    if(xhr.readyState  === 4 && xhr.status === 200){
      console.log(JSON.parse(xhr.responseText).data.slice(0,5));
    } 
  };
  xhr.open('GET',url);
  xhr.send();
}
getLog(url1);

function gett(url,callback){
  const xhr = new XMLHttpRequest();
  let users= xhr.onreadystatechange = () =>{ 
    if(xhr.readyState  === 4 && xhr.status === 200){
      callback(JSON.parse(xhr.responseText).data.slice(0,5));
    } 
  };
  xhr.open('GET',url);
  xhr.send();
}
gett(url1,console.log);


