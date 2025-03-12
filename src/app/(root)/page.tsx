import MotionDivWrapper from "@/components/MotionWrapper";
import Introduction from "@/components/Introduction";

export default async function Page() {
  return (
    <MotionDivWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <section className="w-full mb-20 lg:w-2/3 min-h-[calc(100svh-500px)] flex items-center gap-20">
        <Introduction />
      </section>
    </MotionDivWrapper>
  );
}
