import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 22 24'}
    width={'22'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={'M2 22L2.79 19.12C5.4 9.61996 16.6 9.61996 19.21 19.12L20 22'}
      stroke={'#151515'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'2.5'}
    />
    <path
      d={
        'M11 11.98C13.7614 11.98 16 9.74142 16 6.98C16 4.21857 13.7614 1.98 11 1.98C8.23858 1.98 6 4.21857 6 6.98C6 9.74142 8.23858 11.98 11 11.98Z'
      }
      stroke={'#151515'}
      strokeLinecap={'round'}
      strokeLinejoin={'bevel'}
      strokeWidth={'2.5'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const UserIcon = memo(ForwardRef)
