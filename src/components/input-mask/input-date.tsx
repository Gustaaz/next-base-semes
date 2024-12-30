import { forwardRef } from 'react'
import { FormatUtils } from '@4us-dev/utils'
import { Input, type InputProps } from '../ui/input'

const formatterUltil = new FormatUtils()
const InputDate = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    const formaterDate = (value: string | null | undefined) =>
      value
        ? formatterUltil
            .formatOnlyIntegers(value)
            .replace(/(\d{2})(\d{2})(\d{2})/, '$1/$2/$3')
        : ''

    return (
      <Input {...props} formatter={formaterDate} ref={ref} maxLength={10} />
    )
  },
)

InputDate.displayName = 'InputDate'

export { InputDate }
