export function getShortUrl(decoded_url) {
  return dispatch => {
    fetch('http://localhost:3000/api/v1/shortener', {
    	method: 'POST',
    	headers: {
    	 'Content-Type': 'application/json',
    	 'Accept': 'application/json'
        },
    	body: JSON.stringify({
    		decoded_url
    	})
    })
    .then( res => res.json() )
    .then( shortUrl => {
      dispatch({ type: 'SHORTEN_URL', payload: shortUrl.slug})
    })
  }
}

// export function topUrls() {
//   return dispatch => {
//     fetch('http://localhost:3000/api/v1/top-urls')
//     .then( res => json() )
//     .then( urls => {
//       dispatch({type: 'FETCH_TOP_URLS', payload: urls })
//     })
// }
