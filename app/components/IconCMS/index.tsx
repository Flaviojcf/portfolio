type IconCMSProps = {
  icon: string
}

export function IconCMS({ icon }: IconCMSProps) {
  return <div dangerouslySetInnerHTML={{ __html: icon }}></div>
}
