
const { default: Host } = require("../host");

module.exports = {
    async login(email, senha) {
        let data = {
            email: email,
            senha: senha,
        }

        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        const response = await fetch(Host.baseUrl+"/login-cliente", config)

        if (response.status == 200) {
            const data = await response.json()
            return {
                data: data,
                retorno: true
            };

        }else if(response.status == 401){
            return {
                retorno: false
            };
        }

        /*
        fetch('http://localhost:8000/login-cliente', config)
        .then((json)=>{
            return json.json();
        })
        .then((data)=>{
            console.log(data);
        })
        .catch((e)=>{
            console.log(e);
        })
        */


    },
    
    async cadastro(nome, email, senha){
     
            let data = {
                nome: nome,
                email: email,
                senha: senha,
            }
    
            let config = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            const response = await fetch(Host.baseUrl+"/cadastro-cliente", config)
    
            if (response.status == 201) {
                return {
                    retorno: true,
                    status: 201
                };
    
            }else if(response.status == 401){
            const json = await response.json();

                return {
                    retorno: false,
                    status: 401,
                    msg : json.message
                };
            }
    
            /*
            fetch('http://localhost:8000/login-cliente', config)
            .then((json)=>{
                return json.json();
            })
            .then((data)=>{
                console.log(data);
            })
            .catch((e)=>{
                console.log(e);
            })
            */
    
    
    }
}