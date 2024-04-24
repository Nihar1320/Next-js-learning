// Here the pattern goes like - Docs --> Features --> Examples
import { notFound } from "next/navigation";

const Docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug.length > 2) {
    return notFound();
  }

  if (params.slug?.length === 1) {
    return <h2>This has features of docs with feature id {params.slug[0]}</h2>;
  } else if (params.slug?.length === 2) {
    return <h2>This has features of docs and also the examples with exmaple id {params.slug[1]} and with feature id {params.slug[0]}</h2>;
  }
  return <h2>This is only for docs page</h2>;
};

export default Docs;
