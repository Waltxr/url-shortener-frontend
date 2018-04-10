const BASE_URL = 'http://localhost:3000/api/v1/'

export function getShortUrl(decoded_url) {
  let url = decoded_url.decoded_url
  if (url !== 'http://' || url != 'https://') {
    decoded_url.decoded_url = 'http://' + url
  }
  return dispatch => {
    fetch(BASE_URL + 'shortener', {
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

export function getTopUrls() {
  return dispatch => {
    fetch(BASE_URL + 'top-urls')
    .then( res => res.json() )
    .then( urls => {
      dispatch({type: 'FETCH_TOP_URLS', payload: urls })
    })
  }
}
