import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import client from "@/config/shopify";
import styles from "@/styles/pages/Collections.module.scss";
const CollectionsPage = ({ collections }) => {
  console.log(collections);
  return (
    <Layout>
      <PageHero title="Collections" subtitle="browse our collections" />
      <div className={styles.collections__container}>
        {collections.map((collection) => {
          return (
            <>
              <Link href={`/collections/${collection.handle}`}>
                <a>{collection.handle}</a>
              </Link>
            </>
          );
        })}
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const collections = await client.collection.fetchAll();

  return {
    props: {
      collections: JSON.parse(JSON.stringify(collections)),
    },
  };
};

export default CollectionsPage;
