import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'14'}
    ref={ref}
    viewBox={'0 0 14 14'}
    width={'14'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M8.19328 10.4333C10.7706 10.4333 12.8599 8.34397 12.8599 5.76664C12.8599 3.18931 10.7706 1.09998 8.19328 1.09998C5.61595 1.09998 3.52661 3.18931 3.52661 5.76664C3.52661 8.34397 5.61595 10.4333 8.19328 10.4333Z'
      }
      stroke={'#151515'}
      strokeLinecap={'round'}
      strokeLinejoin={'bevel'}
      strokeWidth={'1.5'}
    />
    <path
      d={'M4.81343 9.23999L1.68677 12.3667'}
      stroke={'#151515'}
      strokeLinecap={'round'}
      strokeLinejoin={'bevel'}
      strokeWidth={'1.5'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const SearchIcon = memo(ForwardRef)
