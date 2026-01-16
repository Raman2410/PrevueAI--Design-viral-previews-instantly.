import { RectangleHorizontal, RectangleVertical, Square } from "lucide-react"
import { aspectRatios, type AspectRatio, } from "../assets/assets"


const AspectRatioSelector = ({value,onChange}:{value:AspectRatio,onChange:(ratio:AspectRatio)=>void}) => {
    const iconMap = {
    '16:9': <RectangleHorizontal className="size-6"/>,
    '1:1':<Square className="size-6"/>,
    '9:6': <RectangleVertical className="size-6 rotate-90"/>,

    } as Record<AspectRatio,React.ReactNode>
  return (
    <div className="space-y-3 dark">
        <label className="block text-sm font-medium text-zinc-200"> Aspect Ratio</label>
        <div className="flex flex-wrap gap-5">
            {aspectRatios.map((ratio)=>{
                const selected = value === ratio;
                return (
                    <button key={ratio} onClick={()=>onChange(ratio)} type="button" className={`flex flex-col items-center justify-center gap-2 px-5 py-2.5 rounded-lg border  ${selected ? 'border-pink-500 bg-pink-500/10':'border-white/10 hover:border-pink-500'}  cursor-pointer transition`}>
                        {iconMap[ratio]}
                        <span className="text-sm text-zinc-300 tracking-widest">{ratio}</span>
                    </button>
                )
            })}
        </div>
    </div>
  )
}

export default AspectRatioSelector