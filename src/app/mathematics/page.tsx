import Image from "next/image";

export default function CertificatesPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title text-4xl">certificates.</h1>

      <div className="flex flex-col gap-12">
        {/* UCC Cert 1 - Tutor Work Experience */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg border bg-card">
            <Image
              src="/ucccert.png"
              alt="UCC Tutor Certificate"
              width={800}
              height={600}
              className="h-auto w-full"
              priority
            />
          </div>
          <p className="text-center text-lg font-medium text-muted-foreground">
            Tutor Work Experience
          </p>
        </div>

        {/* UCC Cert 2 - Honourable Mention */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg border bg-card">
            <Image
              src="/ucccert2.png"
              alt="UCC Certificate - Honourable Mention"
              width={800}
              height={600}
              className="h-auto w-full"
            />
          </div>
          <p className="text-center text-lg font-medium text-muted-foreground">
            Honourable Mention
          </p>
        </div>
      </div>
    </article>
  );
}
