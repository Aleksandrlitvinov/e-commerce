import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'7'}
    ref={ref}
    viewBox={'0 0 9 7'}
    width={'9'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M1.31348 2.03333L4.05348 4.77332C4.17838 4.89749 4.34735 4.96719 4.52348 4.96719C4.6996 4.96719 4.86857 4.89749 4.99348 4.77332L7.66014 2.10666'
      }
      stroke={'white'}
      strokeLinecap={'round'}
      strokeLinejoin={'bevel'}
      strokeWidth={'2.5'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const ArrowDownIcon = memo(ForwardRef)
