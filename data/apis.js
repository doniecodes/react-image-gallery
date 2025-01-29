
export async function getImages (url) {

        const res = await fetch(url);
        console.log(res)
      if(!res.ok){
        throw {
          message : "Could not find images, try refreshing",
          statusText: res.statusText,
          status: res.status,
        }
      }
      const data = await res.json();
      return data.hits
}