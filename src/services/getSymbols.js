const API_KEY = '804bf3b4957c0f612ada2c0ca2b91577'


export default function getSymbols(){
const url = `http://data.fixer.io/api/symbols?access_key=${API_KEY}`

    return fetch(url)
        .then(resp =>resp.json())
        .then( data => {
            const {success,symbols} = data
            if(success){
                return symbols
            }
        })
}