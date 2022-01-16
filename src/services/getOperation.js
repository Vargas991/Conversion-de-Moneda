
export default function getOperation({from , to}={from:"USD",to:"COP"}){
    const url = `http://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=ca53259349100413ab8b`

        return fetch(url)
            .then(resp =>resp.json())
            .then( data => {
                const [rate] = Object.values(data)
                return rate
            })
    }