import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'8'}
    ref={ref}
    viewBox={'0 0 8 8'}
    width={'8'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={'M7.17995 7.18007L0.819946 0.820068'}
      strokeLinecap={'round'}
      strokeLinejoin={'bevel'}
      strokeWidth={'1.5'}
    />
    <path
      d={'M7.17995 0.820068L0.819946 7.18007'}
      strokeLinecap={'round'}
      strokeLinejoin={'bevel'}
      strokeWidth={'1.5'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const CloseIcon = memo(ForwardRef)
