/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const image = fetch(
  new URL("../../../public/aimi-metadata.png", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler() {
  const imageData = (await image) as unknown as string;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width="600" height="600" src={imageData} />
      </div>
    ),
    {
      width: 600,
      height: 600,
    }
  );
}
