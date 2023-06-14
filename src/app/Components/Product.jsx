import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';

const Product = ({ product }) => {
  const totalPrice = parseInt(product?.variations[0]?.price?.mrp);
  const discountedPrice = parseInt(product?.variations[0]?.price?.discountedPrice);
  const discountPercentage = parseInt(( (totalPrice - discountedPrice) / totalPrice) * 100);
  const showRatings = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="inline-block text-yellow-500">
          <AiFillStar />
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="card h-96">
      <figure>
       <Image className="w-full" src={product?.productImage} width={200} height={300} alt="Product" />
      </figure>
      { 
        discountPercentage > 0 &&
          <h3 className="bg-green-600 text-white py-1 px-4 absolute top-2 left-2 text-sm">
            -{discountPercentage}%
          </h3>
      }
      <div className="card-body">
        <div className="group">
          <h2 className="text-center text-lg text-zinc-500 font-semibold truncate shadow-sm">{product?.name}</h2>
          <h3 className="absolute top-40 scale-0 rounded bg-cyan-800 p-2 text-sm text-white group-hover:scale-100">
            {product?.name}
          </h3>
        </div>
        { 
          discountPercentage > 0 &&
            <div className="flex justify-center items-center gap-2">
              <h3 className="text-sm text-dark">MRP <span className="font-semibold line-through">{totalPrice}</span></h3>
              { 
                discountPercentage > 0 &&
                <h3 className="text-sm text-slate-500 font-semibold">-{discountPercentage}%</h3>
              }
            </div>
        } 
        <h3 className="text-lg text-dark text-center font-bold">BDT {discountedPrice}</h3>
        <h3 className="text-sm text-center">{showRatings(parseInt(product?.rating))}</h3>
      </div>
    </div>
  );
};

export default Product;