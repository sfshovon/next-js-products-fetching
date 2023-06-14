import Image from 'next/image';

const Product = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <Image src={product?.productImage} width={150} height={150} alt="Product"/>
      </figure>
      <div className="card-body">
        <div className="group">
          <h2 className="card-title truncate text-lg text-dark shadow-sm">{product.name}</h2>
          <span className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{product.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;