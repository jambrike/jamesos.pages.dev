import Image from "next/image";

export default function CertificatesPage() {
  return (
    <article className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="title text-4xl">certificates.</h1>

      <div className="flex flex-col gap-12">
        {/* 2026 Irish Mathematical Olympiad */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg border bg-card">
            <Image
              src="/irmo-honourable-mention-2026.png"
              alt="2026 Irish Mathematical Olympiad Honourable Mention listing James O'Sullivan"
              width={1326}
              height={468}
              className="h-auto w-full"
              priority
            />
          </div>
          <p className="text-center text-lg font-medium text-muted-foreground">
            Irish Mathematical Olympiad (IrMO) — Honourable Mention, 2026
          </p>
        </div>

        {/* UCC Cert 1 - Tutor Work Experience */}
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg border bg-card">
            <Image
              src="/ucccert.png"
              alt="UCC Tutor Certificate"
              width={800}
              height={600}
              className="h-auto w-full"
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
