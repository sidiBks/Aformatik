import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { modules_s5_old as modules } from "@/utils/helper"
import { Link } from "react-router-dom"


function FifthSemOld() {
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
      ))
      }

      {/* <AccordionItem value="bases-de-donnees">
        <AccordionTrigger className="text-md">Base de données</AccordionTrigger>
        <AccordionContent className="text-neutral-600">

          <Accordion type="single" collapsible className="w-full">

            <AccordionItem value="cours">
              <AccordionTrigger className="text-sm">Cours (9)</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-1">
                  <div className="hover:underline">cours - partie 1</div>
                  <div className="hover:underline">cours - partie 2</div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="td">
              <AccordionTrigger className="text-sm">TD</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-1">
                  <div className="hover:underline">td - partie 1</div>
                  <div className="hover:underline">td - partie 2</div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

        </AccordionContent>
      </AccordionItem> */}

    </Accordion>
  )
}

export default FifthSemOld
