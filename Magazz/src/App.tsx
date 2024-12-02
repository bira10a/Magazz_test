import { Services } from "./services/Services"

const App = () => {

  const products = new Services();
  products.getAllProducts()
          .then(res => console.log(res))

  return (
    <>
 
      asd
    </>
  )
}

export default App
