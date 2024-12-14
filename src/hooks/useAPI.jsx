import { body } from "motion/react-client";

const API = import.meta.env.VITE_API;

export async function postCard(title, sender, receiver, dateMet, pictures, isLocked) {

    const data = {
        title:title, 
        senderName: sender,
        receiverName: receiver,
        dateMet:dateMet, 
        pictures:pictures,
        passKey:isLocked
    }
    try {
        const response = await fetch(`${API}/create`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`HTTP ${response.status} - ${response.statusText}: ${errorMessage}`);
        }

        let responseJSON = await response.json();
        return responseJSON.data;
    } catch (error) {
        console.error("Erro ao enviar create de cards:", error.message);
        throw new Error(error);
    }

}

export async function getCard(easyId, passKey) {
    try {
        const response = await fetch(`${API}/${easyId}/${passKey}`);

        if(!response.ok) {
            const errorMessage = await response.text();
            console.log(errorMessage)

            throw new Error(`HTTP ${response.status} - ${response.statusText}`);
        }

        let responseJSON = await response.json();
        let {status, data} = responseJSON;

        console.log(responseJSON)

        if(status=="pending") {
            let res = data.about;
            return {status, res};
        } else if(status=="success") {
            let res = data.response[0];
            return {status, res};
        }
        
    } catch (error) {
        throw new Error(error);
    }
}

export async function getCardQuantity() {
    try {
        const response = await fetch(`${API}/stats`);

        if(!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`HTTP ${response.status} - ${response.statusText}: ${errorMessage}`);
        }

        let responseJSON = await response.json();
        return responseJSON.data.quantity;
    } catch (error) {
        console.error("Erro ao buscar quantidade de cards criados:", error.message);
        throw new Error(error);
    }
}