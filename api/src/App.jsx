import React from 'react'
import './App.css'


function App() {
  const url = 'https://dummyjson.com/products';
    
  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
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
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App  
