import { Metadata } from "next";

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product ${params.productId}`,
        description: `This is the description of product ${params.productId}`
    }
}

const ProductDetails = ({ params }: Props) => {
    return <h2>Product details of product with id {params.productId}</h2>
};

export default ProductDetails;