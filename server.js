const express = require('express')
const app = express()
const PORT = 8000

const members = {
    'trey':{
        'birthName': 'Trey Anastasio',
        'age': 58,
        'instrumet': 'Guitar',
        'birthPlace': 'Fort Worth, TX'
    },
    'mike':{
        'birthName': 'Mike Gordon',
        'age': 57,
        'instrumet': 'Bass',
        'birthPlace': 'Sudbury, MA'
    },
    'fish':{
        'birthName': 'John Fishman',
        'age': 57,
        'instrument': 'Drums',
        'birthplace' : 'Philadelphia, PA'
    },
    'page': {
        'birthName': 'Page McConnell', 
        'age': '59',
        'instrument' : 'Keys',
        'birthplace': 'Philadelphia, PA'
    }, 
    'unknown':{
        'birthName': 'unknown',
        'age': 0,
        'instrument': 'unknown',
        'birthplace': 'unknown'
    }

}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html') 
}) 

app.get('/api/:name',(request, response)=>{
    const memberName = request.params.name.toLowerCase()
    if(members[memberName]){
        response.json(members[memberName])
    }else{
        response.json(members['unknown'])
    }
   
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}.`)
})