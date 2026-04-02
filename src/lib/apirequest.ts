export async function apiFetch(url:string){
const apiurl = url;
try {
const response = await fetch(apiurl);
if (!response.ok) {
throw new Error(`Response status: ${response.status}`);
}
const json = await response.json();
return json;
} catch (err) {
    if(err instanceof Error)
console.error(err.message);
}
}

