import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CMSRichText>

export function RichText({ ...props }: RichTextProps) {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-gray-50 font-medium">{children}</b>
        ),
        a: ({ children, ...props }) => (
          <a
            {...props}
            className="hover:text-emerald-500 transition-colors underline"
          >
            {children}
          </a>
        ),
      }}
    />
  )
}
