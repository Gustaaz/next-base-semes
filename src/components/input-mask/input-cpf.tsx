
import { forwardRef } from 'react'
import { FormatUtils } from '@4us-dev/utils'
import { Input, type InputProps } from '../ui/input'

const formatterUltil = new FormatUtils()

export const InputCPF = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <Input
        {...props}
        formatter={formatterUltil.formatCPF}
        ref={ref}
        maxLength={14}
      />
    )
  },
)

InputCPF.displayName = 'InputCPF'
