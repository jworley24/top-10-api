const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage' : {
        'birthName' : 'Sheyaa Bin Abraham-Joseph',
        'age' : 29,
        'birthLocation' : 'London, England'
    },
    'Chance the Rapper' : {
        'birthName' : 'Chancelor Bennett',
        'age' : 29,
        'birthLocation' : 'Chicago, Illinois'
    },
    'unknown' : {
        'birthName' : 'unknown',
        'age' : 0,
        'birthLocation' : 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname +  '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const rapperName = req.params.name.toLowerCase()
    
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on ${PORT}! Betta go catch it!`)
})