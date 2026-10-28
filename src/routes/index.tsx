import { createFileRoute } from "@tanstack/react-router";
import { KioskApp } from "@/components/kiosk/kiosk-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <KioskApp />;
}
