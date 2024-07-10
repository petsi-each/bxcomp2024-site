import Image, { ImageProps } from 'next/image';

interface GImageProps extends ImageProps {
    src: string;
}

const ImageG: React.FC<GImageProps> = ({ src, ...props }) => {
    const pathway =   process.env.NODE_ENV === "production" ? '/bxcomp2024-site' : ''; 
    return (
        <Image
            src={pathway+src}
            {...props}
        />
    );
};

export default ImageG;