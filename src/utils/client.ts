class Client {
    url = import.meta.env.VITE_BACKEND_BASE_URL || 'any-default-local-build'
    headers = {
        'Content-Type': 'application/json',
        Authorization: ''
    }

    SetApiKey(key: string) {
        this.headers['Authorization'] = `ApiKey ${key}`
    }

    async get(endpoint: string) {
        console.log('SENDING REQUEST TO : ', this.url + endpoint)
        try {
            const response = await fetch(this.url + endpoint, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            })

            const result = await response.json()
            if (response.status >= 400) {
                console.log('Error:', result.error)
                return { error: result.error }
            }

            console.log('Success:', result)
            return { body: result }
        } catch (error) {
            console.log(error)
            let message = `Service is unavailable: ${error}`
            return { error: message }
        }
    }

    async post(endpoint: string, data: any) {
        console.log('SENDING REQUEST TO : ', this.url + endpoint)

        try {
            const response = await fetch(this.url + endpoint, {
                method: 'POST',
                headers: this.headers,
                credentials: 'include',
                body: JSON.stringify(data)
            })

            const result = await response.json()
            if (response.status >= 400) {
                console.log('Error:', result.error)
                return { error: result.error }
            }

            console.log('Success:', result)
            return { body: result }
        } catch (error) {
            console.log(error)
            let message = `Service is unavailable: ${error}`
            return { error: message }
        }
    }
}

const client = new Client()
export default client
