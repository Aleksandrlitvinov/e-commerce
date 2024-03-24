import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'9'}
    ref={ref}
    viewBox={'0 0 6 9'}
    width={'6'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M1.5332 7.68667L4.2732 4.94667C4.39737 4.82176 4.46706 4.65279 4.46706 4.47667C4.46706 4.30055 4.39737 4.13158 4.2732 4.00667L1.60654 1.34'
      }
      stroke={'white'}
      strokeLinecap={'round'}
      strokeLinejoin={'bevel'}
      strokeWidth={'2.5'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const ArrowRightIcon = memo(ForwardRef)
