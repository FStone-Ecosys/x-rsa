import { createFileRoute } from "@tanstack/react-router";
import { Gate } from "@/components/gate";
import { Parlour } from "@/components/parlour";
import { useClub } from "@/lib/club-store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const entered = useClub((s) => s.entered);
  return entered ? <Parlour /> : <Gate />;
}
