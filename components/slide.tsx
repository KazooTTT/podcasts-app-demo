import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div>
      <Slider
        defaultValue={[1.0]}
        max={3.0}
        min={0.5}
        step={0.1}
        className={cn("w-[100%]", className)}
        {...props}
      />
      <div className="mt-2 flex w-full justify-between text-muted-foreground">
        {[0.5, 1.0, 1.5, 2.0, 2.5, 3.0].map((rate) => (
          <div key={rate} className="text-sm">
            {rate.toFixed(1)}
          </div>
        ))}
      </div>
    </div>
  )
}
