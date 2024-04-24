const ReviewsIdPage = ({ params }: { params: { reviewId: string, productId: string } }) => {
    return <h2>This is review page for review id {params.reviewId} with product id as {params.productId}</h2>
};

export default ReviewsIdPage;