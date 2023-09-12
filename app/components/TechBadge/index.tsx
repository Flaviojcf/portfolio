interface ITechBadge {
  name: string
}

export function TechBadge({ name }: ITechBadge) {
  return (
    <span className="text-emerald-400 bg-emerald-900/80 text-sm py-1 px-3 rounded-lg">
      {name}
    </span>
  )
}
