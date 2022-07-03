const { default: Host } = require("../host")

module.exports = {
    async listarCabelereiros(token, setCabelereiros) {
        
        let config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: JSON.stringify(token)
            }
        }
        const response = await fetch(Host.baseUrl + "/lista-cabelereiros", config)
        console.log(response);
        if (response.status == 200) {
            const data = await response.json();
            console.log(data);
            setCabelereiros(data);
            return {
                retorno: true
            };
        } else if (response.status == 401) {
            const data = await response.json();
            console.log(data);
            return {
                retorno: false,
                status: response.status
            };
        } else if (response.status == 404) {
            return {
                retorno: false,
                status: response.status
            };
        }
    },

    async listarHorario(token, id, setHorariosDisponiveis, data){
        let config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: token,
                
            }
        }
        const response = await fetch(Host.baseUrl + "/lista-horarios?id="+id+"&data="+data, config)
        if (response.status == 200) {
            const data = await response.json();

            setHorariosDisponiveis(data);
            console.log(data[0]);

            return {
                retorno: true
            };
        } else if (response.status == 401) {

            return {
                retorno: false,
                status: response.status
            };
        } else if (response.status == 404) {

            return {
                retorno: false,
                status: response.status
            };
        }
    }
}