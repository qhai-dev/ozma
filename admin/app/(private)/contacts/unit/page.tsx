import { ScrollArea } from "@/components/ui/scroll-area"
export default function Page() {
  return (
    <div className="flex flex-col gap-y-3 py-2">
      {
        new Array(100).fill(1).map((item,index) => {
          return (
              <div className="w-ful h-11  bg-green-500" key={index}>单位管理 页面 {item}</div>
          )
        })
      }
    </div>
  )
}