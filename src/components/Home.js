import { products } from "../data";
import Product from "./Product"
function Home(){

    return(
        <div className="grid  xs:gridcols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]"> {products.map((product)=>{
            return <Product key={product.id} post={product} />
           })}
           </div>
      
    )
}
export default Home;