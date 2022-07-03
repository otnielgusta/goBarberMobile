const { default: Host } = require("../host")

module.exports = {
   async marcarConsulta(token, horario_cabelereiro, cabelereiro_id, date){
        const data = {
            "data": date,
            "horario_cabelereiro": horario_cabelereiro,
            "cabelereiro_id": cabelereiro_id
        }
        console.log(data);

        let config = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                authorization: token,
                
            }
        }
        const response = await fetch(Host.baseUrl + "/agendar-horario", config)
        return response.status;
        
    }
}