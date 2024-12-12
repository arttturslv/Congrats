const API = import.meta.env.VITE_API;

export async function postCard(title, sender, receiver, dateMet, pictures) {

    const data = {
        title:title, 
        senderName: sender,
        receiverName: receiver,
        dateMet:dateMet, 
        pictures:pictures 
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
        return responseJSON.data.response;
    } catch (error) {
        console.error("Erro ao enviar create de cards:", error.message);
    }

}

export async function getCard(easyId) {
    try {
        const response = await fetch(`${API}/${easyId}`);

        if(!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`HTTP ${response.status} - ${response.statusText}: ${errorMessage}`);
        }

        let responseJSON = await response.json();
        return responseJSON.data.response;
    } catch (error) {
        console.error("Erro ao receber card:", error.message);
    }
}

export async function getCardQuantity() {
    try {
        const response = await fetch(`${API}/stats/count`);

        if(!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`HTTP ${response.status} - ${response.statusText}: ${errorMessage}`);
        }

        let responseJSON = await response.json();
        return responseJSON.data.quantity;
    } catch (error) {
        console.error("Erro ao buscar quantidade de cards criados:", error.message);
    }
}