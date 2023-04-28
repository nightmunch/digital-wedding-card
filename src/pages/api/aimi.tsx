import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

// eslint-disable-next-line import/no-anonymous-default-export, @typescript-eslint/require-await
export default async function () {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
        tw="bg-gray-50"
      >
        <div tw="flex">
          <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8 justify-center">
            <h2 tw="flex flex-col font-bold tracking-tight text-gray-900 text-center justify-center items-center">
              <span tw="text-2xl sm:text-3xl">Anda Dijemput Hadir</span>
              <span tw="text-3xl sm:text-4xl text-[#5f7534]">
                Aimi 💚 Shahrin | Danial 💚 Amalin
              </span>
              <span tw="text-xl sm:text-2xl text-gray-600">17 Jun 2023</span>
            </h2>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
