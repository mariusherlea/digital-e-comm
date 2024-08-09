import Image from "next/image";

function ProjectBanner({ product }) {
  const bannerUrl = product?.attributes?.banner?.data?.attributes?.url;
  const baseUrl = "http://localhost:1337";

  const imageUrl = bannerUrl ? `${baseUrl}${bannerUrl}` : null;

  return (
    <div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="banner"
          width={350}
          height={400}
          className="rounded-lg object-cover"
        />
      ) : (
        <p>No banner available</p>
      )}
    </div>
  );
}

export default ProjectBanner;
