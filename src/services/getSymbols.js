const API_KEY = '65ffeee98c03175a8711eb809bb758c5'


export default function getSymbols(){
const url = `http://data.fixer.io/api/symbols?access_key=${API_KEY}`

    return fetch(url)
        .then(resp =>resp.json())
        .then( data => {
            const {symbols} = data
            if(symbols){
                console.log(symbols);
                const code = Object.keys(symbols)
                return code
            }
        })
}