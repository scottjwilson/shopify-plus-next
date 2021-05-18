import styles from "@/styles/components/ProductList.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const ProductList = ({ products }) => {
  return (
    <>
      <div className={styles.productList__title}>
        <h1>featured products</h1>
      </div>
      <div className={styles.productList}>
        {products.map((product) => (
          <Link href="/about">
            <motion.article
              className={styles.product}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <div className={styles.product__content}>
                <h3>{product.title}</h3>
                <div className="product__image">
                  <Image src={product.images[0].src} width={200} height={200} />
                </div>
                <h5>
                  <span> starting at </span>${product.variants[0].price}
                </h5>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;
