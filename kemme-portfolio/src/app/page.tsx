import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10">
      <h2>Portfolio von Kemme</h2>
      <Button>Klick mich</Button>
      <SpinnerCustom />
    </div>
  );
}

export function SpinnerCustom() {
  return (
    <div className="flex items-center gap-4">
      <Spinner className='size-120 animate-spin' />
    </div>
  )
}
