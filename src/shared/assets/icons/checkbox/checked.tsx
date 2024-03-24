import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'22'}
    ref={ref}
    viewBox={'0 0 22 22'}
    width={'22'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M18.9999 1H2.99988C1.89531 1 0.999878 1.89543 0.999878 3V19C0.999878 20.1046 1.89531 21 2.99988 21H18.9999C20.1045 21 20.9999 20.1046 20.9999 19V3C20.9999 1.89543 20.1045 1 18.9999 1Z'
      }
      fill={'#6A983C'}
      stroke={'#46760A'}
      strokeLinecap={'round'}
      strokeLinejoin={'bevel'}
      strokeWidth={'1.5'}
    />
    <path
      d={'M5.55969 11.8501L8.61969 14.9101L16.4397 7.09009'}
      stroke={'#FDFDFD'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'1.5'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const CheckedIcon = memo(ForwardRef)
