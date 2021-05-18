import client from "@/config/shopify";
import { API_URL } from "@/config/api";
export default function Collection({ collection }) {
  return <div>{JSON.stringify(collection)}</div>;
}
// tell next how many pages there are
export async function getStaticPaths() {
  //get all collections using sdk
  const collections = await client.collection.fetchAll();
  //convert the respsonse data to json

  // map over the object and create a slug with the collection name
  const paths = collections.map((collection) => ({
    params: { slug: collection.handle },
  }));

  return {
    paths,
    fallback: false,
  };
}

// for each individual page: get the data for thet page
export async function getStaticProps({ params }) {
  const { slug } = params;

  const collection = await fetch(`${API_URL}/collections/${slug}`);

  // const collection = res[0];

  return {
    props: {
      collection: JSON.parse(JSON.stringify(collection)),
    },
  };
}
