import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'22'}
    ref={ref}
    viewBox={'0 0 24 22'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M17.89 19.8499H6.11004C5.79236 19.8502 5.48375 19.744 5.23358 19.5482C4.9834 19.3524 4.8061 19.0784 4.73004 18.7699L2.08004 8.15992C2.05418 8.05663 2.05222 7.9488 2.07432 7.84464C2.09642 7.74048 2.14199 7.64274 2.20756 7.55884C2.27313 7.47495 2.35698 7.40712 2.45272 7.36052C2.54845 7.31392 2.65356 7.28977 2.76004 7.28992H21.24C21.3465 7.28977 21.4516 7.31392 21.5474 7.36052C21.6431 7.40712 21.7269 7.47495 21.7925 7.55884C21.8581 7.64274 21.9037 7.74048 21.9258 7.84464C21.9479 7.9488 21.9459 8.05663 21.92 8.15992L19.27 18.7699C19.194 19.0784 19.0167 19.3524 18.7665 19.5482C18.5163 19.744 18.2077 19.8502 17.89 19.8499V19.8499Z'
      }
      stroke={'#151515'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'2.5'}
    />
    <path
      d={'M9.7999 2.14996L6.8999 7.28996'}
      stroke={'#151515'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'2.5'}
    />
    <path
      d={'M13.8804 2.14996L16.7904 7.28996'}
      stroke={'#151515'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'2.5'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const CartIcon = memo(ForwardRef)
