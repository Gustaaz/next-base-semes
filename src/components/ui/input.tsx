import * as React from "react"

import { cn } from "@/lib/utils"
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  formatter?: (value: string, name: string) => string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, formatter, onChange,type, ...props }, ref) => {
    function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
      const target = event.target
      const { value, name } = target
      if (target == null) {
        console.error('Error: onInputChange target is null')
        return
      }

      let formattedValue = value
      if (formatter != null) {
        try {
          formattedValue = formatter(value, name)
        } catch (error) {
          console.error('Error: onInputChange formatter threw an error', error)
        }
      }

      try {
        target.value = formattedValue
      } catch (error) {
        console.error('Error: onInputChange failed to set value', error)
      }

      if (onChange != null) {
        onChange(event)
      }
    }

    return (
      <input
        type={type}
        autoComplete={props.autoComplete ?? "off"}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        onChange={onInputChange}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
