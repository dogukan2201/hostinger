"use client";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

export default function Faq() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 grid gap-4 md:gap-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            SSK
          </h2>
          <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            Bir sorunuz mu var? Cevaplarımız da var. Başka sorularınız varsa
            lütfen desteğe e-posta gönderin.
          </p>
        </div>
        <div className="space-y-4">
          <Collapsible className="grid">
            <CollapsibleTrigger asChild>
              <Button
                variant="primary"
                className="w-full justify-start text-left font-semibold"
              >
                Can I upgrade my plan later
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent asChild>
              <p className="text-sm leading-loose text-gray-500 md:text-base dark:text-gray-400">
                Yes. You can start or stop your plan at any time.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="grid">
            <CollapsibleTrigger asChild>
              <Button
                variant="unstyled"
                className="w-full justify-start text-left font-semibold"
              >
                Can I switch plans?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent asChild>
              <p className="text-sm leading-loose text-gray-500 md:text-base dark:text-gray-400">
                Yes. You can start or stop your plan at any time.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="grid">
            <CollapsibleTrigger asChild>
              <Button
                variant="unstyled"
                className="w-full justify-start text-left font-semibold"
              >
                Do you offer a discount for non-profit
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent asChild>
              <p className="text-sm leading-loose text-gray-500 md:text-base dark:text-gray-400">
                Yes. You can start or stop your plan at any time.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="grid">
            <CollapsibleTrigger asChild>
              <Button
                variant="unstyled"
                className="w-full justify-start text-left font-semibold"
              >
                How secure is your service?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent asChild>
              <p className="text-sm leading-loose text-gray-500 md:text-base dark:text-gray-400">
                Yes. You can start or stop your plan at any time.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="grid">
            <CollapsibleTrigger asChild>
              <Button
                variant="unstyled"
                className="w-full justify-start text-left font-semibold"
              >
                Can I cancel at any time?
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent asChild>
              <p className="text-sm leading-loose text-gray-500 md:text-base dark:text-gray-400">
                Yes. You can start or stop your plan at any time.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
}
