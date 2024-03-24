import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'10'}
    ref={ref}
    viewBox={'0 0 6 10'}
    width={'6'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M4.46658 1.81333L1.72658 4.55333C1.60241 4.67823 1.53271 4.8472 1.53271 5.02333C1.53271 5.19945 1.60241 5.36842 1.72658 5.49333L4.39324 8.15999'
      }
      stroke={'white'}
      strokeLinecap={'round'}
      strokeLinejoin={'bevel'}
      strokeWidth={'2.5'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const ArrowLeftIcon = memo(ForwardRef)
