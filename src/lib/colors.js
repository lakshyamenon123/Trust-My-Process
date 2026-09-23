// per-item accent colors used across interest/strength/skill/career/achievement
// cards — kept outside Tailwind's static class scanning since they're chosen
// dynamically per data item
export function badgeStyle(hex) {
  return { backgroundColor: `${hex}1a`, color: hex }
}

export function ringStyle(hex) {
  return { stroke: hex }
}
