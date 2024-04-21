class Client {
    url = import.meta.env.VITE_BACKEND_BASE_URL || 'any-default-local-build'
    headers = {
        'Content-Type': 'application/json',
        'Authorization': '',
    }
    
    SetApiKey(key :string){
        this.headers['Authorization'] = `ApiKey ${key}`;
    }
    
    async get(endpoint: string) {
        try {
            const response = await fetch(this.url + endpoint, {
                method: 'GET', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const result = await response.json()
            if (response.status > 400) {
                console.log('Error:', result.error)
                return { error: result.error }
            }

            console.log('Success:', result)
            return { body: result }
        } catch (error) {
            console.log(error);

            return { error: 'Service is unavailable' }
        }
    }

    async post(endpoint: string, data: any) {
        console.log("SENDING REQUEST TO : ", this.url + endpoint);
        
        try {
            const response = await fetch(this.url + endpoint, {
                method: 'POST', // or 'PUT'
                headers: this.headers,
                credentials: "include",
                body: JSON.stringify(data)
            })

            const result = await response.json()
            if (response.status > 400 ) {
                console.log('Error:', result.error)
                return { error: result.error }
            } 
            
            console.log('Success:', result)
            return { body: result }
        } catch (error) {
            console.log(error);
            
            return { error: 'Service is unavailable' }
        }
    }
}

const client = new Client()
export default client
