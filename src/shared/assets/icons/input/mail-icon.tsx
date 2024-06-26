import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'12'}
    ref={ref}
    viewBox={'0 0 16 12'}
    width={'16'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M13.3334 1.33337H2.66671C1.93033 1.33337 1.33337 1.93033 1.33337 2.66671V9.33338C1.33337 10.0698 1.93033 10.6667 2.66671 10.6667H13.3334C14.0698 10.6667 14.6667 10.0698 14.6667 9.33338V2.66671C14.6667 1.93033 14.0698 1.33337 13.3334 1.33337Z'
      }
      stroke={'#151515'}
      strokeLinecap={'round'}
      strokeLinejoin={'bevel'}
      strokeWidth={'1.5'}
    />
    <path
      d={
        'M2 2L7.20667 7.20667C7.3305 7.33064 7.47755 7.42898 7.63941 7.49608C7.80128 7.56318 7.97478 7.59772 8.15 7.59772C8.32522 7.59772 8.49872 7.56318 8.66059 7.49608C8.82245 7.42898 8.9695 7.33064 9.09333 7.20667L14.28 2'
      }
      stroke={'#151515'}
      strokeLinecap={'round'}
      strokeLinejoin={'bevel'}
      strokeWidth={'1.5'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const MailIcon = memo(ForwardRef)
