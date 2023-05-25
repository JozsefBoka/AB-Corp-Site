import { Underline } from "../components/icons"

/**
 * Used to extend the default PortableText components
 * @param {*} props 
 * @returns 
 */
export function getPortableTextComponents(props) {
  return {
    block: {
      smallFont: ({ children, value }) => {
        return (
          <p className="text-sm leading-3">
            {children}
          </p>
        )
      },
      break: () => {
        return <br/>
      }
    },
    types: {
      // image: ({ value }) => <Image src={value.imageUrl} layout="fill" />,
      callToAction: ({ value, isInline }) =>
        isInline ? (
          <a href={value.url}>{value.text}</a>
        ) : (
          <div className="callToAction">{value.text}</div>
        ),
    },

    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
        return (
          <a href={value.href} rel={rel}>
            {children}
          </a>
        )
      },
      customUnderline: ({ children, value }) => {
        return (
          <span className="relative">
            {children}
            <span className="accent-underline">
              <Underline fill={props.themeColors.accent} />
            </span>
          </span>
        )
      }
    },

    hardBreak: ({ value }) => {
      return (<br />)
    },
  }
}
