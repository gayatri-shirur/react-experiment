import React, { useEffect} from 'react'
import './App.css'


function App() {
  const url = 'https://dummyjson.com/products';
    
  const [products, setProducts] = React.useState([])

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch(
        (error) => {
          console.error('Error fetching data:', error);
        })
  }, [])

  return (
    <div className="App">
      <h1>Product Titles</h1>
      <button onClick={() => window.location.reload()}>Reload Products</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App  
