import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  modules_s6_old as modules
} from "@/utils/helper"

import { Link } from "react-router-dom"

function SixthSemOld() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {modules.map((item) => (
        <AccordionItem value={item.itemValue}>
          <AccordionTrigger className="text-md">{item.title}</AccordionTrigger>
          <AccordionContent className="text-neutral-600">
            <Accordion type="single" collapsible className="w-full">
              {item.items.map((subItem) => (
                <AccordionItem value={subItem.title}>
                  <AccordionTrigger className="text-sm">{subItem.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {Object.entries(subItem.links).map(([key, value]) => (
                        <div className="flex justify-between items-center">
                          <div
                            className="flex items-center text-xs md:text-sm lg:text-md"
                          >
                            {key}
                          </div>
                          <Link
                            to={value}
                            target="_blank"
                            className="flex items-center hover:underline"
                          >
                            preview
                          </Link>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>))}
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default SixthSemOld
