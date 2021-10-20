import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingCard = (props) => (
    <ContentLoader
        speed={2}
        width={420}
        height={600}
        viewBox="0 0 420 600"
        backgroundColor="#e4e2e2"
        foregroundColor="#d1d1d1"
        {...props}
    >
        <rect x="185" y="470" rx="0" ry="0" width="50" height="2" />
        <rect x="160" y="480" rx="0" ry="0" width="100" height="15" />
        <rect x="110" y="440" rx="0" ry="0" width="200" height="15" />
        <rect x="5" y="0" rx="0" ry="0" width="410" height="420" />
        <rect x="5" y="530" rx="0" ry="0" width="410" height="30" />
    </ContentLoader>
)

export default LoadingCard;