import { Suspense } from "react";
import { list } from "@vercel/blob";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <VideoComponent fileName="orange-ballon-jm0dd5PqBU9xQoDX9aB2YI4KwQCNHq.webm" />
    </Suspense>
  );
}

async function VideoComponent({ fileName }: { fileName: string }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <video controls preload="none" aria-label="Video player">
      <source src={url} type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
