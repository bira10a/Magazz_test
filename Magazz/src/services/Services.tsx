export class Services {
    async getResource(url: string) {
        const res = await fetch(url);
        return await res.json();
    }
    
    // https://fakeapi.platzi.com/en/rest/products/

    getAllProducts() {
        return this.getResource('https://fakeapi.platzi.com/en/rest/products')
    }


}
